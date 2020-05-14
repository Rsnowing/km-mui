## 动作面板
从底部弹出的动作菜单面板
### 开发目标
- [x] 打开底部模态面板
- [x] 展示基本选项
- [x] 可配置展示取消
- [x] 取消回调
- [x] 选项状态 选中 禁用
- [x] 动画
- [x] 自定义面板
- [x] 可锁定背景

### 基本用法
```
<div @click="visible1=true"> 最简单的活动面板 </div>
<km-actionsheet
    :visible="visible1"
    :menu-items="menuItems"
    :value="choosedTagValue"
    :cancel-text="'取消'"
    @close="visible1=false"
    @choose="handleChoose"
    @cancel="handleCancel"
>
</km-actionsheet>
```
```
  data () {
    return {
      visible1: false,
      menuItems: [
        { name: '男', value: 1, disable: true },
        { name: '女', value: 2 }
      ],
      choosedTagValue: ''
    }
  },
  
  methods: {
    handleClose () {
      console.log('关闭')
    },

    handleChoose (item, index) {
      this.choosedTagValue = item.value
    },

    handleCancel () {
      alert('取消')
    }
  }
```
自定义面板
```
div @click="visible2=true"> 自定义面板内容 </div>
    <km-actionsheet
      :visible="visible2"
      @close="visible2=false"
    >
      <template v-slot:custom>
        <div class="custom">
          我自定义
        </div>
      </template>
    </km-actionsheet>
```
```
  data () {
    return {
      visible2: false,
    }
  },
  
  methods: {
  }
```
### props
| 字段             | 说明               | 类型                  | 默认值 |
| ---------------- | ------------------ | --------------------- | ------ |
| visible          | 是否可见           | boolean               | false  |
| cancel-txt       | 取消文案           | string                | '取消' |
| choose-tag-value | 已选中值           | string/boolean/number |    -   |
| menu-items       | 列表项             | Array                 | []     |
| option-tag       | 列表项展示使用参数 | String                | 'name' |
| lock-bg  | 锁定背景层 | Boolean                | true |

### slot
| 名称             | 说明               |
| ---------------- | ------------------ |
| custom          | 自定义面板内容       |

### Event

| 名称             | 说明               | 回调               |
| ---------------- | ------------------ | ------------------ |
| choose          | 选择之后触发         | 选中列表项|
| cancel          | 点击取消文案时触发   | 无 |
| choose          | 关闭时触发           | 无 |
 