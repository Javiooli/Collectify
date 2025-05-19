<template>
    <form @submit.prevent="createCollection">
      <input v-model="name" placeholder="Nombre de la colección" required />
      <input v-model="image" placeholder="URL de imagen" />
      <button type="submit">Crear colección</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const emit = defineEmits(['add']);
  const name = ref('');
  const image = ref('');
  
  function createCollection() {
    emit('add', { name: name.value, image: image.value });
    name.value = '';
    image.value = '';
  }
  </script>