import { SubRouterView, } from 'common'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'

const routes = [
  {
    path: '/',
    redirect: `/app/${import.meta.env.VITE_APP_NAME}/page1`
  },
  {
    path: `/app/${import.meta.env.VITE_APP_NAME}`,
    component: SubRouterView,
    children: [
      {
        path: 'page1',
        component: Page1,
      },
      {
        path: 'page2',
        component: Page2,
      },
    ]
  }
]

export default routes
