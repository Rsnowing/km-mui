<template>
  <div class="km-noticebar">
    <div class="content-wrap" :style="{ transform: 'translate(0, ' + distance + ' )' }">
      <div v-for="(item, index) in list" :key="index" class="wrap">
        <div class="text">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kmNoticebar',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      current: 0
    }
  },
  computed: {
    distance() {
      return -this.current * 40 + 'px'
    }
  },
  mounted() {
    this.startTimer()
  },
  destroyed() {
    clearTimeout(this.timer)
  },
  methods: {
    startTimer() {
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
}
</script>

<style></style>
