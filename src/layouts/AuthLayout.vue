<template>
  <div class="container" >
    <div class="login" >
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/src/assets/library-big.jpg');
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(15px);

}

.login {
  width: 300px;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.25);

  background: rgba(175, 170, 170, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);

  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);

  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
