<template>
  <div class="author-card">
    <img :src="author.fileUrl" class="author-img" />
    <div class="text-center q-mt-sm">{{ author.name }}</div>


    <CusBtn class="booksForAuthor" color="green" label="Show Books" @click="show" />
  </div>
</template>

<script setup>
import CusBtn from 'src/components/molecules/CustomButton.vue'

const props = defineProps({
  author: Object,
})

const emit = defineEmits(['show-book'])

const show = () => {
  emit('show-book', props.author)
}
</script>
<style scoped>
.author-img {
  height: 180px;
  width: 140px;
  border-radius: 10px;
}
.author-card {
  background-image: url('../assets/assetsbackground-book-author.png');

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 10px;
  border: 1px solid #ccc;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 250px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.booksForAuthor {
  display: flex;
  justify-content: center;
  margin-top: auto;
  text-align: center;
}
</style>
