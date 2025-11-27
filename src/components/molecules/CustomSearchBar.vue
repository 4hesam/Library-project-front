<template>
  <q-input
    v-model="query"
    :debounce="debounce"
    placeholder="Search..."
    @input="handleSearch"
    clearable
    rounded
    dense
    outlined
  >
    <template v-slot:prepend>
      <q-icon :name="icon" />
    </template>
  </q-input>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
// import { QInput, QIcon } from 'quasar'

defineProps({
  debounce: { type: Number, default: 300 },
  icon: { type: String, default: 'search' },
})

const emit = defineEmits(['search'])

const query = ref('')

function handleSearch() {
  emit('search', query.value)
}
</script>
