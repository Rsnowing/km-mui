### 开发目标

- [x] 粘性布局 吸顶效果
- [x] 可设置距离顶部距离吸顶

### 基本用法
滚动到顶部顶部吸顶
```
  <section class="sticky-test">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>3</p>
    <p>3</p>
    <p>3</p>
    <km-sticky>
      <div style="height: 44px;background: tomato;">吸顶</div>
    </km-sticky>
  </section>
```
吸顶时距离顶部有距离
```
  <section class="sticky-test">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>3</p>
    <p>3</p>
    <p>3</p>
    <km-sticky :offset-top="30">
      <div style="height: 44px;background: tomato;">吸顶</div>
    </km-sticky>
  </section>
```
### props

| 字段             | 说明               | 类型                  | 默认值 |
| ---------------- | ------------------ | --------------------- | ------ |
| offset-top       | 吸顶时距离顶部距离   | string, number       | 0  |