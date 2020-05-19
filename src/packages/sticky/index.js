import Sticky from './sticky.vue'
import './sticky.scss'

Sticky.install = function (Vue) {
  Vue.component(Sticky.name, Sticky)
}

export default Sticky
