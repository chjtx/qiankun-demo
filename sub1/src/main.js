import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import routes from './routes.js'

const appName = import.meta.env.VITE_APP_NAME
let router = null
let instance = null
function render(props = {}) {
  const { container } = props
  router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

  instance = createApp(App)
  instance.use(router)
  instance.mount(container ? container.querySelector(`#${appName}`) : `#${appName}`)
}

// 独立运行时
if (window[appName] && window[appName].props) {
  window[appName].render = render
  render(window[appName].props)
} else {
  render()
}
