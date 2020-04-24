import Vue from "vue";
import Toast from "@/packages/toast/index";

const components = [
  Toast
]

// const KmUI = {
//     version: '1.0.0',
//     install: (Vue) => {
//         components.forEach(component => {
//             Vue.component(component.name, component);
//         });
//         Vue.prototype['$toast'] = Toast;
//     }
// }

const install = (Vue, opts = {}) => {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
    Vue.prototype['$toast'] = Toast;
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
    version: '1.0.0',
    install,
    Toast
}