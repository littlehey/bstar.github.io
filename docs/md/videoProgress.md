<template>
  <bs-video-progress :allTime="123000" v-model="v"></bs-video-progress>
</template>

<script>
export default {
  data() {
    return {
      v: 10000
    }
  }
}
</script>


# 代码示例
```html
<template>
  <bs-video-progress :allTime="123000" v-model="v"></bs-video-progress>
</template>

<script>
export default {
  data() {
    return {
      v: 10000
    }
  }
}
</script>

```

# props
属性名称|描述|类型|默认值
--|--|--|--
allTime|总时长，毫秒|Number|0
value|当前播放时间|Number|0

# events
事件名称|描述|参数
--|--|--
input|值变动|value
on-mousedown|鼠标按下|无
on-mouseup|鼠标抬起|无
on-change|抬起改变时|value