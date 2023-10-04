<script>
	export default {
		data() {
			return {
				dialog: false,
				menuItems: [
					{title: "About", path: "/about"},
					{title: "Project", path: "/"},
					{title: "Contact", path: "/about"},
					{title: "Resume", path: "/"},
				]
			}
		}
	}
</script>

<template>
	<nav>
        <!-- mobile full screen nav -->
		<v-dialog
          	v-model="dialog"
			fullscreen
          	class="d-sm-none"
			close-on-content-click
			absolute="true"
			:scrim="false"
		>
			<v-card class="mobile-nav"> 
				<v-toolbar color="#141414">
					<v-spacer></v-spacer>
					<v-btn class="btn-close"><v-icon @click="dialog = false">$close</v-icon></v-btn>
				</v-toolbar>
				<v-card-text class="justify-center align-center">
					<v-list class="menu-list">
						<v-list-item class="text-center" v-for="item in menuItems" :key="item.title">
							<router-link :to="item.path">{{ item.title }}</router-link>
						</v-list-item>
					</v-list>
				</v-card-text>
			</v-card>
           

			
        </v-dialog>

        <!-- nav menu -->
        <v-toolbar color="transparent">
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer">
                    <img class="ml-3" src="./../../assets/logo.svg" height="40"/>
                </router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- horizontal menu visible from md screen -->
            <v-toolbar-items class="d-none d-sm-block">
                <v-btn
                flat
                v-for="item in menuItems"
                :key="item.title"
                >
					<router-link :to="item.path">{{ item.title }}</router-link>
                
                </v-btn>
            </v-toolbar-items>

            <!-- menu icon visible in small and lower screen -->
            <span class="d-sm-none">
                <v-app-bar-nav-icon @click="dialog = !dialog">
                    <v-icon>$menu</v-icon>
                </v-app-bar-nav-icon>
            </span>
            
        </v-toolbar>
    </nav>
</template>
  
<style scoped lang="scss">
.mobile-nav {
	background-color: #141414;

	.menu-list {
		background-color: #141414;
	}
}


</style>
  