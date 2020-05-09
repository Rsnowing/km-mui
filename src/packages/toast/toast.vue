<template>
    <transition name="toastfade">
        <div
            :id="id"
            v-if="visible"
            :class="toastClass"
        >
            <div class="km-toast-inner" :style="toastStyle">
                <span v-if="hasIcon" class="km-toast-icon-wrapper">
                <i :class="iconClass"
                    :style="{ 'background-image': cusIcon }"
                ></i>
                </span>
                <span class="km-toast-text" v-html="msg"></span>
            </div>
        </div>
    </transition>
</template>

<script>
import { lock } from '@/utils'
export default {
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
        { 'km-toast-icon-rotate': this.type === 'loading' && this.loadingRotate }
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
}
</script>
