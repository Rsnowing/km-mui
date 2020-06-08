<template>
  <div class="home">
    <ul>
      <li v-for="(item, index) in linkList" :key="index">
        <router-link :to="item.href">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      linkList: [
        { title: '吐司', href: '/toast' },
        { title: '活动面板', href: '/actionsheet' },
        { title: 'picker选择器', href: '/picker' },
        { title: 'tab', href: '/tab' },
        { title: 'noticebar', href: '/noticebar' },
        { title: 'sticky', href: '/sticky' },
        { title: 'countdown', href: '/countdown' }
      ]
    }
  },
  mounted() {
    console.log(1)
  }
}
</script>
<style lang="scss">
.home {
  padding: 10px;
  width: 10px;
}
</style>
