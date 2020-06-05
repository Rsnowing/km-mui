<template>
  <section class="picker-test">
    <km-picker :title="'选择你想要的'" :data="data"></km-picker>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: [[2001, 2002, 2003, 2004]]
    }
  }
}
</script>

<style></style>
