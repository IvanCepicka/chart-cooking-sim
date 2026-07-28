<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import NodeWrapper from './NodeWrapper.vue'
import blendIcon from '../assets/icons/mixer.svg'

const emit = defineEmits(['remove'])

const props = defineProps<{
  id: string
}>()

function remove() {
  emit('remove', props.id)
}
</script>

<template>
  <div class="vue-flow__node-default g_node">
    <NodeWrapper title="Blend" :title-image="blendIcon" @remove="remove" />

    <Handle type="target" :position="Position.Top" />
    <Handle type="source" :position="Position.Bottom" />
  </div>
</template>
