import Main from '../views/MainApp.vue'
import One from '../views/MainOne.vue'
import Two from '../views/MainTwo.vue'

const routes = [
  { path: '/', redirect: '/main/one' },
  {
    path: '/main',
    component: Main,
    children: [
      {
        path: 'one',
        component: One
      },
      {
        path: 'two',
        component: Two
      },
    ]
  },
]

export default routes