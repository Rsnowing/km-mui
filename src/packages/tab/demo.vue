<template>
  <km-tab
    :tab-list="tabList"
    :active="1"
  >
    <km-tab-panel tab-title="第一关">1</km-tab-panel>
    <km-tab-panel tab-title="第2关">2</km-tab-panel>
    <km-tab-panel tab-title="第3关">3</km-tab-panel>
  </km-tab>
</template>

<script>
export default {
  data () {
    return {
      tabList: ['第一关', '第2关', '第3关']
    }
  }
}
</script>

<style>

</style>
