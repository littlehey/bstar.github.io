# 描述
scroll组件用于页面有插件，原生滚动条会导致插件闪烁，或者因为原生滚动条不够美观时的解决方案。

注意事项为组件高度一定要是可计算的，若为100%则他的父容器高度需要是可计算的。

# 效果展示
<template>
  <div>
    <div style="height:200px">
      <bs-scroll class="inb" style="width:200px" ref="scroller">
        <ul>
          <li v-for="index in count" :key="index">{{index}}</li>
        </ul>
      </bs-scroll>
      <div class="inb">
        <v-btn @click="count++">+</v-btn>
        <v-btn @click="count--">-</v-btn>
        <v-btn @click="getT">getTop</v-btn>
        <v-btn @click="setT">setTop</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 15
    }
  },
  watch: {
    count(a) {
      if (a < 0) {
        this.count = 0
      }
    }
  },
  methods: {
    getT() {
      window.alert(this.$refs.scroller.getScrollTop())
    },
    setT() {
      this.$refs.scroller.setScrollTop(0)
    }
  }
}
</script>
<style>
.inb {
  display: inline-block;
}
</style>

# 代码示例
```html
<template>
  <div>
    <div style="height:200px">
      <bs-scroll class="inb" style="width:200px" ref="scroller">
        <ul>
          <li v-for="index in count" :key="index">{{index}}</li>
        </ul>
      </bs-scroll>
      <div class="inb">
        <v-btn @click="count++">+</v-btn>
        <v-btn @click="count--">-</v-btn>
        <v-btn @click="getT">getTop</v-btn>
        <v-btn @click="setT">setTop</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 11
    }
  },
  watch: {
    count(a) {
      if (a < 0) {
        this.count = 0
      }
      this.update()
    }
  },
  methods: {
    getT() {
      window.alert(this.$refs.scroller.getScrollTop())
    },
    setT() {
      this.$refs.scroller.setScrollTop(0)
    },
    update() {
      this.$refs.scroller.update()
    }
  }
}
</script>

```
# props
属性名称|描述|类型|默认值
--|--|--|--
height|组件限定高度|String|100%
wheelSpeed|滚动速度|Number|40
option|组件的option对象（可选）, 对象属性如下表格|Object|无
### option属性列表
属性名称|描述|类型|默认值
--|--|--|--
color|滚动条颜色|String|#909090
background|滚动条底色|String|#e3e3e3
width|滚动条宽度|String|10px
margin|滚动条边距|String|0px

以上属性还可以通过设置全局变量来实现
如:
```javascript
Vue.ScrollOption = {
  color: 'red'
}
```
通过全局变量设置的样式会影响所有的默认样式
建议在main中定义全局样式

# events
事件名称|描述|参数
--|--|--
on-scroll|滚动事件|无
scroll-top|滚动到顶部|无
scroll-bottom|滚动到底部|无

# methods
方法名称|描述|参数|返回值
--|--|--|--
getScrollTop|获得scrolltop的值|无|scrolltop的值
setScrollTop|设置scrolltop的值|scrolltop的值|无
update|内容高度变化时调用此方法重新计算区域(简单结构会自动调用)|无|无
