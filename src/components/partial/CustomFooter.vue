<script>
	export default {
		data: () => ({
		icons: [
			{name:'mdi-github', link: 'https://github.com/hyeiins'},
			{name:'mdi-instagram', link: 'https://www.behance.net/hyei-in-suh'}, //@TODO change it to behance icon
			{name:'mdi-linkedin', link: 'https://www.linkedin.com/in/hyei-in-suh'}, 
		],
		menus: [
			'home', 'portfolio', 'blog', 'contact'
		]
		}),
	}
</script>

<template>
	<div>
		<v-container
			class="ma-0 c-footer"
		>
			<v-row
				no-gutters
			>
				<v-col md="4">
					<v-sheet class="pa-2 ma-2 footer-contents">
						<div class="pb-4">
						<img class="mr-5" src="./../../assets/logo.svg" height="30"/>
						<span class="text-h4 ">HYEI-IN SUH</span>
						</div>
						
						<div class="text-body-1 pb-3">Lorem ipsum dolor sit amet consectetur. <br>
							Habitant gravida cras fames cras nulla ultrices. </div>
						<div class="text-caption">&copy; 2023 Hyei-In Suh</div>
					</v-sheet>
					
				</v-col>

				<v-col md="4" class="d-none d-sm-block">
					<v-sheet class="pa-2 ma-2 footer-contents">
						<v-list :items="menus" class="pl-10 footer-contents"></v-list>
					</v-sheet>
					
				</v-col>
				
				<v-col md="4">
					<v-sheet class="pa-2 ma-2 footer-contents"> 
						<div class="pb-10">
						<a href="mailto:hyeiinsuh124@gmail.com">hyeiinsuh124@gmail.com</a>
					</div>
					<div class="pb-10">
						<a v-for="icon in icons" :href="icon.link" :key="icon.name">
						<v-btn
							class="mr-10"
							:icon="'mdi:' + icon.name"
							
						></v-btn>
					</a>
					</div>
					<div>
						<v-btn>
						CONTACT ME
						</v-btn>
					</div>	
				
					</v-sheet>	
				</v-col>
			</v-row>
		</v-container>
	</div>
	<!-- </v-footer> -->
</template>

<style lang="scss">
@import "../../assets/scss/_variables.scss";

.c-footer {
	border-top: 1px solid #333;
}

.footer-contents {
	background-color: #141414;
	color: white;
}
</style>