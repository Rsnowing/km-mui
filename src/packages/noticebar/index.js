import noticeBar from './noticebar.vue'
import './noticebar.scss'

noticeBar.install = function (Vue) {
  Vue.component(noticeBar.name, noticeBar)
}

export default noticeBar
