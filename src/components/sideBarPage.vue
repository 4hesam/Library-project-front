<template>
  <div class="sidebar">
    <q-item clickable  v-ripple  @click="setActive(1)">
      <q-item-section avatar>
        <q-icon name="dashboard"/>
      </q-item-section>
      <q-item-section > Dashboard </q-item-section>
    </q-item>
    <q-item clickable  v-ripple @click="setActive(2)">
      <q-item-section avatar>
        <q-icon name="confirmation_number" />
      </q-item-section>
      <q-item-section > bookBorrow </q-item-section>
    </q-item>
    <q-item clickable  v-ripple @click="setActive(3)">
      <q-item-section avatar>
        <q-icon name="account_box" />
      </q-item-section>
      <q-item-section  > Profile </q-item-section>
    </q-item>
    <q-item clickable  v-ripple  @click="setActive(4)">
      <q-item-section avatar>
        <q-icon name="edit_attributes" />
      </q-item-section>
      <q-item-section > enableBorrow </q-item-section>
    </q-item>
  </div>
</template>

<script setup>
const emit = defineEmits(['change-active'])

const setActive = (val) => {
  emit('change-active', val)
}
</script>

<style scoped>
.sidebar {
  background: rgb(226, 231, 228);
  padding: 10px;
  gap: 5px;
  margin-left: 15px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 4px 1.5px rgb(172, 171, 171);
}
</style>
