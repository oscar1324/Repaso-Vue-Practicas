import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Prueba from '../views/Prueba.vue'
import Papa from '../views/Papa.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/prueba',
    component: Prueba
  },
  {
    path: '/papa',
    component: Papa
  },
  {
    path: '/peticiones',
    component: () => import('../views/Peticiones.vue')
  },
  { // ruta dínamica
    path: '/rutas/:id',
    name: 'rutas',
    component: () => import('../views/Rutas.vue')
  },
  {
    path: '/peticioneshijo',
    name: 'peticioneshijo',
    component: () => import('../components/Peticionbebe.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
