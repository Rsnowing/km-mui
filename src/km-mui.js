import { version } from '../package.json'
import Toast from '@/packages/toast/index'
import '@/packages/toast/toast.scss'
import ActionSheet from '@/packages/actionsheet/index'
import '@/packages/actionsheet/actionsheet.scss'
import Picker from '@/packages/picker/index'
import '@/packages/picker/picker.scss'
import Tab from '@/packages/tab/index'
import '@/packages/tab/tab.scss'
import TabPanel from '@/packages/tabpanel/index'
import Noticebar from '@/packages/noticebar/index'
import '@/packages/noticebar/noticebar.scss'
import Sticky from '@/packages/sticky/index'
import '@/packages/sticky/sticky.scss'

const components = [
  Toast, ActionSheet, Picker, Tab, TabPanel, Noticebar, Sticky
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
  version,
  install,
  Toast,
  ActionSheet,
  Picker,
  Tab,
  TabPanel,
  Noticebar,
  Sticky
}
