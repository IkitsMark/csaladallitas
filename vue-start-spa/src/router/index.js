import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Contact from '../views/ContactPage.vue'
import About from '../views/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router