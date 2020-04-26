import Toast from './_toast';
import './toast.scss';
// Vue.js 的插件应该暴露一个 install 方法
Toast.install = function (Vue) {
    Vue.component(Toast.name, Toast)
}

export default Toast;