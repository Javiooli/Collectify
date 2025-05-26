<template>
  <div>
    <button @click="$emit('back')" class="back-button">← Volver</button>
    
    <h2>{{ collection.name }}</h2>

    

    <!-- Create Item Form -->
    <form v-if="!editingItem" @submit.prevent="addItem">
      <input v-model="item.name" placeholder="Nombre del ítem" required />
      <textarea v-model="item.description" placeholder="Descripción"></textarea>
      <select v-model="item.category">
        <option value="" disabled selected>Categoría</option>
        <option v-for="cat in uniqueCategories" :key="cat" :value="cat">{{ cat }}</option>
        <option value="Nueva categoría">Nueva categoría</option>
      </select>
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
        <option value="" disabled selected>Categoría</option>
        <option v-for="cat in uniqueCategories" :key="cat" :value="cat">{{ cat }}</option>
        <option value="Nueva categoría">Nueva categoría</option>
      </select>
      <input
        v-if="editingItem.category === 'Nueva categoría'"
        v-model="editingItem.newCategory"
        placeholder="Escribe la nueva categoría"
      />
      <input v-model="editingItem.image" placeholder="URL de imagen del ítem" />
      <button type="submit">Actualizar ítem</button>
      <button type="button" @click="cancelEdit">Cancelar</button>
    </form>

    <!-- Toggle View Button -->
    <button @click="toggleViewMode" class="toggle-view-button">
      <i :class="viewMode === 'list' ? 'fas fa-th' : 'fas fa-list'"></i>
    </button>

    <!-- Items Display -->
    <div :class="['items-container', viewMode]">
      <div
        v-for="(i, idx) in collection.items"
        :key="idx"
        class="item"
        @click="openModal(i)"
      >
        <strong>{{ i.name }}</strong>
        <p><em>{{ i.category }}</em></p>
        <p class="description">{{ i.description.slice(0, 100) }}{{ i.description.length > 100 ? '...' : '' }}</p>
        <img v-if="i.image" :src="i.image" class="item-image" />
        <div class="button-container">
          <button @click.stop="$emit('delete-item', i._id)" class="delete-button">Eliminar</button>
          <button @click.stop="startEdit(i)" class="edit-button">Editar</button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="selectedItem" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeModal">×</button>
        <h3>{{ selectedItem.name }}</h3>
        <p><strong>Categoría:</strong> {{ selectedItem.category }}</p>
        <p><strong>Descripción:</strong> {{ selectedItem.description }}</p>
        <img v-if="selectedItem.image" :src="selectedItem.image" class="modal-image" />
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
const editingItem = ref(null);
const viewMode = ref('list'); // Track the current view mode
const selectedItem = ref(null); // Track the currently selected item for the modal

const uniqueCategories = computed(() => {
  const categories = props.collection.items.map(i => i.category);
  return [...new Set(categories.filter(cat => cat))];
});

async function addItem() {
  try {
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
  editingItem.value = { ...existingItem };
}

async function updateItem() {
  try {
    if (editingItem.value.category === 'Nueva categoría') {
      editingItem.value.category = editingItem.value.newCategory;
    }

    const updatedCollection = await updateItemInCollection(
      props.collection._id,
      editingItem.value._id,
      editingItem.value
    );
    props.collection.items = updatedCollection.items;
    editingItem.value = null;
  } catch (error) {
    console.error('Error updating item:', error);
  }
}

function cancelEdit() {
  editingItem.value = null;
}

function toggleViewMode() {
  viewMode.value = viewMode.value === 'list' ? 'grid' : 'list';
}

function openModal(item) {
  selectedItem.value = item;
}

function closeModal() {
  selectedItem.value = null;
}
</script>