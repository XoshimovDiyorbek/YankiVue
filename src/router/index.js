import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'main' }
  },
  {
    path: '/home',
    name: 'main',
    component: Home
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('@/views/Catalog/index.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/Cart/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
