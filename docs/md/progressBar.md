<template>
  <div class="demo">
    <div class="box">
      <bs-progress-bar v-model="time" :max="100"></bs-progress-bar>
    </div>
    {{time}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 30,
      max: 100
    }
  }
}
</script>

<style lang="less" scoped>
.demo {
  width: 100%;
  .box {
    width: 100%;
    height: 10px;
  }
}
</style>
<style>
.bs-progress-bar {
  background: gray;
}

.bs-bar {
  background-color: blue;
}
</style>

# 代码示例
```html
<template>
  <div class="demo">
    <div class="box">
      <bs-progress-bar v-model="time" :max="100"></bs-progress-bar>
    </div>
    {{time}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 30,
      max: 100
    }
  }
}
</script>

<style lang="less" scoped>
.demo {
  width: 100%;
  .box {
    width: 100%;
    height: 10px;
  }
}
</style>
<style>
.bs-progress-bar {
  background: gray;
}

.bs-bar {
  background-color: blue;
}
</style>
```

# props
属性名称|描述|类型|默认值
--|--|--|--
value|值|Number|0
max|总时长|Number|100
disabled|禁用|Boolean|false

# events
事件名称|描述|参数
--|--|--
input|值改变|值
mouseup|鼠标抬起|值

# 样式定义
类名|描述
--|--
.bs-progress-bar|底条
.bs-bar|进度条