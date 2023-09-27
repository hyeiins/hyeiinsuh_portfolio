<template>
	<div id="nav">
		<v-toolbar color="transparent">
			<img class="ml-3" src="./../../assets/logo.svg" height="40"/>
			<v-toolbar-title>
				<router-link to="/">Hyei-In Suh</router-link>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn>
				<router-link to="/about">About</router-link>
			</v-btn>
			<v-btn>
				<router-link to="/about">Project</router-link>
			</v-btn>
			<v-btn>
				<router-link to="/about">Contact</router-link>
			</v-btn>
			<v-btn>
				<span>Resume</span>
			</v-btn>
		</v-toolbar>
	</div>
</template>
  
<style scoped>

</style>
  