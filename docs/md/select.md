# 描述
提供了简单的选择器组件，比起三方组件的提升是提供了选项框覆盖插件功能，集成了scroll组件避免页面插件闪烁

# 效果展示
<template>
<div style="background:#1c3053;height: 60px;padding: 30px;">
  <bs-select :options="options" :scrollOptions="scrollOptions" v-model="v" style="width:200px;">
  </bs-select>
  {{v}}
</div>
</template>
<script>
export default {
  data() {
    const options = [
      {
        value: '123',
        label: 'llllllll嘻嘻lllllllllllllllllllllllllllllllllllllllllllllllllll'
      }
    ]
    let i = 22
    while (i--) {
      options.push({
        label: i,
        value: i
      })
    }
    return {
      options,
      scrollOptions: {
        color: 'rgba(0,0,0,.75)',
        width: '8px',
        background: 'rgba(0,0,0,.15)'
      },
      v: ''
    }
  }
}
</script>

# 代码示例
```html
<template>
<div style="background:#1c3053;height: 60px;padding: 30px;">
  <bs-select :options="options" :scrollOptions="scrollOptions" v-model="v" style="width:200px;">
  </bs-select>
  {{v}}
</div>
</template>
<script>
export default {
  data() {
    const options = []
    let i = 22
    while (i--) {
      options.push({
        label: i,
        value: i
      })
    }
    return {
      options,
      scrollOptions: {
        color: 'rgba(0,0,0,.75)',
        width: '8px',
        background: 'rgba(0,0,0,.15)'
      },
      v: ''
    }
  }
}
</script>
```

# props
属性名称|描述|类型|默认值
--|--|--|--
options|数据对象|Array[{value, label}]|必须
value|值|String,Number|必须
scrollNum|大于此数量的选项出滚动条|Number|4
scrollOptions|滚动条组件样式定义(<a href="#/bs-scroll">详见</a>)|Object|{}

# events
事件名称|描述|参数
--|--|--
input|选中值|value

# 样式定义
__样式覆盖可能需要更高的权重覆盖， 如div.bs-slt-tog__
类名|描述
--|--
.bs-slt-tog|按钮框
.bs-slt-tog.open|按钮框展开
.bs-slt-tog:hover|按钮框鼠标悬浮
.bs-slt-drp|选项框容器
.bs-slt-item|单个选项
.bs-slt-item:hover|选项鼠标悬浮
.bs-slt-item.selected|已选中选项