# 描述
使用指令可以快速切换元素的disable状态，为元素添加类，并且禁用元素的点击事件

# 效果展示
<template>
<div>
  <input type="text" style="border:1px solid black" v-bs-disable="dis" />
  <v-btn v-bs-disable="dis" @click="clicks">click</v-btn>
  <v-btn @click="dis=!dis">Change</v-btn>
  {{msg}}
  <div>disabled: {{dis}}</div>
</div>
</template>
<script>
export default {
  data() {
    return {
      dis: false,
      msg: ''
    }
  },
  methods: {
    clicks() {
      this.msg = new Date()
    }
  }
}
</script>

# 代码示例
```html
<template>
<div>
  <input type="text" style="border:1px solid black" v-bs-disable="dis" />
  <v-btn v-bs-disable="dis" @click="clicks">click</v-btn>
  <v-btn @click="dis=!dis">Change</v-btn>
  {{msg}}
  <div>disabled: {{dis}}</div>
</div>
</template>
<script>
export default {
  data() {
    return {
      dis: false,
      msg: ''
    }
  },
  methods: {
    clicks() {
      this.msg = new Date()
    }
  }
}
</script>
```

# props
属性名称|描述|类型|默认值
--|--|--|--
无|是否禁用|Boolean|必须

# 样式定义
类名|描述
--|--
.bs-disabled|禁用时添加