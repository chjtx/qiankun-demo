import Main from '../views/MainApp.vue'
import MainOne from '../views/MainOne.vue'
import MainTwo from '../views/MainTwo.vue'
import { Empty } from 'common'

const routes = [
  { path: '/', redirect: '/main/views/MainOne' },
  {
    path: '/main/views',
    component: Main,
    children: [
      {
        path: 'MainOne',
        component: MainOne
      },
      {
        path: 'MainTwo',
        component: MainTwo
      },
    ]
  },
  {
    path: '/app/:any*',
    component: Empty
  }
]

export default routes
