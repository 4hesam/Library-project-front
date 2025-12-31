<template>
  <div class="allbooks">
    <div>
      <div class="flex justify-between items-center">
        <h4 class="tab-bar">All Books</h4>
        <q-btn label="Add Book" color="primary" @click="addButtonModal = true" />
      </div>
      <q-table :rows="rows" :columns="columns" row-key="id" :loading="loading" />
    </div>
  </div>
  <q-dialog v-model="addButtonModal">
    <q-card class="addbook-dig">
      <q-card-section class="row items-center">
        <div class="addbook-back">
          <q-input v-model="form.name" label="Book" required />
          <!-- <q-input v-model="form.authorId" label="Author ID" /> -->
          <q-select outlined v-model="form.author" :options="options" label="Author" />
          <q-input outlined v-model="form.inventory" label="Inventory" type="number" />
          <q-input outlined v-model="form.fileUrl" label="File URL" />
          <q-btn label="Finish" color="primary" @click="handleAddBook" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useBook } from 'src/composables/useBook.js'
import { onMounted, ref } from 'vue'

const addButtonModal = ref(false)

const form = ref({
  name: '',
  author: null,
  inventory: null,
  fileUrl: '',
})

const handleAddBook = () => {
  createBook(form.value)
  addButtonModal.value = false
}

const columns = [
  { name: 'name', label: 'Book', field: 'name', align: 'left', sortable: true },
  { name: 'author', label: 'Author', field: (row) => row.author?.name, align: 'left' },
  { name: 'inventory', label: 'Inventory', field: 'inventory', align: 'center' },
]

const { books: rows, loading, options, createBook,getAuthors } = useBook()

onMounted(() => {
getAuthors()
})
</script>

<style scoped>
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
