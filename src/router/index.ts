import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/record',
    component: () => import('@/views/record/index.vue'),
  },
  {
    path: '/chanllenge',
    component: () => import('@/views/chanllenge/index.vue'),
  },
  {
    path: '/selection',
    component: () => import('@/views/selection/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
