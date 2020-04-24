import Vue from "vue"
import settings from "./toast.vue"

let ToastConstructor = Vue.extend(settings);
let instance;
const defaultOptions = {
    visible: false,
    msg: ''
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
        ...currentOptions,
        ...obj
    }
    instance = new ToastConstructor({
        data: { ...opt, ...obj }
    });
    _showToast();
    return instance;
}

let Toast = {
    name: 'KmToast',
    text(msg, obj = {}) {
        return _getInstance({ ...obj, msg, type: "text" })
    }
}

export default Toast
