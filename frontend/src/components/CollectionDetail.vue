<template>
  <div>
    <button @click="$emit('back')" class="back-button">← Volver</button>
    
    <h2>{{ collection.name }}</h2>

    <!-- Create Item Form -->
    <form v-if="!editingItem" @submit.prevent="addItem">
      <input v-model="item.name" placeholder="Nombre del ítem" required />
      <textarea v-model="item.description" placeholder="Descripción"></textarea>
      <select v-model="item.category">
        <option value="" disabled selected>Categoría</option> <!-- Disabled and selected by default -->
        <option v-for="cat in uniqueCategories" :key="cat" :value="cat">{{ cat }}</option>
        <option value="Nueva categoría">Nueva categoría</option>
      </select>
      <!-- Show input for new category if "Nueva categoría" is selected -->
      <input
        v-if="item.category === 'Nueva categoría'"
        v-model="item.newCategory"
        placeholder="Escribe la nueva categoría"
      />
      <input v-model="item.image" placeholder="URL de imagen del ítem" />
      <button type="submit">Agregar ítem</button>
    </form>

    <!-- Edit Item Form -->
    <form v-else @submit.prevent="updateItem">
      <input v-model="editingItem.name" placeholder="Nombre del ítem" required />
      <textarea v-model="editingItem.description" placeholder="Descripción"></textarea>
      <select v-model="editingItem.category">
        <option value="" disabled selected>Categoría</option> <!-- Disabled and selected by default -->
        <option v-for="cat in uniqueCategories" :key="cat" :value="cat">{{ cat }}</option>
        <option value="Nueva categoría">Nueva categoría</option>
      </select>
      <!-- Show input for new category if "Nueva categoría" is selected -->
      <input
        v-if="editingItem.category === 'Nueva categoría'"
        v-model="editingItem.newCategory"
        placeholder="Escribe la nueva categoría"
      />
      <input v-model="editingItem.image" placeholder="URL de imagen del ítem" />
      <button type="submit">Actualizar ítem</button>
      <button type="button" @click="cancelEdit">Cancelar</button>
    </form>

    <div v-for="(i, idx) in collection.items" :key="idx" class="item">
      <strong>{{ i.name }}</strong>
      <p><em>{{ i.category }}</em></p>
      <p>{{ i.description }}</p>
      <img v-if="i.image" :src="i.image" class="item-image" />
      <div class="button-container">
        <button @click="$emit('delete-item', i._id)" class="delete-button">Eliminar</button>
        <button @click="startEdit(i)" class="edit-button">Editar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Item from '../models/Item.js';
import { addItemToCollection, updateItemInCollection } from '../services/api.js';

const props = defineProps(['collection']);
const emit = defineEmits(['back', 'delete-item', 'update-item']);

const item = ref(new Item('', '', '', ''));
const editingItem = ref(null); // Track the item being edited

// Compute unique categories from the collection's items
const uniqueCategories = computed(() => {
  const categories = props.collection.items.map(i => i.category);
  return [...new Set(categories.filter(cat => cat))]; // Remove duplicates and empty values
});

async function addItem() {
  try {
    // Use the new category if "Nueva categoría" is selected
    if (item.value.category === 'Nueva categoría') {
      item.value.category = item.value.newCategory;
    }

    const updatedCollection = await addItemToCollection(props.collection._id, {
      name: item.value.name,
      description: item.value.description,
      category: item.value.category,
      image: item.value.image,
    });
    props.collection.items = updatedCollection.items;
    item.value = new Item('', '', '', '');
  } catch (error) {
    console.error('Error adding item:', error);
  }
}

function startEdit(existingItem) {
  editingItem.value = { ...existingItem }; // Copy the item's data into the editing form
}

async function updateItem() {
  try {
    // Use the new category if "Nueva categoría" is selected
    if (editingItem.value.category === 'Nueva categoría') {
      editingItem.value.category = editingItem.value.newCategory;
    }

    const updatedCollection = await updateItemInCollection(
      props.collection._id,
      editingItem.value._id,
      editingItem.value
    );
    props.collection.items = updatedCollection.items;
    editingItem.value = null; // Clear the editing state
  } catch (error) {
    console.error('Error updating item:', error);
  }
}

function cancelEdit() {
  editingItem.value = null; // Cancel editing
}
</script>
