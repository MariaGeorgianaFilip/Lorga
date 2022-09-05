import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyAccount from '../views/MyAccount.vue'
import FAQ from '../views/FAQ.vue'
import Medias from '../views/Medias.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/MyAccount',
    name: 'my account',
    component: MyAccount
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/Medias',
    name: 'Medias',
    component: Medias
  },
 

 
  
]
  

const router = new VueRouter({
  routes
})

export default router
