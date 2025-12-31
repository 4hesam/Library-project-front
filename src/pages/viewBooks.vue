<template>
  <div class="book-form">
    <div class="head-page">
      <searchBar v-model="searchHandel" />
      <q-select color="red" filled v-model="model" :options="options" label="sort" class="sort">
        <template v-if="model" v-slot:append>
          <q-icon name="cancel" @click.stop.prevent="model = null" class="cursor-pointer" />
        </template>
      </q-select>
    </div>
    <div v-if="books.length === 0">
      <p class="not-found-book">book not found</p>
    </div>
    <div v-else class="all-book-card">
      <BookCard v-for="book in books" :key="book.id" :book="book" />
    </div>
    <div class="q-pa-lg flex flex-center">
      <q-pagination v-model="current" :max="totalPages" />
    </div>
  </div>

</template>

<script setup>
// import CusBtn from 'src/components/molecules/CustomButton.vue'
import searchBar from '../components/molecules/CustomSearchBar.vue'
import BookCard from '../components/BookCard.vue'
import { useBook } from 'src/composables/useBook.js'
  const options = ['Price: Low to High', 'Price: High to Low', 'best selling', 'free']

const {
  model,
  searchHandel,
  books,
  current,
  totalPages,
} = useBook()
</script>

<style scoped lang="scss">
.sort {
  border-radius: 10px;
  background: none;
  * {
    border-radius: 10px;
  }
}

.head-page {
  width: 100%;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.book-form {
  background: #f1f8df;
}
.all-book-card {
  display: grid;
  grid-template-columns: repeat(4, 250px);
  gap: 10px;
  justify-items: center;
  justify-content: center;
  margin-top: 20px;
}

.not-found-book {
  display: flex;
  justify-content: center;
  text-align: center;
  background: rgb(247, 208, 208);
  padding: 10px;
  border-radius: 15px;
  font-size: 18px;
}


</style>
