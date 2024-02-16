// import './public-path.js'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

let router = null
let instance = null
function render(props = {}) {
  const { container } = props
  // router = new VueRouter({
  //   base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
  //   mode: 'history',
  //   routes,
  // })

  instance = createApp(App)
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
