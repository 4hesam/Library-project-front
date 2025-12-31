<!-- <template>
  <div class="book-form">
    <div class="head-page">
      <searchBar v-model="searchHandel" />
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
import searchBar from '../components/molecules/CustomSearchBar.vue'
// import useAuthor from '../composables/useAuthor.js'

// const { getAuthors } = useAuthor()
</script>

<style></style> -->
