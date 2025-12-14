<template>
  <div class="slider-book">
    <q-btn round icon="chevron_left" class="nav-btn left-btn" @click="prev" />

    <div class="books-row">
      <div v-for="book in books" :key="book.id" class="book-card">
        <img :src="book.fileUrl" class="book-img" />
        <div class="text-center q-mt-sm">{{ book.name }}</div>
      </div>
    </div>

    <q-btn round dense icon="chevron_right" class="nav-btn right-btn" @click="next" />
  </div>
</template>

<script setup>
// import { gql } from '@apollo/client/core'
import { gql } from 'graphql-tag'

import { useQuery } from '@vue/apollo-composable'

import { ref, computed } from 'vue'

const index = ref(0)

const Booked = gql`
  query {
    popularBooks {
      id
      name
      fileUrl
    }
  }
`

const { result } = useQuery(Booked)

const books = computed(() => result.value?.popularBooks || [])

const next = () => {
  if (index.value < books.value.length) {
    index.value++
  } else {
    index.value = 0
  }
}

const prev = () => {
  if (index.value > 0) {
    index.value--
  } else {
    index.value = 0
  }
}
</script>

<style scoped>
.slider-book {
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
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
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
