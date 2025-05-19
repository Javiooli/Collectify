<template>
    <div>
      <div
        v-for="(col, index) in collections"
        :key="index"
        class="collection-card"
        @click="$emit('select', index)"
      >
        <strong>{{ col.name }}</strong> ({{ col.items.length }} ítems)
        <img v-if="col.image" :src="col.image" class="collection-image" />
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps(['collections']);
  defineEmits(['select']);
  </script>