import Vue from "vue"
import settings from "./toast.vue"

let ToastConstructor = Vue.extend(settings);
let instance,
    instanceArr = [],
    loadingInstance
const defaultOptions = {
    // type: '',
    // visible: false,
    // msg: '',
    // duration: 2000, //显示时间(毫秒)
    // textAlign: 'center',
    // bgColor: 'rgba(46, 46, 46, 0.7)',
    // customClass: '', // 自定义类
}
let currentOptions = { ...defaultOptions }

function _showToast() {
    instance.vm = instance.$mount();
    document.body.appendChild(instance.$el);
    Vue.nextTick(() => {
        instance.visible = true;
    });
}

function _getInstance(obj) {
    let opt = {
        id: new Date().getTime(),
        ...currentOptions,
        ...obj
    }
    if (opt['id'] && instanceArr[opt["id"]])  {
        instance = instanceArr[opt["id"]]
        instance.hide()
        instance = { ...instance, ...opt };
    } else {
        instance = new ToastConstructor({
            data: { ...opt, ...obj }
        });
        opt["id"] && (instanceArr[opt["id"]] = instance);
    }
    _showToast();
    return instance;
}

let Toast = {
    name: 'KmToast',
    text(msg, obj = {}) {
        console.log(obj)
        return _getInstance({ ...obj, msg, type: "text" })
    },
    success(msg, obj = {}) {
      return _getInstance({ ...obj, msg, type: "success" });
    },
    fail(msg, obj = {}) {
      return _getInstance({ ...obj, msg, type: "fail" });
    },
    warn(msg, obj = {}) {
      return _getInstance({ ...obj, msg, type: "warn" });
    },
    loading(msg, obj = {}) {
        obj.duration = obj.duration || 0 // loading类型默认不自动关闭
        loadingInstance = _getInstance({ ...obj, msg, type: "loading" })
        return loadingInstance
    },
    hideLoading() {
        loadingInstance.hide()
    }
}

export default Toast
