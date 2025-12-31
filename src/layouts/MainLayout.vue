<template>
  <q-layout view="lHh Lpr lFf" class="bg-white">
    <q-header
      style="
        margin: 5px;
        box-shadow: 0px 2px 4px black;
        border-radius: 10px;
        background-color: white;
      "
    >
      <headerPage />
    </q-header>
    <q-page-container style="height: 100vh">
      <div class="h-full">
        <router-view />
      </div>
      <q-footer style="background-color: white">
        <footerPage />
      </q-footer>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import headerPage from 'src/components/headerPage.vue'
import footerPage from 'src/components/footerPage.vue'
</script>

<style scoped></style>
