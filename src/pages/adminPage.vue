<template>
  <div class="all-Admin">
    <!-- <div> -->
    <div>
      <SideBarPageAdmin @change-actives="onChangeActives" />
    </div>
    <div class="box-edit">
      <div v-show="actives === 1"><AllUsers /></div>
      <div v-show="actives === 2"><AllBooks /></div>
      <div v-show="actives === 3"><AllAuther /></div>
    </div>
  </div>
</template>

<script setup>
import SideBarPageAdmin from '../components/SideBarPageAdmin.vue'
import AllUsers from 'src/components/AllUser.vue'
import AllBooks from 'src/components/AllBook.vue'
import AllAuther from 'src/components/AllAuthor.vue'
import { ref } from 'vue'
const actives = ref(1)

const onChangeActives = (val) => {
  actives.value = val
}

</script>

<style scoped>
.all-Admin {
  display: flex;
  padding-right: 10px;
  width: 100%;
  height: 100%;
}
.box-edit {
  display: flex;
  background: rgb(226, 231, 228);
  padding: 10px;
  gap: 5px;
  margin-left: 15px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 4px 1.5px rgb(172, 171, 171);
  width: 87.2%;
  height: 88vh;
  flex-direction: column;
}
</style>
