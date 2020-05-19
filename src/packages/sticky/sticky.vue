<template>
  <div
    id="sticky"
    :style="{height: fixed ? `${height}px` : null}"
  >
    <div
      class="km-sticky"
      :class="{'km-sticky-fixed': fixed}"
      :style="style"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { getScrollTop, getElementTop } from '@/utils/dom'
export default {
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
}
</script>

<style>

</style>
