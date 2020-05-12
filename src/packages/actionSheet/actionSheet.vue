<template>
  <div class="km-actionsheet">
    <transition name="kmFade">
      <div
        v-show="visible"
        class="km-actionsheet-mask"
        @click="handleClickMask"
      ></div>
    </transition>
    <transition name="kmSlideUp">
      <div
        v-show="visible"
        class="km-actionsheet-panel"
      >
        <!-- slot -->
        <div class="nut-actionsheet-custom">
          <slot name="custom"></slot>
        </div>
        <!-- 面板主题 -->
        <ul class="km-actionsheet-menu">
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            class="km-actionsheet-item"
            :class="{'km-actionsheet-item-active': isActive(item), 'km-actionsheet-item-disable': item.disable}"
            @click="handleChoose(item, index)"
          >
            {{ item[optionTag] }}
          </li>
        </ul>
        <!-- 取消按钮 -->
        <div
          v-if="cancelText"
          class="km-actionsheet-cancel"
          @click="handleCancel"
        >
          {{ cancelText }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
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
    }
  },
  watch: {
    visible (value) {
      if (this.lockBg) {
        value ? document.body.classList.add('km-overflow-hidden') : document.body.classList.remove('km-overflow-hidden')
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
}
</script>

<style>

</style>
