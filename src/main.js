import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
//vue-router
//pinia
const pinia = createPinia()

//createApp(App).use(pinia).use(router).mount('#app')
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
