<template>
  <div>
    <div
      v-for="(col, index) in collections"
      :key="index"
      class="collection-card"
      @click="handleCardClick(index)"
    >
      <strong>{{ col.name }}</strong>
      <p>({{ col.items.length }} ítems)</p>
      <img v-if="col.image" :src="col.image" class="collection-image" />
      <div class="button-container">
        <button @click.stop="$emit('delete', col._id)" class="delete-button">Eliminar</button>
        <button @click.stop="$emit('edit', col._id)" class="edit-button">Editar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['collections']);
const emit = defineEmits(['select', 'delete', 'edit']);

// Handle card click
function handleCardClick(index) {
  emit('select', index); // Emit the select event when the card is clicked
}
</script>