<template>
  <div class="km-timer"></div>
</template>

<script>
export default {
  name: 'km-countdown',
  props: {
    startTime: {
      desc: '开始时间',
      type: [Number, String],
      validator(value) {
        const dataStr = (new Date() + '').toLowerCase()
        return dataStr !== 'invalid date'
      }
    },
    endTime: {
      desc: '结束时间',
      type: [Number, String],
      validator(value) {
        const dataStr = (new Date() + '').toLowerCase()
        return dataStr !== 'invalid date'
      }
    }
  },
  data() {
    return {}
  },

  computed: {},
  methods: {
    getTimeStamp(timeStr) {
      /* eslint no-useless-escape: 0 */
      if (!timeStr) return Date.now()
      let t = timeStr
      t = t > 0 ? +t : t.toString().replace(/\-/g, '/')
      return new Date(t).getTime()
    },

    initTimer() {
      // const curr = Date.now()
      // const start = this.getTimeStamp(this.startTime || curr)
      // const end = this.getTimeStamp(this.endTime || curr)
      this.timer = setInterval(() => {})
    }
  }
}
</script>

<style></style>
