module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0523":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "33c2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4fab":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5cf5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "9224":
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":\"0.1.4\"}");

/***/ }),

/***/ "9f04":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a833":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabpanel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bed1");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabpanel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabpanel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabpanel_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b17a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bed1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__("9224");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"79bd3a47-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/toast/toast.vue?vue&type=template&id=b66ce7c8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"toastfade"}},[(_vm.visible)?_c('div',{class:_vm.toastClass,attrs:{"id":_vm.id}},[_c('div',{staticClass:"km-toast-inner",style:(_vm.toastStyle)},[(_vm.hasIcon)?_c('span',{staticClass:"km-toast-icon-wrapper"},[_c('i',{class:_vm.iconClass,style:({ 'background-image': _vm.cusIcon })})]):_vm._e(),_c('span',{staticClass:"km-toast-text",domProps:{"innerHTML":_vm._s(_vm.msg)}})])]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/toast/toast.vue?vue&type=template&id=b66ce7c8&

// CONCATENATED MODULE: ./src/utils/index.js

// 锁定背景
const lock = (bodyClass => {
  let scrollTop
  return {
    open: function () {
      scrollTop = document.scrollingElement.scrollTop || document.body.scrollTop
      document.body.classList.add(bodyClass)
      document.body.style.top = -scrollTop + 'px'
    },
    close: function () {
      if (document.body.classList.contains(bodyClass)) {
        document.body.classList.remove(bodyClass)
        document.scrollingElement.scrollTop = scrollTop
      }
    }
  }
})('km-lock-bg')

/**
 * 简单的移动函数
 * @param {HTML Object} el 目标节点
 * @param {number} x 水平方向的移动
 * @param {number} y 垂直方向的移动
 * @param {Object} options 可选参数
 * @param {Boolean} options.useTransfrom 是否通过transfrom来移动元素
 * @param {Boolean} options.transitionTimingFunction translate的timingFunction
 * @param {String} options.transitionDuration translate时间
 */
function translate (el, x = 0, y = 0, options) {
  if (!el) return
  const defaultOptions = {
    useTransfrom: true,
    transitionTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    transitionDuration: '.4s'
  }
  for (const option in options) {
    defaultOptions[option] = options[option]
  }
  if (defaultOptions.useTransfrom) {
    el.style.transform = `translate3d(${x}px,${y}px,0)`
    el.style.transitionProperty = 'transform'
    el.style.transitionTimingFunction = defaultOptions.transitionTimingFunction
    el.style.transitionDuration = defaultOptions.transitionDuration
  } else {
    el.style.left = x
    el.style.top = y
  }
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/toast/toast.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var toastvue_type_script_lang_js_ = ({
  name: 'KmToast',
  components: {},

  props: {},

  data () {
    return {
      id: '',
      type: '',
      visible: false,
      msg: '',
      timer: null,
      duration: 2000,
      textAlign: 'center', // 多行文本是否居中
      bgColor: 'rgba(46, 46, 46, 0.7)',
      customClass: '', // 自定义类
      icon: '',
      loadingRotate: true,
      center: true,
      onClose: null, // 关闭回调
      lockBg: false // 是否锁定背景
    }
  },

  computed: {
    hasIcon () {
      return this.type !== 'text'
    },

    cusIcon () {
      return this.icon ? `url(${this.icon})` : ''
    },

    iconClass () {
      return [
        'km-toast-icon',
        this.type,
        {
          'km-toast-icon-rotate': this.type === 'loading' && this.loadingRotate
        }
      ]
    },

    toastClass () {
      return [
        'km-toast',
        { 'km-toast-center': this.center },
        { 'km-toast-has-icon': this.hasIcon },
        { 'km-loading': this.type === 'loading' },
        this.customClass
      ]
    },

    toastStyle () {
      return [
        { 'text-align': this.textAlign },
        { 'background-color': this.bgColor }
      ]
    }
  },

  watch: {
    visible (val) {
      val && this.show()
    }
  },

  destroyed () {
    this.timer = null
  },

  methods: {
    show () {
      this.clearTimer()
      if (this.duration) {
        this.timer = setTimeout(() => {
          this.hide()
        }, this.duration)
      }
      // 判断是否需要锁定背景
      this.lockBg && lock.open()
    },

    hide () {
      this.clearTimer()
      this.visible = false
      // 背景锁定关闭
      this.lockBg && lock.close()
      typeof this.onClose === 'function' && this.onClose()
    },

    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
    }
  }
});

// CONCATENATED MODULE: ./src/packages/toast/toast.vue?vue&type=script&lang=js&
 /* harmony default export */ var toast_toastvue_type_script_lang_js_ = (toastvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/packages/toast/toast.vue





/* normalize component */

var component = normalizeComponent(
  toast_toastvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var toast = (component.exports);
// CONCATENATED MODULE: ./src/packages/toast/_toast.js



const ToastConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(toast)
let instance
const instanceArr = []
let loadingInstance

function _showToast () {
  instance.vm = instance.$mount()
  document.body.appendChild(instance.$el)
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(() => {
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

/* harmony default export */ var _toast = (Toast);

// EXTERNAL MODULE: ./src/packages/toast/toast.scss
var toast_toast = __webpack_require__("9f04");

// CONCATENATED MODULE: ./src/packages/toast/index.js


// Vue.js 的插件应该暴露一个 install 方法
_toast.install = function (Vue) {
  Vue.component(_toast.name, _toast)
}

/* harmony default export */ var packages_toast = (_toast);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"79bd3a47-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/actionsheet/actionsheet.vue?vue&type=template&id=695ac88f&
var actionsheetvue_type_template_id_695ac88f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"km-actionsheet"},[_c('transition',{attrs:{"name":"kmFade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"km-actionsheet-mask",on:{"click":_vm.handleClickMask}})]),_c('transition',{attrs:{"name":"kmSlideUp"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"km-actionsheet-panel"},[(_vm.title)?_c('div',{staticClass:"km-actionsheet-title"},[_vm._v(" "+_vm._s(_vm.title)+" ")]):_vm._e(),_c('div',{staticClass:"km-actionsheet-custom"},[_vm._t("custom")],2),_c('ul',{staticClass:"km-actionsheet-menu"},_vm._l((_vm.menuItems),function(item,index){return _c('li',{key:index,staticClass:"km-actionsheet-item",class:{'km-actionsheet-item-active': _vm.isActive(item), 'km-actionsheet-item-disable': item.disable},on:{"click":function($event){return _vm.handleChoose(item, index)}}},[_vm._v(" "+_vm._s(item[_vm.optionTag])+" ")])}),0),(_vm.cancelText)?_c('div',{staticClass:"km-actionsheet-cancel",on:{"click":_vm.handleCancel}},[_vm._v(" "+_vm._s(_vm.cancelText)+" ")]):_vm._e()])])],1)}
var actionsheetvue_type_template_id_695ac88f_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/actionsheet/actionsheet.vue?vue&type=template&id=695ac88f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/actionsheet/actionsheet.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var actionsheetvue_type_script_lang_js_ = ({
  name: 'kmActionsheet',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    menuItems: {
      type: Array,
      default: () => []
    },
    value: [String, Number, Boolean],
    optionTag: {
      type: String,
      default: 'name'
    },
    cancelText: {
      type: String,
      default: ''
    },
    lockBg: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  watch: {
    visible (value) {
      if (this.lockBg) {
        value ? lock.open() : lock.close()
      }
    }
  },
  methods: {
    isActive (item) {
      return this.value && this.value === item.value
    },

    close () {
      this.$emit('close')
    },

    handleClickMask () {
      this.close()
    },

    handleChoose (item, index) {
      if (!item.disable) {
        this.close()
        this.$emit('choose', item, index)
      }
    },

    handleCancel () {
      this.$emit('cancel')
      this.close()
    }
  }
});

// CONCATENATED MODULE: ./src/packages/actionsheet/actionsheet.vue?vue&type=script&lang=js&
 /* harmony default export */ var actionsheet_actionsheetvue_type_script_lang_js_ = (actionsheetvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/actionsheet/actionsheet.vue





/* normalize component */

var actionsheet_component = normalizeComponent(
  actionsheet_actionsheetvue_type_script_lang_js_,
  actionsheetvue_type_template_id_695ac88f_render,
  actionsheetvue_type_template_id_695ac88f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var actionsheet = (actionsheet_component.exports);
// EXTERNAL MODULE: ./src/packages/actionsheet/actionsheet.scss
var actionsheet_actionsheet = __webpack_require__("33c2");

// CONCATENATED MODULE: ./src/packages/actionsheet/index.js



actionsheet.install = function (Vue) {
  Vue.component(actionsheet.name, actionsheet)
}

/* harmony default export */ var packages_actionsheet = (actionsheet);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"79bd3a47-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/picker/picker.vue?vue&type=template&id=6e3eacfb&
var pickervue_type_template_id_6e3eacfb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('km-actionsheet',{attrs:{"visible":_vm.visible},on:{"close":_vm.handleClose}},[_c('div',{staticClass:"km-picker",attrs:{"slot":"custom"},slot:"custom"},[_c('div',{staticClass:"km-picker-control"},[_c('div',{staticClass:"km-picker-cancel-btn"},[_vm._v("取消")]),_c('div',{staticClass:"km-picker-title"},[_vm._v(_vm._s(_vm.title))]),_c('div',{staticClass:"km-picker-confirm-btn"},[_vm._v("确定")])]),_c('div',{staticClass:"km-picker-panel"},[_vm._l((_vm.data),function(item,index){return [_c('picker-slot',{key:index,attrs:{"list":item}})]})],2)])])}
var pickervue_type_template_id_6e3eacfb_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/picker/picker.vue?vue&type=template&id=6e3eacfb&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"79bd3a47-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/picker/picker-slot.vue?vue&type=template&id=78b9d71a&
var picker_slotvue_type_template_id_78b9d71a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"km-picker-list"},[_c('div',{staticClass:"km-picker-roller"},_vm._l((_vm.list),function(item,index){return _c('div',{key:index,staticClass:"km-picker-roller-item"},[_vm._v(" "+_vm._s(item.value || item)+" ")])}),0),_c('div',{staticClass:"km-picker-content"},[_c('div',{staticClass:"km-picker-list-panel"},_vm._l((_vm.list),function(item,index){return _c('div',{key:index,staticClass:"km-picker-item"},[_vm._v(" "+_vm._s(item.value || item)+" ")])}),0)]),_c('div',{staticClass:"km-picker-indicator"})])}
var picker_slotvue_type_template_id_78b9d71a_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/picker/picker-slot.vue?vue&type=template&id=78b9d71a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/picker/picker-slot.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var picker_slotvue_type_script_lang_js_ = ({
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {

    }
  }
});

// CONCATENATED MODULE: ./src/packages/picker/picker-slot.vue?vue&type=script&lang=js&
 /* harmony default export */ var picker_picker_slotvue_type_script_lang_js_ = (picker_slotvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/picker/picker-slot.vue





/* normalize component */

var picker_slot_component = normalizeComponent(
  picker_picker_slotvue_type_script_lang_js_,
  picker_slotvue_type_template_id_78b9d71a_render,
  picker_slotvue_type_template_id_78b9d71a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var picker_slot = (picker_slot_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/picker/picker.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var pickervue_type_script_lang_js_ = ({
  name: 'kmPicker',
  components: { pickerSlot: picker_slot },
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      visible: true
    }
  },
  methods: {
    handleClose () {
      this.visible = false
    }
  }
});

// CONCATENATED MODULE: ./src/packages/picker/picker.vue?vue&type=script&lang=js&
 /* harmony default export */ var picker_pickervue_type_script_lang_js_ = (pickervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/picker/picker.vue





/* normalize component */

var picker_component = normalizeComponent(
  picker_pickervue_type_script_lang_js_,
  pickervue_type_template_id_6e3eacfb_render,
  pickervue_type_template_id_6e3eacfb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var picker = (picker_component.exports);
// EXTERNAL MODULE: ./src/packages/picker/picker.scss
var picker_picker = __webpack_require__("b17a");

// CONCATENATED MODULE: ./src/packages/picker/index.js



picker.install = function (Vue) {
  Vue.component(picker.name, picker)
}

/* harmony default export */ var packages_picker = (picker);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"79bd3a47-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/tab/tab.vue?vue&type=template&id=26592076&
var tabvue_type_template_id_26592076_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"km-tab"},[_c('div',{staticClass:"km-tab-title"},[_c('b',{staticClass:"nav-bar",style:([{transform:'translateX('+_vm.initX+'px)'},{width:_vm.navWidth+'px'}])}),_vm._l((_vm.tabList),function(value,index){return _c('span',{key:index,staticClass:"km-title-nav-list",class:['km-title-nav',{'km-tab-active' : _vm.activeIndex === index}],on:{"click":function($event){return _vm.handleSwitch(index,value)}}},[(value)?[_vm._v(_vm._s(value))]:_vm._e()],2)})],2),_c('div',{staticClass:"swiper-wrapper"},[_c('div',{ref:"swiper",staticClass:"km-tab-item",on:{"touchstart":_vm.handleTouchStart,"touchmove":_vm.handleTouchMove,"touchend":_vm.handleTouchEnd}},[_vm._t("default")],2)])])}
var tabvue_type_template_id_26592076_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/tab/tab.vue?vue&type=template&id=26592076&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/tab/tab.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const MIN_DISTANCE = 10
const MIN_SWIPE_DISTANCE = 50

/* harmony default export */ var tabvue_type_script_lang_js_ = ({
  name: 'kmTab',
  props: {
    default: {
      type: [Number, String],
      default: 0
    },
    swiper: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      initX: 0,
      navWidth: 0,
      activeIndex: 0,
      tabList: [],
      panelWidth: 0,
      // --- 触摸移动相关变量 ---
      direction: '',
      diffX: 0,
      diffY: 0,
      offsetX: 0,
      offsetY: 0,
      startX: 0, // 开始X轴距离记录
      startY: 0 // 开始Y轴距离记录
    }
  },

  computed: {

  },

  watch: {
    activeIndex (val) {
      this.updatePanel()
    }
  },

  mounted () {
    this.activeIndex = this.default
    this.$nextTick(() => {
      this.$slots.default && this.updatePanel()
      this.swiper && translate(this.$refs.swiper, -screen.width * this.default)
    })
  },

  methods: {
    /** ** 与触摸相关 ****/
    getDirection (x, y) {
      if (x > y && x > MIN_DISTANCE) {
        return 'horizontal'
      }
      if (y > x && y > MIN_DISTANCE) {
        return 'vertical'
      }
      return ''
    },

    resetTouchStatus () {
      this.direction = ''
      this.diffX = 0
      this.diffY = 0
      this.offsetX = 0
      this.offsetY = 0
    },

    handleTouchStart (event) {
      if (!this.swiper) return
      this.resetTouchStatus()
      this.startX = event.touches[0].clientX
      this.startY = event.touches[0].clientY
    },

    handleTouchMove (event) {
      if (!this.swiper) return
      const touch = event.touches[0]
      this.diffX = touch.clientX - this.startX
      this.diffY = touch.clientY - this.startY
      this.offsetX = Math.abs(this.diffX)
      this.offsetY = Math.abs(this.diffY)
      this.direction = this.direction || this.getDirection(this.offsetX, this.offsetY)
      // 左右移动时
      const { direction, diffX } = this
      if (direction === 'horizontal') {
        translate(this.$refs.swiper, -screen.width * this.activeIndex + diffX)
      }
    },

    handleTouchEnd (event) {
      if (!this.swiper) return
      const { direction, diffX, activeIndex } = this
      if (direction === 'horizontal' && this.offsetX >= MIN_SWIPE_DISTANCE) {
        if (diffX > 0 && activeIndex !== 0) {
          this.handleSwitch(activeIndex - 1)
        } else if (diffX < 0 && activeIndex !== this.tabList.length - 1) {
          this.handleSwitch(activeIndex + 1)
        }
      }
      translate(this.$refs.swiper, -screen.width * this.activeIndex)
    },

    handleSwitch (index, value) {
      this.activeIndex = index
      this.initX = this.activeIndex * this.navWidth
      this.swiper && translate(this.$refs.swiper, -screen.width * this.activeIndex)
      this.$emit('change', value)
    },

    getTabWidth () {
      const tabTitle = document.querySelector('.km-tab-title')
      const tabWidth = window.getComputedStyle(tabTitle).width
      const width = tabWidth.substring(0, tabWidth.length - 2)
      const len = this.tabList.length
      this.navWidth = width / len
      this.initX = this.activeIndex * this.navWidth
    },

    updatePanel () {
      setTimeout(() => {
        this.tabList = []
        this.initPanel([...this.$slots.default])
      }, 100)
    },

    initPanel (slot) {
      for (let i = 0; i < slot.length; i++) {
        const slotTag = slot[i].tag
        if (typeof (slotTag) === 'string' && slotTag.indexOf('kmTabPanel') !== -1) {
          const attrs = slot[i].data.attrs
          this.tabList.push(attrs.label)
          if (!this.swiper) {
            const slotElm = slot[i].elm
            if (slotElm) {
              this.addClass(slotElm, 'hide')
              if (this.activeIndex === i) {
                this.removeClass(slotElm, 'hide')
              }
            }
          }
        }
      }
      setTimeout(() => {
        this.getTabWidth()
      }, 0)
    },

    hasClass (elements, cName) {
      return !!elements.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)')) // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断
    },

    addClass (elements, cName) {
      if (!this.hasClass(elements, cName)) {
        elements.className += ' ' + cName
      }
    },

    removeClass (elements, cName) {
      if (this.hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp('(\\s|^)' + cName + '(\\s|$)'), ' ') // replace方法是替换
      }
    }

  }
});

// CONCATENATED MODULE: ./src/packages/tab/tab.vue?vue&type=script&lang=js&
 /* harmony default export */ var tab_tabvue_type_script_lang_js_ = (tabvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/tab/tab.vue





/* normalize component */

var tab_component = normalizeComponent(
  tab_tabvue_type_script_lang_js_,
  tabvue_type_template_id_26592076_render,
  tabvue_type_template_id_26592076_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tab = (tab_component.exports);
// EXTERNAL MODULE: ./src/packages/tab/tab.scss
var tab_tab = __webpack_require__("0523");

// CONCATENATED MODULE: ./src/packages/tab/index.js



tab.install = function (Vue) {
  Vue.component(tab.name, tab)
}

/* harmony default export */ var packages_tab = (tab);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"79bd3a47-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/tabpanel/tabpanel.vue?vue&type=template&id=40e73515&
var tabpanelvue_type_template_id_40e73515_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"km-tab-panel",style:({width: _vm.width})},[_vm._t("default")],2)}
var tabpanelvue_type_template_id_40e73515_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/tabpanel/tabpanel.vue?vue&type=template&id=40e73515&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/tabpanel/tabpanel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var tabpanelvue_type_script_lang_js_ = ({
  name: 'kmTabPanel',
  props: {
  },
  data () {
    return {
      width: ''
    }
  },
  computed: {

  },
  mounted () {
    this.width = screen.width + 'px'
  },
  methods: {

  }
});

// CONCATENATED MODULE: ./src/packages/tabpanel/tabpanel.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabpanel_tabpanelvue_type_script_lang_js_ = (tabpanelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/tabpanel/tabpanel.vue?vue&type=style&index=0&lang=scss&
var tabpanelvue_type_style_index_0_lang_scss_ = __webpack_require__("a833");

// CONCATENATED MODULE: ./src/packages/tabpanel/tabpanel.vue






/* normalize component */

var tabpanel_component = normalizeComponent(
  tabpanel_tabpanelvue_type_script_lang_js_,
  tabpanelvue_type_template_id_40e73515_render,
  tabpanelvue_type_template_id_40e73515_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tabpanel = (tabpanel_component.exports);
// CONCATENATED MODULE: ./src/packages/tabpanel/index.js


tabpanel.install = function (Vue) {
  Vue.component(tabpanel.name, tabpanel)
}

/* harmony default export */ var packages_tabpanel = (tabpanel);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"79bd3a47-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/noticebar/noticebar.vue?vue&type=template&id=3fa32ded&
var noticebarvue_type_template_id_3fa32ded_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"km-noticebar"},[_c('div',{staticClass:"content-wrap",style:({'transform': 'translate(0, '+ _vm.distance +' )'})},_vm._l((_vm.list),function(item,index){return _c('div',{key:index,staticClass:"wrap"},[_c('div',{staticClass:"text"},[_vm._v(_vm._s(item))])])}),0)])}
var noticebarvue_type_template_id_3fa32ded_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/noticebar/noticebar.vue?vue&type=template&id=3fa32ded&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/noticebar/noticebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var noticebarvue_type_script_lang_js_ = ({
  name: 'kmNoticebar',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      current: 0
    }
  },
  computed: {
    distance () {
      return -this.current * 40 + 'px'
    }
  },
  mounted () {
    this.startTimer()
  },
  destroyed () {
    clearTimeout(this.timer)
  },
  methods: {
    startTimer () {
      const len = this.list.length
      this.timer = setTimeout(() => {
        if (this.current === len - 1) {
          this.current = 0
        } else {
          this.current += 1
        }
        this.startTimer()
      }, 2000)
    }
  }
});

// CONCATENATED MODULE: ./src/packages/noticebar/noticebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var noticebar_noticebarvue_type_script_lang_js_ = (noticebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/noticebar/noticebar.vue





/* normalize component */

var noticebar_component = normalizeComponent(
  noticebar_noticebarvue_type_script_lang_js_,
  noticebarvue_type_template_id_3fa32ded_render,
  noticebarvue_type_template_id_3fa32ded_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var noticebar = (noticebar_component.exports);
// EXTERNAL MODULE: ./src/packages/noticebar/noticebar.scss
var noticebar_noticebar = __webpack_require__("5cf5");

// CONCATENATED MODULE: ./src/packages/noticebar/index.js



noticebar.install = function (Vue) {
  Vue.component(noticebar.name, noticebar)
}

/* harmony default export */ var packages_noticebar = (noticebar);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"79bd3a47-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/sticky/sticky.vue?vue&type=template&id=b6575e34&
var stickyvue_type_template_id_b6575e34_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:({height: _vm.fixed ? (_vm.height + "px") : null}),attrs:{"id":"sticky"}},[_c('div',{staticClass:"km-sticky",class:{'km-sticky-fixed': _vm.fixed},style:(_vm.style)},[_vm._t("default")],2)])}
var stickyvue_type_template_id_b6575e34_staticRenderFns = []


// CONCATENATED MODULE: ./src/packages/sticky/sticky.vue?vue&type=template&id=b6575e34&

// CONCATENATED MODULE: ./src/utils/dom.js
/**  dom 操作 */

/** 获取根节点的scrollTop */
function getRootScrollTop () {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  )
}

/** 获取dom节点的scrollTop */
function getScrollTop (el) {
  return 'scrollTop' in el ? el.scrollTop : el.pageYOffset
}

/**  */
function getElementTop (el, scroller) {
  const scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop() // 滚动距离
  return el.getBoundingClientRect().top + scrollTop
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/sticky/sticky.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var stickyvue_type_script_lang_js_ = ({
  name: 'kmSticky',
  props: {
    offsetTop: {
      type: [Number, String],
      default: 0
    }
  },
  data () {
    return {
      fixed: false,
      height: 0,
      transform: 0
    }
  },

  computed: {
    style () {
      if (!this.fixed) {
        return
      }

      const style = {}
      if (this.offsetTop && this.fixed) {
        style.top = `${this.offsetTop}px`
      }

      if (this.transform) {
        style.transform = `translate3d(0, ${this.transform}px, 0)`
      }
      return style
    }
  },

  mounted () {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll, true)
  },

  methods: {
    onScroll () {
      this.height = this.$el.offsetHeight
      const offsetTop = +this.offsetTop
      const scrollTop = getScrollTop(window) // 滚动距离
      const topToPageTop = getElementTop(this.$el) // 元素距离文档顶部的距离 （包括了滚动距离)
      // 元素距离页面顶部距离 < offsetTop
      if (topToPageTop - scrollTop < offsetTop) {
        this.fixed = true
        this.transform = 0
      } else {
        this.fixed = false
      }
    }
  }
});

// CONCATENATED MODULE: ./src/packages/sticky/sticky.vue?vue&type=script&lang=js&
 /* harmony default export */ var sticky_stickyvue_type_script_lang_js_ = (stickyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/sticky/sticky.vue





/* normalize component */

var sticky_component = normalizeComponent(
  sticky_stickyvue_type_script_lang_js_,
  stickyvue_type_template_id_b6575e34_render,
  stickyvue_type_template_id_b6575e34_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var sticky = (sticky_component.exports);
// EXTERNAL MODULE: ./src/packages/sticky/sticky.scss
var sticky_sticky = __webpack_require__("4fab");

// CONCATENATED MODULE: ./src/packages/sticky/index.js



sticky.install = function (Vue) {
  Vue.component(sticky.name, sticky)
}

/* harmony default export */ var packages_sticky = (sticky);

// CONCATENATED MODULE: ./src/km-mui.js















const components = [
  packages_toast, packages_actionsheet, packages_picker, packages_tab, packages_tabpanel, packages_noticebar, packages_sticky
]

const install = (Vue, opts = {}) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$toast = packages_toast
  Vue.prototype.hideLoading = packages_toast.hideLoading
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ var km_mui = ({
  version: package_0["a" /* version */],
  install,
  Toast: packages_toast,
  ActionSheet: packages_actionsheet,
  Picker: packages_picker,
  Tab: packages_tab,
  TabPanel: packages_tabpanel,
  Noticebar: packages_noticebar,
  Sticky: packages_sticky
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (km_mui);



/***/ })

/******/ });