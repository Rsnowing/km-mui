<template>
  <div class="km-tab-panel" :style="{ width: width }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'kmTabPanel',
  props: {},
  data() {
    return {
      width: ''
    }
  },
  computed: {},
  mounted() {
    this.width = screen.width + 'px'
  },
  methods: {}
}
</script>
<style lang="scss">
.km-tab-panel {
  width: 100%;
  flex-shrink: 0;
}
</style>
