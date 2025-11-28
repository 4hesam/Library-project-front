<template>
  <q-carousel
    v-model="slide"
    height="300px"
    animated
    autoplay
    infinite
    transition-prev="slide-right"
    transition-next="slide-left"
    navigation
    arrows
    class="slider"
  >
    <q-carousel-slide v-for="(img, index) in images" :key="index" :name="index" :img-src="img" />
  </q-carousel>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref(0)

const images = ['/src/assets/imgsid01.webp', '/src/assets/imgsid02.webp']
</script>

<style scoped>
.q-carousel__slide {
  object-fit: cover;
}
.slider{
  border-radius: 20px;
  width: 90%;
  margin: 0 auto;
  padding-top:15px ;
}
</style>
