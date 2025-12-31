<template>
  <div class="header-all">
    <!-- $q.screen.lt.xs -->
    <img
      src="/src/assets/logo library black.jpg"
      class="logo"
      @click="GoHome"
      style="cursor: pointer"
    />
    <div class="short-tag">
      <p @click="GoHome">Home</p>
      <p @click="GoBooks">Book</p>
      <p>Audiobooks</p>
      <p>Free Content</p>
      <p @click="GoAuthors" >Authors</p>
      <p style="color: crimson">Premium Library</p>
    </div>
    <div class="search-box">
      <CusSearchBar :debounce="500" icon="search" class="search-ico" />
    </div>
    <div class="btn-head">
      <CusButton outline color="LightGray	" icon="shopping_cart" class="shop-ico" />
      <CusButton color="red" label="Login" v-if="!isLoggedIn" class="log-ico" @click="LoginPage" />
      <q-btn round color="white" v-else-if="!isAdmin" @click="Dashboard">
        <q-avatar size="40px">
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
        </q-avatar>
      </q-btn>
      <q-btn round color="white" v-else @click="Admin">
        <q-avatar size="40px">
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
        </q-avatar>
      </q-btn>
    </div>
  </div>
</template>

<script setup>
// import LoginPage from 'src/components/LoginPage.vue'
import CusSearchBar from 'src/components/molecules/CustomSearchBar.vue'
import CusButton from 'src/components/molecules/CustomButton.vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { useUserStore } from 'src/stores/auth.js'
import { storeToRefs } from 'pinia'

const { user } = storeToRefs(useUserStore())

const router = useRouter()

const GoHome = () => {
  router.push('/')
}
const LoginPage = () => {
  router.push('/login')
}
const Dashboard = () => {
  router.push('/dashboard')
}
const Admin = () => {
  router.push('/admin')
}
const GoBooks = () => {
  router.push('/books')
}
const GoAuthors = () => {
  router.push('/authors')
}
const token = localStorage.getItem('token')

const isLoggedIn = computed(() => !!token)
const isAdmin = computed(() => user.value?.role === 'admin')
</script>

<style scoped>
.header-all {
  display: flex;
  align-items: center;
  padding: 10px;
  /* margin: 5px; */
  /* box-shadow: 0px 2px 4px black; */
  /* border-radius: 10px; */
  /* background-color: white; */
  color: black;
}
.logo {
  height: 40px;
  border-radius: 50px;
}
.short-tag {
  display: flex;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  flex: 1;
  gap: 10px;
  margin-left: 10px;
  padding-top: 10px;
}
.search-box {
  margin-left: auto;
  display: flex;
  align-items: center;

  /* width: 100%; */
}
.btn-head {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 10px;
}
.shop-ico {
  border-radius: 5px;
  width: 40px;
  box-shadow: 0.5px 2px 4px black;
}
.log-ico {
  box-shadow: 0px 0.5px 4px black;
}
p {
  cursor: pointer;
}
</style>
