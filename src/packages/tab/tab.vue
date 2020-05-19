<template>
  <div class="km-tab">
    <div class="km-tab-title">
      <b
        class="nav-bar"
        :style="[{transform:'translateX('+initX+'px)'},{width:navWidth+'px'}]"
      ></b>
      <span
        v-for="(value,index) in tabList"
        :key="index"
        class="km-title-nav-list"
        :class="['km-title-nav',{'km-tab-active' : activeIndex === index}]"
        @click="handleSwitch(index,value)"
      >
        <template v-if="value">{{ value }}</template>
      </span>
    </div>
    <div class="swiper-wrapper">
      <div
        ref="swiper"
        class="km-tab-item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { translate } from '@/utils'

const MIN_DISTANCE = 10
const MIN_SWIPE_DISTANCE = 50

export default {
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
}
</script>

<style>

</style>
