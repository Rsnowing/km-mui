# 开发手册 
## 插件开发流程
### 目录结构
    packages
        toast
            toast.vue 组件内容
            toast.scss 组件样式
            toast.js 组件功能
            index.js 组件输出
            target.md 组件功能点
            demo.vue 组件使用示例
### 如何开发
1. 开发组件
新建toast.vue 组件，正常写功能。
2. 组件输出为插件
```js 
// _toast.js
import Vue from "vue"
import settings from "./toast.vue"
// 将组件挂到Vue上
let ToastConstructor = Vue.extend(settings);
```