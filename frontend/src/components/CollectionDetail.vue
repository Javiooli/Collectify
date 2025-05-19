<template>
    <div>
      <button @click="$emit('back')">← Volver</button>
      <h2>{{ collection.name }}</h2>
      <form @submit.prevent="addItem">
        <input v-model="item.name" placeholder="Nombre del ítem" required />
        <textarea v-model="item.description" placeholder="Descripción"></textarea>
        <select v-model="item.category">
          <option value="">Categoría</option>
          <option>Libros</option>
          <option>Monedas</option>
          <option>Figuras</option>
          <option>Otros</option>
        </select>
        <input v-model="item.image" placeholder="URL de imagen del ítem" />
        <button type="submit">Agregar ítem</button>
      </form>
      <div v-for="(i, idx) in collection.items" :key="idx" class="item">
        <strong>{{ i.name }}</strong>
        <p><em>{{ i.category }}</em></p>
        <p>{{ i.description }}</p>
        <img v-if="i.image" :src="i.image" class="item-image" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Item from '../models/Item.js';
  
  const props = defineProps(['collection']);
  const emit = defineEmits(['back']);
  
  const item = ref(new Item('', '', '', ''));
  
  function addItem() {
    props.collection.addItem(new Item(item.value.name, item.value.description, item.value.category, item.value.image));
    item.value = new Item('', '', '', '');
  }
  </script>