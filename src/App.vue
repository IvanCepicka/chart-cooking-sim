<script setup lang="ts">
import { ref } from 'vue'
import DesignSection from './components/DesignSection.vue'
import RestaurantSection from './components/RestaurantSection.vue'

const tab = ref<'restaurant' | 'design'>('restaurant')
</script>

<template>
  <DesignSection v-if="tab === 'design'" class="section" />
  <RestaurantSection v-else class="section" />

  <div class="tab-bar">
    <button @click="tab = 'restaurant'">Restaurant</button>
    <button @click="tab = 'design'">Design</button>
  </div>
</template>

<style scoped>
.section {
  flex-grow: 1;
}

.tab-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  border-top: solid 1px #ccc;
}
</style>
