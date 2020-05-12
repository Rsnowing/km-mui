import Vue from 'vue'
import App from './App.vue'
import router from './router'
import KmUI from './km-mui'
import '@/styles/reset.scss'
import '@/styles//km.scss'

Vue.config.productionTip = false

// KmUI.install(Vue)
Vue.use(KmUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
