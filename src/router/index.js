import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('../views/HomeView.vue')
const LoginView = () => import('../views/LoginView.vue')


const routes = [



   {
      path: '/',
      name: 'home',
      meta: { layout: 'main' },
      component: HomeView
   },

   {
      path: '/login',
      name: 'login',
      meta: { layout: 'auth' },
      component: LoginView
   },
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
})

export default router