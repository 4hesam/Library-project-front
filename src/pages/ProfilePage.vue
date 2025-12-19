<template>
  <div class="Dashboard">
    <Sidebar @change-active="onChangeActive" />

    <div class="box-edit" v-show="active === 1">dashboard</div>
    <div class="box-edit" v-show="active === 2"><bookBorrow /></div>
    <div class="box-edit" v-show="active === 3">
      <div>
        <div class="info-box">
          <q-icon name="account_box" style="scale: 150%" />

          <p class="info">UserName: {{ user.username }}</p>
        </div>
        <div class="info-box">
          <q-icon name="alternate_email" style="scale: 150%" />
          <p class="info">Email: {{ user.email }}</p>
        </div>
      </div>
    </div>
    <div class="box-edit" v-show="active === 4">enableBorrow</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '/src/components/sideBarPage.vue'
import BookBorrow from '/src/components/userBorrowBook.vue'
const active = ref(3)

const onChangeActive = (val) => {
  active.value = val
}
// import { gql } from 'graphql-tag'
// import { useQuery } from '@vue/apollo-composable'
import { useUserStore } from 'src/stores/auth.js'
import { storeToRefs } from 'pinia'

// const USER_INFO = gql`
//   query {
//     me {
//       id
//       username
//       email
//     }
//   }
// `

// const { result } = useQuery(USER_INFO)

// watch(result, (newValue) => {
//   if (newValue?.me) {
//     userStore.setUser(newValue.me)
//   }
// })

const { user } = storeToRefs(useUserStore())
// const user = computed(() => userStore.user)
</script>

<style>
.Dashboard {
  display: flex;
}
.box-edit {
  background: rgb(226, 231, 228);
  padding: 10px;
  gap: 5px;
  margin-left: 15px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 4px 1.5px rgb(172, 171, 171);
  width: 100%;
  /* height: 100%; */
}
.info-box {
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background: white;
  display: flex;
  /* align-content: center; */
  align-items: center;
}
.info {
  display: flex;
  text-align: center;
  align-items: center;
  padding: 5px !important;
  margin: 0px !important;
}
</style>
