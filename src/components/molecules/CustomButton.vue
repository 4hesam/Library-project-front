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

// تعریف props به صورت مستقیم بدون ایجاد متغیر اضافی
defineProps({
  label: { type: String, required: true },
  color: { type: String, default: 'blue' },
  flat: { type: Boolean, default: false },
  outline: { type: Boolean, default: false },
  size: { type: String, default: 'md' },
  icon: { type: String},
})

// تعریف emit برای رویداد کلیک
const emit = defineEmits(['click'])

// تابع برای emit کردن رویداد کلیک
function handleClick() {
  emit('click')
}
</script>
