import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'

function addPrefix(path) {
  return `/app/${import.meta.env.VITE_APP_NAME}/${path}`
}

const routes = [
  { path: '/', redirect: addPrefix('page1') },
  {
    path: addPrefix('page1'),
    component: Page1,
  },
  {
    path: addPrefix('page2'),
    component: Page2,
  },
]

export default routes
