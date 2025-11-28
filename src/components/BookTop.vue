<template>
  <div class="relative-position slider-container">

    <!-- فلش چپ -->
    <q-btn
      round
      dense
      icon="chevron_left"
      class="nav-btn left-btn"
      @click="prev"
    />

    <!-- لیست کتاب‌ها -->
    <div class="books-row">
      <div
        v-for="book in visibleBooks"
        :key="book.id"
        class="book-card"
      >
        <img :src="book.image" class="book-img" />
        <div class="text-center q-mt-sm">{{ book.title }}</div>
      </div>
    </div>

    <!-- فلش راست -->
    <q-btn
      round
      dense
      icon="chevron_right"
      class="nav-btn right-btn"
      @click="next"
    />

  </div>
</template>

<script setup>
import { ref, computed } from "vue"


const books = [
  { id: 1, title: "Ulysses by James Joyce", image: "/src/assets/Book01 Ulysses by James Joyce.jpg" },
  { id: 2, title: "In Search of Lost Time by Marcel Proust", image: "/src/assets/book02  In Search of Lost Time by Marcel Proust.jpg" },
  { id: 3, title: "The Great Gatsby by F. Scott Fitzgerald", image: "/src/assets/book 03 The Great Gatsby by F. Scott Fitzgerald.jpg" },
  { id: 4, title: "The Catcher in the Rye by J. D. Salinger", image: "/src/assets/book 04 The Catcher in the Rye by J. D. Salinger.jpg" },
  { id: 5, title: "One Hundred Years of Solitude by Gabriel García Márquez", image: "/src/assets/book 05 One Hundred Years of Solitude by Gabriel García Márquez.jpg" },
]

const index = ref(0)
const maxVisible = 5

const visibleBooks = computed(() => {
  return books.slice(index.value, index.value + maxVisible)
})

const next = () => {
  if (index.value + maxVisible < books.length) {
    index.value++
  }
}

const prev = () => {
  if (index.value > 0) {
    index.value--
  }
}
</script>

<style scoped>
.slider-container {
  width: 100%;
  height: 260px;
  position: relative;
}

.books-row {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.book-card {
  width: 180px;
  text-align: center;
  flex-shrink: 0;
  margin: 30px;
}

.book-img {
  width: 180px;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
}

.nav-btn {
  position: absolute;
  top: 40%;
  z-index: 10;
  background: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.25);
}

.left-btn {
  left: 0;
  margin: 20px;
}

.right-btn {
  right: 0;
  margin: 20px;
}
</style>

