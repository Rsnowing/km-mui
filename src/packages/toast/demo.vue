<template>
    <section class="toast-test">
        <h2>吐司测试</h2>
        <div @click="handleClick">短文字</div>
        <br/>
        <div @click="handleLongClick">长文字</div>
        <br/>
        <div @click="handleSucClick">成功提示</div>
        <br/>
        <div @click="handleFailClick">失败提示</div>
        <br/>
        <div @click="handleWarnClick">警告提示</div>
        <br/>
        <div @click="handleLoading">loading</div>
        <br/>
        <div @click="handleLockBg">锁定背景</div>
        <br/>
    </section>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {

    }
  },

  mounted () {
  },

  methods: {
    handleClick () {
      this.$toast.text({ msg: '比较短的文字' })
    },

    handleLongClick () {
      this.$toast.text('提示信息提示信息提示信息提示信息提示信息提示信息提示信息',
        {
          textAlign: 'left',
          bgColor: 'rgba(46, 46, 46, 0.6)',
          customClass: 'a b',
          duration: 0 // 不关闭
        }
      )
    },

    handleSucClick () {
      this.$toast.success('操作成功',
        {
          icon: 'data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTg5NiA1MTJhMzg0IDM4NCAwIDEgMC03NjggMCAzODQgMzg0IDAgMCAwIDc2OCAwem0tODUzLjMzMyAwQzQyLjY2NyAyNTIuOCAyNTIuOCA0Mi42NjcgNTEyIDQyLjY2N1M5ODEuMzMzIDI1Mi44IDk4MS4zMzMgNTEyIDc3MS4yIDk4MS4zMzMgNTEyIDk4MS4zMzMgNDIuNjY3IDc3MS4yIDQyLjY2NyA1MTJ6bTY1Mi41MDEtMTU4LjE2NWw2MC4zMyA2MC4zMy0yODYuMTY1IDI4Ni4xNjYtMjAwLjgzMi0yMDAuODMyIDYwLjMzMS02MC4zMzEgMTQwLjUwMSAxNDAuNTAxIDIyNS44MzUtMjI1LjgzNHoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=',
          onClose: () => {
            console.log('我关闭了')
          }
        }
      )
    },

    handleFailClick () {
      this.$toast.fail('操作失败',
        {
          icon: 'data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUxMiAxMjhjMjExLjIgMCAzODQgMTcyLjggMzg0IDM4NFM3MjMuMiA4OTYgNTEyIDg5NiAxMjggNzIzLjIgMTI4IDUxMnMxNzIuOC0zODQgMzg0LTM4NG0wLTY0QzI2Mi40IDY0IDY0IDI2Mi40IDY0IDUxMnMxOTguNCA0NDggNDQ4IDQ0OCA0NDgtMTk4LjQgNDQ4LTQ0OFM3NjEuNiA2NCA1MTIgNjR6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTM0NS42IDY0Ni40YTMyIDMyIDAgMSAwIDY0IDAgMzIgMzIgMCAxIDAtNjQgMHpNNjE0LjQgMzc3LjZhMzIgMzIgMCAxIDAgNjQgMCAzMiAzMiAwIDEgMC02NCAwek0zNDUuNiAzNzcuNmEzMiAzMiAwIDEgMCA2NCAwIDMyIDMyIDAgMSAwLTY0IDB6TTYxNC40IDY0Ni40YTMyIDMyIDAgMSAwIDY0IDAgMzIgMzIgMCAxIDAtNjQgMHoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzUzLjYgNjI1LjE1Mkw2MjUuMTUyIDM1My42bDQ1LjI0OCA0NS4yNDhMMzk4Ljg0OCA2NzAuNHoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMzUzLjYgMzk4Ljg0OGw0NS4yNDgtNDUuMjQ4TDY3MC40IDYyNS4xNTIgNjI1LjE1MiA2NzAuNHoiIGZpbGw9IiNmZmYiLz48L3N2Zz4='
        }
      )
    },

    handleWarnClick () {
      this.$toast.fail('警告',
        {
          icon: 'data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUxMiA2OC4yNzJDMjY2LjkyOCA2OC4yNzIgNjguMjcyIDI2Ni45MjggNjguMjcyIDUxMlMyNjYuOTI4IDk1NS43MjggNTEyIDk1NS43MjggOTU1LjcyOCA3NTcuMDcyIDk1NS43MjggNTEyIDc1Ny4wNzIgNjguMjcyIDUxMiA2OC4yNzJ6TTUxMiAwYzI4Mi43NjggMCA1MTIgMjI5LjIzMiA1MTIgNTEyIDAgMjgyLjc2OC0yMjkuMjMyIDUxMi01MTIgNTEyQzIyOS4yMzIgMTAyNCAwIDc5NC43NjggMCA1MTIgMCAyMjkuMjMyIDIyOS4yMzIgMCA1MTIgMHptLTM0LjEyOCAzMDcuMmEzNC4xMjggMzQuMTI4IDAgMSAxIDY4LjI1NiAwVjUxMmEzNC4xMjggMzQuMTI4IDAgMSAxLTY4LjI1NiAwVjMwNy4yem0wIDM4OS4xMmEzNC4xMjggMzQuMTI4IDAgMSAxIDY4LjI1NiAwdjQwLjk2YTM0LjEyOCAzNC4xMjggMCAxIDEtNjguMjU2IDB2LTQwLjk2eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==',
          duration: 5000
        }
      )
    },
    handleLoading () {
      this.loading = this.$toast.loading('加载中...', { lockBg: true })
      setTimeout(() => {
        this.hideLoading()
        // this.$toast.hideLoading()
      }, 3000)
    },
    handleLockBg () {
      this.loading = this.$toast.loading('加载中...', { lockBg: true })
    }
  }
}
</script>

<style lang="scss">
.toast-test {
    height: 900px;
}
</style>
