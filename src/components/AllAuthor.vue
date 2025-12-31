<template>
  <div class="allauthors">
    <div class="flex justify-between items-center">
      <h4 class="flex justify-between items-center">All Authors</h4>
      <q-btn label="Add Author" color="primary" @click="addButtonModal = true" />
    </div>
    <q-table :rows="rows" :columns="columns" row-key="id" :loading="loading" />
  </div>
  <q-dialog v-model="addButtonModal">
    <q-card class="addauthor-dig">
      <q-card-section class="row items-center">
        <div class="addauthor-back">
          <q-input outlined v-model="form.name" label="Author Name" required />
          <q-btn label="Finish" color="primary" @click="handleAddAuthor" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { onMounted, ref } from 'vue'
// import { gql } from 'graphql-tag'
// import { apolloClient } from 'src/boot/graphql'
import { useAuthor } from 'src/composables/useAuthor'

const { getAuthors, loading, createAuthor } = useAuthor()

const form = ref({ name: '' })
const rows = ref([])
const addButtonModal = ref(false)

const columns = [
  {
    name: 'name',
    label: 'Name',
    field: 'name',
    align: 'left',
    sortable: true,
  },
]

const handleAddAuthor = async () => {
  await createAuthor(form.value)
  const resposne = await getAuthors()
  rows.value = resposne
  addButtonModal.value = false
}

onMounted(async () => {
  const resposne = await getAuthors()
  rows.value = resposne
})
</script>

<style scoped>
.addauthor-dig {
  background: rgb(231, 213, 201);
  border-radius: 20px;
}
.tab-bar {
  border-radius: 20px;
  text-align: center;
}
.all-book-card {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
.addbook-dig {
  background: rgb(231, 213, 201);
  border-radius: 20px;
}
.addbook-back {
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: rgb(214, 165, 130);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 2px 2px 4px 1.5px rgb(172, 171, 171);
}
</style>
