<template>
  <section class="actionsheet-test">
    <km-actionsheet
      :visible="visible"
      :menu-items="menuItems"
      @close="handleClose"
    ></km-actionsheet>
  </section>
</template>

<script>
export default {
  data () {
    return {
      visible: true,
      menuItems: [
        { name: '男', value: 1 },
        { name: '女', value: 2 }
      ]
    }
  },

  methods: {
    handleClose () {
      this.visible = false
      this.$toast.text('我自闭了')
    }
  }
}
</script>

<style>

</style>
