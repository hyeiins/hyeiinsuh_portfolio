<script setup>
import Home from "./components/Home.vue";
import NavBar from "./components/partial/NavBar.vue";
import CustomFooter from "./components/partial/CustomFooter.vue";
</script>

<template>
	<v-app class="app-st">
		<main>
			<header>
			<!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
				<nav-bar></nav-bar>
			</header>
				<router-view />
			</main>
			<footer>
				<custom-footer></custom-footer>
			</footer>
	</v-app>
</template>

<style lang="scss">
@import "./assets/scss/global.scss";
body {
  padding: 20px 200px;
  background-color: #141414;
  color: white;
}

.app-st {
  background-color: #141414;
  color: white;

}

main {
  min-height: 100vh;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
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
