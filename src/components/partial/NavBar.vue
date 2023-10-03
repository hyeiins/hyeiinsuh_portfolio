<script>
	export default {
		data() {
			return {
				overlay: false,
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
		<v-overlay
          	v-model="overlay"
			scrim="white"
          	class="align-center justify-center h-100 d-sm-none"
			close-on-content-click
			absolute="true"
		>
            <v-btn class="btn-close"><v-icon @click="overlay = false">$close</v-icon></v-btn>

			<v-list class="menu-list">
				<v-list-item class="text-center" v-for="item in menuItems" :key="item.title">
					<router-link :to="item.path">{{ item.title }}</router-link>
				</v-list-item>
            </v-list>
        </v-overlay>

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
                <v-app-bar-nav-icon @click="overlay = !overlay">
                    <v-icon>$menu</v-icon>
                </v-app-bar-nav-icon>
            </span>
            
        </v-toolbar>
    </nav>
</template>
  
<style scoped lang="scss">
.v-overlay-container {
	.v-overlay {
		background: white;
		.btn-close {
			box-shadow: none;
			position: fixed;
			top: 300px;
			left: 20px;
		}
	}
}


</style>
  