import ActionSheet from './actionSheet.vue'
import './actionSheet.scss'

ActionSheet.install = function (Vue) {
  Vue.component(ActionSheet.name, ActionSheet)
}

export default ActionSheet
