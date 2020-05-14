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
        :class="['km-title-nav',{'km-tab-active' : activeIndex == index}]"
        @click="handleSwitch(index,$event)"
      >
        {{ value }}
      </span>
    </div>
    <div class="km-tab-item">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kmTab',
  props: {
    tabList: {
      type: Array,
      default: () => []
    },
    active: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      initX: 0,
      navWidth: 0,
      activeIndex: 0
    }
  },

  watch: {
    activeIndex (val) {
      this.initPanel()
    }
  },

  mounted () {
    this.getTabWidth()
    this.initPanel()
  },

  methods: {
    handleSwitch (index, event) {
      this.activeIndex = index
      this.initX = this.activeIndex * this.navWidth
    },

    getTabWidth () {
      const tabTitle = document.querySelector('.km-tab-title')
      const tabWidth = window.getComputedStyle(tabTitle).width
      const width = tabWidth.substring(0, tabWidth.length - 2)
      this.navWidth = width / this.tabList.length
      this.activeIndex = this.active
      this.initX = this.active * this.navWidth
    },

    initPanel () {
      setTimeout(() => {
        const slot = this.$slots.default
        for (let i = 0; i < slot.length; i++) {
          const slotTag = slot[i].tag
          if (typeof (slotTag) === 'string' && slotTag.indexOf('kmTabPanel') !== -1) {
            const slotElm = slot[i].elm
            if (slotElm) {
              this.addClass(slotElm, 'hide')
              if (this.activeIndex === i) {
                this.removeClass(slotElm, 'hide')
              }
            }
          }
        }
      }, 100)
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
