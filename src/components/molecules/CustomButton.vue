<template>
  <q-btn
    :label="label"
    :color="color"
    :flat="flat"
    :outline="outline"
    :size="size"
    :icon="icon"
    @click="handleClick"
  />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { QBtn } from 'quasar'

defineProps({
  label: { type: String, required: true },
  color: { type: String, default: 'blue' },
  flat: { type: Boolean, default: false },
  outline: { type: Boolean, default: false },
  size: { type: String, default: 'md' },
  icon: { type: String},
})

const emit = defineEmits(['click'])

function handleClick() {
  emit('click')
}
</script>
