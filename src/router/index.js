import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyAccount from '../views/MyAccount.vue'
import FAQ from '../views/FAQ.vue'
import AboutUs from '../views/AboutUs.vue'
import OurStore from '../views/OurStore.vue'
import GiftCard from '../views/GiftCard.vue'
import LostPassword from '../views/LostPassword.vue'
import AboutScents from '../views/AboutScents.vue'
import AboutCandles from '../views/AboutCandles.vue'
import NaturalElements from '../views/NaturalElements.vue'
import AboutFragrances from '../views/AboutFragrances.vue'
import EmotionsCollection from '../views/EmotionsCollection.vue'
import HoursCollection from '../views/HoursCollection.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'homeview',
    component: HomeView
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/myaccount',
    name: 'MyAccount',
    component: MyAccount,
    children: [
      {
        path: 'lostpassword',
        component: LostPassword,
    
  }]},
  {
    path: '/ourstore',
    name: 'OurStore',
    component: OurStore
  },
  // {
  //   path: '/myaccount/lostpassword',
  //   name: 'MyAccount',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/LostPassword.vue')
  // },
  {
    path: '/giftcard',
    name: 'GiftCard',
    component: GiftCard
  },
  {
    path: '/aboutcandles',
    name: 'AboutCandles',
    component: AboutCandles
  },
  {
    path: '/aboutfragrances',
    name: 'AboutFragrances',
    component: AboutFragrances
  },
  {
    path: '/aboutscents',
    name: 'AboutScents',
    component: AboutScents
  },
  
   {
   path: '/naturalelements',
   name: 'naturalElementsCollection',
   component: NaturalElements,
   },
   {
    path: '/fragrance/:id',
    name: 'naturalElementsCollection',
    component: () => import(/* webpackChunkName: "about" */ '../views/LorgaAir.vue')
  },

  {
    path: '/aboutragrances',
    name: 'AboutFragrances',
    component: AboutFragrances
  },
  {
    path: '/hourscollection',
    name: 'hoursCollection',
    component: HoursCollection
  },
  {
    path: '/homescent/:id',
    name: 'hoursCollection',
    component: () => import(/* webpackChunkName: "about" */ '../views/LorgaEvening.vue')
  },
  {
    path: '/emotionscollection',
    name: 'emotionsCollection',
    component: EmotionsCollection
  },
  {
    path: '/candle/:id',
    name: 'emotionsCollection',
    component: () => import(/* webpackChunkName: "about" */ '../views/LorgaHappiness.vue')
  }]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
