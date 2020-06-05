<template>
  <div class="km-picker-list">
    <!-- 滚动 -->
    <div class="km-picker-roller">
      <div v-for="(item, index) in list" :key="index" class="km-picker-roller-item">
        {{ item.value || item }}
      </div>
    </div>
    <!--  -->
    <div class="km-picker-content">
      <div class="km-picker-list-panel">
        <div v-for="(item, index) in list" :key="index" class="km-picker-item">
          {{ item.value || item }}
        </div>
      </div>
    </div>
    <div class="km-picker-indicator"></div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  }
}
</script>

<style></style>
