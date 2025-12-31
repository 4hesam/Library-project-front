<template>
  <div>
    <div class="slider-book">
      <q-btn round icon="chevron_left" class="nav-btn left-btn" @click="prev" />

      <div class="books-row">
        <div v-for="book in books" :key="book.id" class="book-card">
          <img :src="book.book.fileUrl" class="book-img" />
          <div class="text-center q-mt-sm">{{ book.name }}</div>
          <div class="time-class">
            <div class="strat-class">
              {{ moment(book.startTime).format('YYYY-MM-DD') }}
            </div>
            <div class="end-class">{{ moment(book.endTime).format('YYYY-MM-DD') }}</div>
          </div>
        </div>
      </div>

      <q-btn round dense icon="chevron_right" class="nav-btn right-btn" @click="submit" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import moment from 'jalali-moment'
import { useBook } from 'src/composables/useBook'

const { confirmBorrow } = useBook()

const form = reactive({
  startTime: '',
  endTime: '',
})

const submit = async () => {
  try {
    await confirmBorrow(form.startTime, form.endTime)
  } catch (error) {
    console.error('Error confirming borrow:', error)
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
.time-class {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin-top: 8px;
}
.strat-class,
.end-class {
  font-size: 14px;
  color: black;
  background: #ffffff;
  padding: 2px;
  border-radius: 5px;
}
</style>
