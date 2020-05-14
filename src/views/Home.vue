<template>
  <div class="home">
    <ul>
      <li
        v-for="(item, index) in linkList"
        :key="index"
      >
        <router-link :to="item.href">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
    <a
      target="_blank"
      href="//shang.qq.com/wpa/qunwpa?idkey=9d836378ac42410048177d6db1f52c0e19005e9a2cb4ed73556a6f4d8df0413e"
    >加我</a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      linkList: [
        { title: '吐司', href: '/toast' },
        { title: '活动面板', href: '/actionsheet' },
        { title: 'picker选择器', href: '/picker' }
      ]
    }
  }
}
</script>
<style lang="scss"></style>
