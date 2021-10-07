import Course from '../views/Course'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'
import Login from '../views/Login'
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dashboard,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/home',
        component: Home
      },
      {
        path: '/course',
        component: Course
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
