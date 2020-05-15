import Vue from 'vue'
import App from './App.vue'
import router from './router'
import KmUI from './km-mui'
import '@/styles/reset.scss'
import '@/styles//km.scss'
import VConsole from 'vconsole'

Vue.config.productionTip = false

Vue.use(KmUI)

/* eslint no-new: "off" */
if (process.env.NODE_ENV !== 'production') {
  new VConsole()
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
