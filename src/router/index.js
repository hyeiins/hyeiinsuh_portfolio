import { createWebHistory, createRouter } from "vue-router"
import Home from "@/components/Home.vue"
import About from "@/components/AboutPage.vue"
import PageNotFound from '@/components/PageNotFound.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: '/about',
        name: "About",
        component: About,
      },
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    }
]

const router = createRouter({
    history: createWebHistory('/hyeiinsuh_portfolio/'),
    routes
})

export default router

