<template>
  <div class="head-page">
    <searchBar v-model="searchHandel" />
  </div>
  <div v-if="authors.length === 0">
    <p class="not-found-author">author not found</p>
  </div>
  <div class="all-author-card">
    <authorCard
      v-for="author in authors"
      :key="author.id"
      :author="author"
      @show-book="openBooks"
    />
  </div>

  <q-dialog v-model="showBooks">
    <q-card style="min-width: 400px">
      <q-card-section>
        <div class="text-h6">{{ Author?.name }}</div>
      </q-card-section>

      <q-card-section>
        <div v-if="Author?.books?.length">
          <q-list>
            <q-item v-for="book in Author.books" :key="book.id">
              {{ book.name }}
            </q-item>
          </q-list>
        </div>

        <div v-else>No books found</div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'
import authorCard from '../components/AuthorCard.vue'
import { useAuthor } from 'src/composables/useAuthor'

const showBooks = ref(false)
const Author = ref(null)

const openBooks = (author) => {
  Author.value = author
  showBooks.value = true
}

const { authors, searchHandel } = useAuthor()
</script>

<style scoped>
.head-page {
  width: 100%;
  padding: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.author-form {
  background: #f1f8df;
}
.all-author-card {
  display: grid;
  grid-template-columns: repeat(4, 250px);
  gap: 10px;
  justify-items: center;
  justify-content: center;
  margin-top: 20px;
}

.not-found-author {
  display: flex;
  justify-content: center;
  text-align: center;
  background: rgb(247, 208, 208);
  padding: 10px;
  border-radius: 15px;
  font-size: 18px;
}
</style>
