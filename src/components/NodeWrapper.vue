<script setup lang="ts">
defineProps<{ title: string; titleImage?: string }>()

const emit = defineEmits(['remove'])

function remove() {
  emit('remove')
}
</script>

<template>
  <div class="g_node-content">
    <p class="g_node-title">
      {{ title }}
      <img v-if="titleImage" :alt="title" :src="titleImage" />
    </p>
    <div class="g_node-grid" title="Add a new ingredint" @remove="remove">
      <slot />
    </div>
    <button class="g_node-delete" @click="remove()">✕</button>
  </div>
</template>
