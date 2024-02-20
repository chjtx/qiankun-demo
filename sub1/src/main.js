import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import routes from './routes.js'

let router = null
let instance = null
function render(props = {}) {
  const { container } = props
  router = createRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app/sub1' : '',
    history: createWebHashHistory(),
    routes,
  })

  instance = createApp(App)
  instance.use(router)
  instance.mount(container ? container.querySelector('#sub1') : '#sub1')
}

// 独立运行时
if (window['sub1'] && window['sub1'].props) {
  window['sub1'].render = render
  render(window['sub1'].props)
} else {
  render()
}

// ((global) => {
//   global['sub1'] = {
//     bootstrap: () => {
//       console.log('purehtml bootstrap');
//       return Promise.resolve();
//     },
//     mount: (props) => {
//       console.log('purehtml mount');
//       return render(props);
//     },
//     unmount: () => {
//       console.log('purehtml unmount');
//       return Promise.resolve();
//     },
//   };
// })(window)
