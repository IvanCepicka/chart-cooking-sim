<script setup lang="ts">
import { computed } from 'vue'
import { spices } from '../data.ts'
import { Handle, Position } from '@vue-flow/core'
import NodeWrapper from './NodeWrapper.vue'

const emit = defineEmits(['remove'])

const props = defineProps<{
  id: string
  data: {
    id: string
    amount: number
  }
}>()

const data = computed(() => spices.find((s) => s.id === props.data.id))

function remove() {
  emit('remove', props.id)
}
</script>

<template>
  <div class="vue-flow__node-default g_node">
    <NodeWrapper title="Spice" @remove="remove">
      <label>Spice</label>
      <div class="g_name-icon">
        <p>{{ data?.name }}</p>
        <img v-if="data?.icon" :src="data?.icon" :alt="data?.name" />
      </div>

      <label>Amount</label>
      <input type="number" step="1" min="1" v-model="props.data.amount" />
    </NodeWrapper>

    <Handle type="target" :position="Position.Top" />
    <Handle type="source" :position="Position.Bottom" />
  </div>
</template>
