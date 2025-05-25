<template>
  <header>Collectify - Organiza tus colecciones</header>
  <main>
    <!-- Show the Create Collection Form only when no collection is selected -->
    <CollectionForm v-if="!selectedCollection && !collectionBeingEdited" @add="handleAddCollection" />
    
    <!-- Show the Edit Collection Form -->
    <form v-else-if="collectionBeingEdited" @submit.prevent="handleUpdateCollection">
      <input v-model="collectionBeingEdited.name" placeholder="Nombre de la colección" required />
      <input v-model="collectionBeingEdited.image" placeholder="URL de imagen de la colección" />
      <button type="submit">Actualizar colección</button>
      <button type="button" @click="cancelEditCollection">Cancelar</button>
    </form>
    
    <!-- Show the Collection List -->
    <CollectionList
      v-if="!selectedCollection"
      :collections="collections"
      @select="handleSelectCollection"
      @delete="handleDeleteCollection"
      @edit="startEditCollection"
    />
    
    <!-- Show the Collection Details -->
    <CollectionDetail
      v-else
      :collection="selectedCollection"
      @back="selectedCollection = null"
      @add-item="handleAddItem"
      @update-item="handleUpdateItem"
      @delete-item="handleDeleteItem"
    />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {
  fetchCollections,
  createCollection,
  deleteCollection,
  updateCollection,
  addItemToCollection,
  updateItemInCollection,
  deleteItemFromCollection,
} from './services/api.js';
import CollectionForm from './components/CollectionForm.vue';
import CollectionList from './components/CollectionList.vue';
import CollectionDetail from './components/CollectionDetail.vue';

const collections = ref([]);
const selectedCollection = ref(null);
const collectionBeingEdited = ref(null); // Track the collection being edited

onMounted(async () => {
  try {
    collections.value = await fetchCollections();
  } catch (error) {
    console.error('Error fetching collections:', error);
  }
});

async function handleAddCollection(collection) {
  try {
    const newCollection = await createCollection(collection);
    collections.value.push(newCollection);
  } catch (error) {
    console.error('Error creating collection:', error);
  }
}

async function handleDeleteCollection(id) {
  try {
    await deleteCollection(id);
    collections.value = collections.value.filter(col => col._id !== id);
  } catch (error) {
    console.error('Error deleting collection:', error);
  }
}

function handleSelectCollection(index) {
  selectedCollection.value = collections.value[index];
}

function startEditCollection(id) {
  const collection = collections.value.find(col => col._id === id);
  collectionBeingEdited.value = { ...collection }; // Copy the collection data into the editing state
}

async function handleUpdateCollection() {
  try {
    const updatedCollection = await updateCollection(
      collectionBeingEdited.value._id,
      collectionBeingEdited.value
    );
    const index = collections.value.findIndex(col => col._id === updatedCollection._id);
    if (index !== -1) collections.value[index] = updatedCollection;
    collectionBeingEdited.value = null; // Clear the editing state
  } catch (error) {
    console.error('Error updating collection:', error);
  }
}

function cancelEditCollection() {
  collectionBeingEdited.value = null; // Cancel editing
}

async function handleAddItem(item) {
  try {
    const updatedCollection = await addItemToCollection(selectedCollection.value._id, item);
    selectedCollection.value.items = updatedCollection.items;
  } catch (error) {
    console.error('Error adding item:', error);
  }
}

async function handleUpdateItem(itemId, item) {
  try {
    const updatedCollection = await updateItemInCollection(selectedCollection.value._id, itemId, item);
    selectedCollection.value.items = updatedCollection.items;
  } catch (error) {
    console.error('Error updating item:', error);
  }
}

async function handleDeleteItem(itemId) {
  try {
    const updatedCollection = await deleteItemFromCollection(selectedCollection.value._id, itemId);
    selectedCollection.value.items = updatedCollection.items;
  } catch (error) {
    console.error('Error deleting item:', error);
  }
}
</script>

<style scoped>
/* Reutiliza tu CSS actual aquí (collection-card, form, etc.) */
</style>