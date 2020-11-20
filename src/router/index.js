import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home.vue'
import Calendar from '../views/Calendar.vue'
import DoorSuccess from '../views/DoorSuccess.vue'
import DoorFailure from '../views/DoorFailure.vue'
import { auth } from '../firebase.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'RedirectHome',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/Calendar',
    name: 'Calendar',
    component: Calendar,
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/doorSuccess/:id', 
    name: 'doorSuccess',
    component: DoorSuccess, 
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/doorFailure/:id', 
    name: 'doorFailure',
    component: DoorFailure, 
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')

  },  
  {
    path: '/settings',
    name: 'settings',
    component: () => import( /* webpackChunkName: "settings" */ '../views/Settings.vue'),
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
