<template>
    <header>Collectify - Organiza tus colecciones</header>
    <main>
      <CollectionForm @add="handleAdd" />
      <CollectionList v-if="!selected" :collections="collections" @select="selectCollection" />
      <CollectionDetail v-else :collection="selected" @back="selected = null" />
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Collection from './models/Collection.js';
  import CollectionForm from './components/CollectionForm.vue';
  import CollectionList from './components/CollectionList.vue';
  import CollectionDetail from './components/CollectionDetail.vue';
  
  const collections = ref([]);
  const selected = ref(null);
  
  function handleAdd({ name, image }) {
    collections.value.push(new Collection(name, image));
  }
  
  function selectCollection(index) {
    selected.value = collections.value[index];
  }
  </script>
  
  <style scoped>
  /* Reutiliza tu CSS actual aquí (collection-card, form, etc.) */
  </style>