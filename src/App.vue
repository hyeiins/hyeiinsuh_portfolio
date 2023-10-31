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
			<section>
				<router-view />
			</section>
		</main>
		<footer>
			<custom-footer></custom-footer>
		</footer>
	</v-app>
</template>

<style lang="scss">
@import "./assets/scss/global.scss";
//360px
body{
	background-color: #141414;
}
.app-st {
	background-color: #141414;
	color: white;
}

@media (min-width: 1024px) {
	body {
		
		background-color: #141414;
		color: white;
	}

	header {
		z-index: 9999;
		margin-bottom: 150px;

	}

	main {
		min-height: 100vh;
	}

	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		z-index: 9999;
	}
}
</style>
