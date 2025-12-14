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
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer style="background-color: white; position: static">
      <footerPage />
    </q-footer>
  </q-layout>
</template>

<script setup>
import headerPage from 'src/components/headerPage.vue'
import footerPage from 'src/components/footerPage.vue'
</script>

<style></style>
