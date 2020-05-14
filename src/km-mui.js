import Toast from '@/packages/toast/index'
import ActionSheet from '@/packages/actionSheet/index'
import Picker from '@/packages/picker/index'
import Tab from '@/packages/tab/index'
import TabPanel from '@/packages/tabpanel/index'

const components = [
  Toast, ActionSheet, Picker, Tab, TabPanel
]

const install = (Vue, opts = {}) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$toast = Toast
  Vue.prototype.hideLoading = Toast.hideLoading
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.0',
  install,
  Toast,
  ActionSheet,
  Picker,
  Tab,
  TabPanel
}
