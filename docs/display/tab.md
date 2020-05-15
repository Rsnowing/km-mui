标签页
### 开发目标
- [x] 切换回调
- [x] 设置默认选中项
- [x] 配置是否需要滑动切换
- [ ] 自定义标签
### 基本用法
```
  <km-tab
    :default="1"
    :swiper="false"
    @change="handleChange"
  >
    <km-tab-panel label="">
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
```
```
methods: {
  handleChange (value) {
    console.log(value)
  }
}
```

### tab Props
| 字段             | 说明               | 类型                  | 默认值 |
| ---------------- | ------------------ | --------------------- | ------ |
| default          | 默认           | boolean               | false  |
| swiper       | 是否开启滑动切换tab效果           | boolean                | true |

### tab-panel Props
| 字段             | 说明               | 类型                  | 默认值 |
| ---------------- | ------------------ | --------------------- | ------ |
| label          | 标签文字           | string               | ''  |

### Event
| 名称             | 说明               | 类型                  | 默认值 |
| ---------------- | ------------------ | --------------------- | ------ |
| change          | 切换tab时触发           | string               | ''  |


| 名称             | 说明               | 回调               |
| ---------------- | ------------------ | ------------------ |
| change          | 切换tab时触发         | 选中的标签label |