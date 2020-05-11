<template>
  <div
    v-if="visible"
    class="km-actionsheet"
  >
    <div class="km-actionsheet-mask"></div>
    <div class="km-actionsheet-panel">
      <ul class="km-actionsheet-menu">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="km-actionsheet-item"
          :class="{'km-actionsheet-item-active': isActive(item)}"
          @click="handleChoose(item, index)"
        >
          {{ item[optionTag] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kmActionsheet',
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    menuItems: {
      type: Array,
      default: () => []
    },
    choosedTagValue: {
      type: String,
      default: ''
    },
    optionTag: {
      type: String,
      default: 'name'
    }
  },
  methods: {
    isActive (item) {
      // return item
    },

    close () {
      this.$emit('close')
    },

    handleChoose (item, index) {
      if (!item.disable) {
        this.close()
      }
    }
  }
}
</script>

<style>

</style>
