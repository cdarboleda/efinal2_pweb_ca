import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import tokenPage from '@/modules/token/pages/tokenPage.vue'
import tokenPage from '../modules/token/pages/tokenPage.vue'


const routes = [
  {
    path: '/',
    name: 'token',
    component: tokenPage
  },
  {
    path: '/estudiantes',
    name: 'estudiantes',
    component: () => import('../modules/estudiante/pages/estudiantePage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
