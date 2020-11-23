import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'
import Register from '../views/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    // route level code-splitting
    // this generates a separate chunk (not-found.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFound.vue')
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/cookies',
    name: 'Cookies',
    // route level code-splitting
    // this generates a separate chunk (cookies.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cookies" */ '../views/Cookies.vue')
  },
  {
    path: '/policy',
    name: 'Policy',
    // route level code-splitting
    // this generates a separate chunk (policy.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "policy" */ '../views/Policy.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
