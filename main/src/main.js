import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { registerMicroApps, start } from 'qiankun'
import { vueRoutes, microRoutes } from './router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: vueRoutes,
})

registerMicroApps(microRoutes)

start({
  prefetch: false,
  getTemplate(tpl) {
    const name = /data-qiankun_microapp_name=['"]([^'"]+)['"]/.exec(tpl)?.[1]
    if (name) {
      // 动态注册微应用生命周期
      window[name] = {
        bootstrap: () => {
          console.log('purehtml bootstrap');
          return Promise.resolve();
        },
        mount: (props) => {
          console.log('purehtml mount');
          window[name].props = props
          if (window[name].render) {
            window[name].render(props)
          }
          return true
        },
        unmount: () => {
          console.log('purehtml unmount');
          if (window[name].destroy) {
            window[name].destroy()
          }
          return Promise.resolve();
        },
      }
    }
    return tpl
  },
  async fetch(url, ...args) {
    // 使用script标签加载脚本
    if (url.indexOf('@vite/client') > -1 || url.indexOf('.js') > -1) {
      const script = document.createElement('script')
      script.type = 'module'
      script.src = url
      document.head.appendChild(script)

      return {
        async text() {
          return ''
        },
      };
    }

    return window.fetch(url, ...args)
  },
})

const app = createApp(App)
app.use(router)
app.mount('#app')
