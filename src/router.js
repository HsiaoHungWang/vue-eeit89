import { createRouter, createWebHistory } from "vue-router"

import AboutView from "./views/AboutView.vue"
import ContactView from "./views/ContactView.vue"
import HomeView from "./views/HomeView.vue"
import MemberView from "./views/MemberView.vue"
import SpotsView from "./views/SpotsView.vue"
import TodosView from "./views/TodosView.vue"

//路由設定 URL > Component
const routes = [
    //http://localhost:5173/
    {
        path:'/',
        component:HomeView,
        name:'home',
        alias:'/index'
       
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
    },
    //http://localhost:5173/members
    {
        path:'/members',
        component:MemberView
    },
    //http://localhost:5173/spots
    {
        path:'/spots',
        component:SpotsView
    },
    //http://localhost:5173/todos
    {
        path:'/todos',
        component:TodosView
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes:routes
})

export default router