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
			class="c-footer"
		>
			<v-row
			>
				<v-col cols="12" sm="4" md="4">
					<v-sheet class="pa-2 ma-2 footer-contents text-center  ">
						<div class="pb-4 ">
							<img class="mr-5" src="./../../assets/logo.svg" height="30"/>
							<span class="text-h4 ">HYEI-IN SUH</span>
						</div>
						
						<div class="text-body-1 pb-3">Lorem ipsum dolor sit amet consectetur. <br>
							Habitant gravida cras fames cras nulla </div>
						<div class="text-caption">&copy; 2023 Hyei-In Suh</div>
					</v-sheet>
				</v-col>

				<v-col cols="12" sm="4"  md="4" class="d-none d-sm-block">
					<v-sheet class="ma-2 footer-contents text-center">
						<v-list :items="menus" class="footer-contents"></v-list>
					</v-sheet>
				</v-col>
				
				<v-col cols="12" sm="4" md="4">
					<v-sheet class="pa-2 footer-contents align-center justify-center text-center"> 
						<div class="pb-10">
							<a href="mailto:hyeiinsuh124@gmail.com">hyeiinsuh124@gmail.com</a>
						</div>
						<div class="pb-10 mx-auto wrp-social-media d-flex justify-space-between ">
							<!-- wrp-social-media d-flex justify-space-around -->
							<a v-for="icon in icons" :href="icon.link" :key="icon.name">
								<v-icon
									size="large"
									color="grey"
									:icon="'mdi:' + icon.name"
								></v-icon>
							</a>
						</div>
						<div class="pb-10">
							<v-btn class="btn-contact">
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

.btn-contact {
	height: 60px !important;
}

.btn-contact, .wrp-social-media {
	width: 56%;
}

@media (min-width: 600px) {
    .btn-contact, .wrp-social-media {
		width: 100%;
	}
	
}


@media (min-width: 800px) {
    .btn-contact, .wrp-social-media {
		width: 70%;
	}
	
}


@media (min-width: 1920px) {
    .btn-contact, .wrp-social-media {
		width: 40%;
	}
}
</style>