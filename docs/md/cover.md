# 描述
此组件用于页面有插件，需要盖过插件层级的解决方案。

### 此组件用于需要遮盖住的区域，会生成一个容器，所以可以直接使用它替代父容器。
**注意：组件的样式定义中必须设置定位，如 relative或 absolute**

*modal弹出层为特殊，内容部分使用此组件时，不加定位可以覆盖住整个 modal（包括 head和  footer）*
# 效果展示
<template>
  <div style="position:relative">
    <object type="application/x-webplayercontrol" style="height:200px;width: 200px;"></object>
    <bs-cover class="cover-test" v-model="isCover">
      <v-btn @click="isCover=!isCover">toggle</v-btn>
      <v-btn @click="f">fullscreen</v-btn>
    </bs-cover>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isCover: true
    }
  },
  methods: {
    f() {
      this.plugin.SetPlayFullScreen()
    }
  },
  mounted() {
    this.plugin = this.$el.querySelector('object')
  }
}
</script>
<style lang="stylus" scoped>
.cover-test
  position absolute
  top 16px
  left 100px
  width 300px
  height 200px
  background gray
  text-align right
</style>

# 代码示例
```html
<template>
  <div>
    <object type="application/x-webplayercontrol" style="height:200px;width: 200px;"></object>
    <bs-cover class="cover-test" v-model="isCover">
      <v-btn @click="isCover=!isCover">toggle</v-btn>
      <v-btn @click="f">fullscreen</v-btn>
    </bs-cover>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isCover: true
    }
  },
  methods: {
    f() {
      this.plugin.SetPlayFullScreen()
    }
  },
  mounted() {
    this.plugin = this.$el.querySelector('object')
  }
}
</script>
<style lang="stylus" scoped>
.cover-test
  position absolute
  top 16px
  left 100px
  width 300px
  height 200px
  background gray
  text-align right
</style>

```




# props
属性名称|描述|默认值
--|--|--
value|是否遮盖插件|必须

**此组件用 v-if的 iframe组件来实现，所以会有性能上的损耗，在不需要显示时，切记要把 value给设置为 false**

# events
无