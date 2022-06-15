import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
const HomeView = () => import('../views/HomeView.vue')
const LoginView = () => import('../views/LoginView.vue')
const TaskView = () => import('../views/TaskView.vue')
const CurrencyView = () => import('../views/CurrencyView.vue')
const RequestView = () => import('../views/RequestView.vue')

const routes = [

   {
      path: '/',
      name: 'home',
      meta: { layout: 'main', auth: true },
      component: HomeView
   },
   {
      path: '/request/:id',
      name: 'request',
      meta: { layout: 'main', auth: true },
      component: RequestView
   },

   {
      path: '/task',
      name: 'task',
      meta: { layout: 'main', auth: true },
      component: TaskView
   },

   {
      path: '/currency',
      name: 'currency',
      meta: { layout: 'main', auth: true },
      component: CurrencyView
   },

   {
      path: '/login',
      name: 'login',
      meta: { layout: 'auth', auth: false },
      component: LoginView
   },
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
})

router.beforeEach((to, from, next) => {
   const requireAuth = to.meta.auth

   if (requireAuth && store.getters['auth/isAuthenticated']) {
      next()
   } else if (requireAuth && !store.getters['auth/isAuthenticated']) {
      next('/login?message=auth')
   } else {
      next()
   }
})

export default router