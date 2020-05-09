import Vue from 'vue'
import settings from './toast.vue'

const ToastConstructor = Vue.extend(settings)
let instance
const instanceArr = []
let loadingInstance

function _showToast () {
  instance.vm = instance.$mount()
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
  })
}

function _getInstance (obj) {
  const opt = {
    id: new Date().getTime(),
    ...obj
  }
  if (opt.id && instanceArr[opt.id]) {
    instance = instanceArr[opt.id]
    instance.hide()
    instance = { ...instance, ...opt }
  } else {
    instance = new ToastConstructor({
      data: { ...opt, ...obj }
    })
    opt.id && (instanceArr[opt.id] = instance)
  }
  _showToast()
  return instance
}

const Toast = {
  name: 'KmToast',
  text (msg, obj = {}) {
    console.log(obj)
    return _getInstance({ ...obj, msg, type: 'text' })
  },
  success (msg, obj = {}) {
    return _getInstance({ ...obj, msg, type: 'success' })
  },
  fail (msg, obj = {}) {
    return _getInstance({ ...obj, msg, type: 'fail' })
  },
  warn (msg, obj = {}) {
    return _getInstance({ ...obj, msg, type: 'warn' })
  },
  loading (msg, obj = {}) {
    obj.duration = obj.duration || 0 // loading类型默认不自动关闭
    loadingInstance = _getInstance({ ...obj, msg, type: 'loading' })
    return loadingInstance
  },
  hideLoading () {
    loadingInstance.hide()
  }
}

export default Toast
