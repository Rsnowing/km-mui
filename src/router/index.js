import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/toast',
    name: 'toast',
    component: () => import(/* webpackChunkName: "toast" */ '@/packages/toast/demo.vue')
  },
  {
    path: '/actionsheet',
    name: 'actionSheet',
    component: () => import(/* webpackChunkName: "actionsheet" */ '@/packages/actionsheet/demo.vue')
  },
  {
    path: '/picker',
    name: 'picker',
    component: () => import(/* webpackChunkName: "picker" */ '@/packages/picker/demo.vue')
  },
  {
    path: '/tab',
    name: 'tab',
    component: () => import(/* webpackChunkName: "tab" */ '@/packages/tab/demo.vue')
  },
  {
    path: '/noticebar',
    name: 'noticebar',
    component: () => import(/* webpackChunkName: "noticebar" */ '@/packages/noticebar/demo.vue')
  },
  {
    path: '/sticky',
    name: 'sticky',
    component: () => import(/* webpackChunkName: "sticky" */ '@/packages/sticky/demo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
