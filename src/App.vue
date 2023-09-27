<script setup>
import Home from './components/Home.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
    <div>
      <router-view />
      <!-- <Home msg="HYEI-IN, UI/UX Designer with a Frontend Flair!" /> -->
    </div>
  </header>
</template>

<style lang="scss">
@import "./assets/scss/global.scss";

@media (min-width: 1024px) {

  // .logo {
  //   margin: 0 2rem 0 0;
  // }

  // header .wrapper {
  //   display: flex;
  //   place-items: flex-start;
  //   flex-wrap: wrap;
  // }

}
</style>
