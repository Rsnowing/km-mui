<template>
  <section class="actionsheet-test">
    <div @click="visible1 = true">
      最简单的活动面板
    </div>
    <km-actionsheet
      :visible="visible1"
      :menu-items="menuItems"
      :value="choosedTagValue"
      :cancel-text="'取消'"
      :title="'选择性别'"
      :lock-bg="false"
      @close="visible1 = false"
      @choose="handleChoose"
      @cancel="handleCancel"
    >
    </km-actionsheet>
    <br />
    <div @click="visible2 = true">
      自定义面板内容
    </div>
    <km-actionsheet :visible="visible2" @close="visible2 = false">
      <template v-slot:custom>
        <div class="custom">
          我自定义
        </div>
      </template>
    </km-actionsheet>
  </section>
</template>

<script>
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      menuItems: [
        { name: '男', value: 1, disable: true },
        { name: '女', value: 2 }
      ],
      choosedTagValue: ''
    }
  },

  methods: {
    handleClose() {
      console.log('关闭')
    },

    handleChoose(item, index) {
      this.choosedTagValue = item.value
    },

    handleCancel() {
      alert('取消')
    }
  }
}
</script>

<style lang="scss">
.actionsheet-test {
  height: 1000px;
  .custom {
    padding: 20px;
  }
}
</style>
