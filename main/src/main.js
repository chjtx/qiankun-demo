import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { registerMicroApps, start } from 'qiankun'
import { vueRoutes, microRoutes } from './router'

const router = createRouter({
  history: createWebHistory(),
  routes: vueRoutes,
})

registerMicroApps(microRoutes)
start()

const app = createApp(App)
app.use(router)
app.mount('#app')
