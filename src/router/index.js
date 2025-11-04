import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/add',
      name: 'add-project',
      component: () => import('../views/AddProject.vue'),
    },
    {
      path: '/projects/:id',
      name: 'edit-project',
      component: () => import('../views/EditProject.vue'),
      props: true,
    }
  ],
})

export default router
