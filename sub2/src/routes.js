import { SubRouterView, } from 'common'
import Page1 from './views/Page1.vue'
import Page2 from './views/Page2.vue'

const routes = [
  {
    path: '/',
    redirect: `/app/${import.meta.env.VITE_APP_NAME}/views/page1`
  },
  {
    path: `/app/${import.meta.env.VITE_APP_NAME}/views`,
    component: SubRouterView,
    children: [
      {
        path: 'Page1',
        component: Page1,
      },
      {
        path: 'Page2',
        component: Page2,
      },
    ]
  }
]

export default routes
