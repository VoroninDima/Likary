import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from "@/views/Auth";
import Register from "@/views/Register"
import NotFound from "@/views/NotFound"
import Cookies from "@/views/Cookies"
import Policy from "@/views/Policy"
import Main from "@/views/Main"
import Profile from '../views/Profile'

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
    component: Register
  },
  {
    path: '/not-found',
    name: 'NotFound',
    // route level code-splitting
    // this generates a separate chunk (not-found.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: NotFound
  },
  {
    path: '*',
    redirect: '/not-found'
  },
  {
    path: '/cookies',
    name: 'Cookies',
    // route level code-splitting
    // this generates a separate chunk (cookies.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Cookies
  },
  {
    path: '/policy',
    name: 'Policy',
    // route level code-splitting
    // this generates a separate chunk (policy.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Policy
  },
  {
    path: '/main',
    name: 'Main',
    // route level code-splitting
    // this generates a separate chunk (policy.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Main
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (policy.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
