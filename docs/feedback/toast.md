轻提示
### 开发目标
## 吐司开发目标
- [X] 文字提示
- [X] 长文字提示
- [X] 成功提示
- [X] 失败提示
- [X] 警告提示
- [X] 加载提示
- [X] 自定义背景色和透明度
- [X] 自定义class
- [X] 自定义icon
- [X] 自定义开关时间【可不关闭】
- [X] 关闭回调
- [x] 可配置页面禁止滑动

### 基本用法
文本提示
```js 
this.$toast.txt('哈哈哈')
```

成功提示
```js 
this.$toast.txt('操作成功')
```
失败提示
```js 
this.$toast.txt('操作失败')
```
警告提示
```js 
this.$toast.warn('警告')
```
loading
```js 
this.$toast.loading('加载中')
```
隐藏loading
```js 
this.$toast.hideLoading()
// 或者
this.hideLoading()
```
锁定背景
```js
this.$toast.hideLoading({ lockBg: true })
// 或者
this.hideLoading()
```
### API

| 字段          | 说明                                      | 类型         | 默认值                  |
| ------------- | ----------------------------------------- | ------------ | ----------------------- |
| msg           | 消息文本内容,支持传入HTML                 | String/VNode | ""                      |
| duration      | 展示时长（毫秒），为0时toast不会自动消失  | Number       | 2000                    |
| center        | 是否展示在页面中间（为false时展示在底部） | Boolean      | true                    |
| textAlign     | 多行文案是否居中                          | String       | "center"                |
| bgColor       | 背景颜色（透明度）                        | String       | "rgba(46, 46, 46, 0.7)" |
| customClass   | 自定义类名                                | String       | ""                      |
| icon          | 自定义图标（base64/图片链接）             | String       | ""                      |
| loadingRotate | loading图标是否旋转，仅对loading有效      | Boolean      | true                    |
| onClose       | 关闭时触发的事件                          | function     | null                    |
| lockBg        | 打开吐司时是否锁定背景层                  | Boolean      | false                    |
