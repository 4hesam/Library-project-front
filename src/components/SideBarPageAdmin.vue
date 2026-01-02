<template>
  <div class="sidebar">
    <q-item clickable v-ripple @click="setActives(1)">
      <q-item-section avatar>
        <q-icon name="dashboard" />
      </q-item-section>
      <q-item-section> All User </q-item-section>
    </q-item>
    <q-item clickable v-ripple @click="setActives(2)">
      <q-item-section avatar>
        <q-icon name="confirmation_number" />
      </q-item-section>
      <q-item-section> All Book </q-item-section>
    </q-item>
    <q-item clickable v-ripple @click="setActives(3)">
      <q-item-section avatar>
        <q-icon name="account_box" />
      </q-item-section>
      <q-item-section> All Auther </q-item-section>
    </q-item>
    <q-item clickable v-ripple @click="logout" class="logout-btn">
      <q-item-section> <q-btn label="LogOut" flat color="red" @click="logout" /> </q-item-section>
    </q-item>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from 'src/stores/auth'

const router = useRouter()
const emit = defineEmits(['change-actives'])

const setActives = (val) => {
  emit('change-actives', val)
}

const authStore = useUserStore()

const logout = async () => {
  authStore.removeToken()
  await router.push('/')
  router.go(0)
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
  width: fit-content;
  height: 88vh;
}
.logout-btn {
  outline: 1px solid red;
  border-radius: 10px;
  margin: 0px;
  padding: 0px;
  display: flex;
}
</style>
