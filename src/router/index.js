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
    component: () =>
      import(/* webpackChunkName: "toast" */ '@/packages/toast/demo.vue')
  },
  {
    path: '/actionsheet',
    name: 'actionSheet',
    component: () =>
      import(/* webpackChunkName: "actionsheet" */ '@/packages/actionSheet/demo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
