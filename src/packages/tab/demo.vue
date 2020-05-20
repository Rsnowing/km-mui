<template>
  <section class="tab-test">
    <km-tab
      :default="1"
      @change="handleChange"
    >
      <km-tab-panel label="第一关">
        <div class="inner red">
          <span>hadjs</span>
        </div>
      </km-tab-panel>
      <km-tab-panel label="第2关">
        <div class="inner yellow">2</div>
      </km-tab-panel>
      <km-tab-panel label="第3关">
        <div class="inner tomato">3</div>
      </km-tab-panel>
    </km-tab>
  </section>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss">
.tab-test {
  .km-tab-item {
    height: 100%;
  }
  .inner {
    background-color: red;
    height: 300px;
    &.yellow {
      background-color: yellow;
    }
    &.tomato {
      background-color: tomato;
    }
  }
}
</style>
