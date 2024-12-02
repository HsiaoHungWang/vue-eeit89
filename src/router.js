import { createRouter, createWebHistory } from "vue-router"

import AboutView from "./views/AboutView.vue"
import ContactView from "./views/ContactView.vue"
import HomeView from "./views/HomeView.vue"

//路由設定 URL > Component
const routes = [
    //http://localhost:5173/
    {
        path:'/',
        component:HomeView
    },
    //http://localhost:5173/about
    {
        path:'/about',
        component:AboutView
    },
    //http://localhost:5173/contact
    {
        path:'/contact',
        component:ContactView
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes:routes
})

export default router