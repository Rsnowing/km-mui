<template>
  <section class="sticky-test">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>3</p>
    <p>3</p>
    <p>3</p>
    <km-sticky
      :offset-top="30"
    >
      <div style="height: 44px;background: tomato;">吸顶</div>
    </km-sticky>
  </section>
</template>

<script>
export default {
  data () {
    return {
      container: null
    }
  },

  mounted () {
    this.$nextTick(() => {
      this.container = this.$refs.container
    })
  }
}
</script>

<style lang="scss">
.sticky-test {
  height: 2000px;
}

</style>
