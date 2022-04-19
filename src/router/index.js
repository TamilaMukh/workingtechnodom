import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleProduct from '../components/SingleProduct.vue'
import Compare from '../views/ComparView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:id',
    name: 'single',
    component: SingleProduct
  },
  {
    path: '/comparison',
    name: 'compare',
    component: Compare
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
