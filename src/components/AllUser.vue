<template>
  <div>
    <div class="flex justify-between items-center">
      <h4 class="tab-bar">All Users</h4>
      <!-- <q-btn label="Add User" color="primary" @click="addButtonModal = true" /> -->
    </div>
    <q-table :rows="rows" :columns="columns" row-key="id" :loading="loading" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gql } from 'graphql-tag'
import { apolloClient } from 'src/boot/graphql'

const columns = [
  {
    name: 'name',
    label: 'User Name',
    field: 'name',
    align: 'left',
    sortable: true,
  },
  {
    name: 'email',
    label: 'Email',
    field: 'email',
    align: 'left',
    sortable: true,
  },
]
const user_query = gql`
  query {
    Users {
      id
      username
      email
    }
  }
`
const rows = ref([])
const loading = ref(false)
const getUsers = async () => {
  loading.value = true
  try {
    const { data } = await apolloClient.query({
      query: user_query,
      fetchPolicy: 'no-cache',
    })

    rows.value = data.Users.map((user) => ({
      id: user.id,
      name: user.username,
      email: user.email,
    }))
  } catch (error) {
    console.error('GraphQL Error:', error)
  } finally {
    loading.value = false
  }
}
onMounted(() => {
  getUsers()
})
</script>

<style scoped></style>
