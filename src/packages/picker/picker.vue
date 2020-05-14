<template>
  <km-actionsheet
    :visible="visible"
    @close="handleClose"
  >
    <div
      slot="custom"
      class="km-picker"
    >
      <!-- 控制栏 -->
      <div class="km-picker-control">
        <div class="km-picker-cancel-btn">取消</div>
        <div class="km-picker-title">{{ title }}</div>
        <div class="km-picker-confirm-btn">确定</div>
      </div>
      <!-- 面板 -->
      <div class="km-picker-panel">
        <template v-for="(item, index) in data">
          <picker-slot
            :key="index"
            :list="item"
          ></picker-slot>
        </template>
      </div>
    </div>
  </km-actionsheet>
</template>

<script>
import pickerSlot from './picker-slot'
export default {
  name: 'kmPicker',
  components: { pickerSlot },
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
}
</script>

<style>

</style>
