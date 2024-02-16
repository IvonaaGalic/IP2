import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Kontakt from './views/Kontakt.vue'
import Aplikacija from './views/Aplikacija.vue'
import 'vuetify/dist/vuetify.min.css'; // Import Vuetify styles

const app = createApp(App)

const routes = [
    { path: '/', component: Home },
    { path: '/kontakt', component: Kontakt },
    { path: '/aplikacija', component: Aplikacija }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

app.use(router).mount('#app')


