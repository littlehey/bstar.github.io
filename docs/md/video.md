# 描述
此组件是提供了一个组件布局的方案，关于视频插件内部实现则使用prop的方式作传递，组件本身仅提供布局及焦点控制

# 效果展示
<template>
<div>
  <bs-video :curPage="curPage" :count="3" style="height: 400px" :pluginCOM="plugin" :COMprops="[]" :styles="styles" :activedVM.sync="avm"
    ref="video"></bs-video>
  <v-btn @click="getCOM">getCOM</v-btn>
</div>
</template>
<script>
import plugin from './plugin.vue'
export default {
  data () {
    return {
      plugin,
      curPage: 0,
      showNum: 4,
      styles: [
        {
          width: '33%',
          height: '100%'
        }, {
          width: '33%',
          height: '100%'
        }, {
          width: '33%',
          height: '100%'
        }
      ],
      avm: null,
    }
  },
  computed: {
    videoPlugin() {
      return this.$refs.video
    }
  },
  watch: {
    avm(v) {
      console.log(v)
    }
  },
  methods: {
    getCOM() {
      this.videoPlugin.getCOM(2).aaa()
    }
  }
}
</script>
<style lang="stylus">
.bs-video-single
  background #eee
  border 1px solid #eee
.bs-actived
  border 1px solid red
</style>


# 代码示例
```html
<template>
<div>
  <bs-video :curPage="curPage" :count="3" style="height: 400px" :pluginCOM="plugin" :COMprops="[]" :styles="styles" :activedVM.sync="avm"
    ref="video"></bs-video>
  <v-btn @click="getCOM">getCOM</v-btn>
</div>
</template>
<script>
import plugin from './plugin.vue'
export default {
  data () {
    return {
      plugin,
      curPage: 0,
      showNum: 4,
      styles: [
        {
          width: '33%',
          height: '100%'
        }, {
          width: '33%',
          height: '100%'
        }, {
          width: '33%',
          height: '100%'
        }
      ],
      avm: null,
    }
  },
  computed: {
    videoPlugin() {
      return this.$refs.video
    }
  },
  watch: {
    avm(v) {
      console.log(v)
    }
  },
  methods: {
    getCOM() {
      this.videoPlugin.getCOM(2).aaa()
    }
  }
}
</script>
<style lang="stylus">
.bs-video-single
  background #eee
  border 1px solid #eee
.bs-actived
  border 1px solid red
</style>
```

# props
属性名称|描述|类型|默认值
--|--|--|--
count|总渲染的插件数量(一次渲染不再变化)|Number|1
showNum|每页显示的插件数量(styles属性生效时此属性无效)|Number|1
curPage|当前页码(styles属性生效时此属性无效)|Number|0
styles|每个插件的样式对象|Array[Object]|null
pluginCOM|插件的vue组件对象|Vue Object|必须
COMprops|实例化每个插件传递的props|Array[Object]|[]

# events
事件名称|描述|返回值
--|--|--
update:activedVM|切换焦点时返回当前焦点的vm对象|当前焦点的vm对象

# vm对象获得的属性
属性名称|描述|类型|值
--|--|--|--
index|索引值|Number|index
$parent|父组件引用|VM Object|bs-video的vm对象
以及由COMprops来的对象属性值


# methods
方法名称|描述|参数|返回值
--|--|--|--
getCOM|获得某个下标的vm对象|index|index的vm对象

# 样式定义
类名|描述
--|--
bs-video|video组件容器
bs-video-single|video单个插件容器
bs-actived|当前激活窗口的插件容器

# 插件事件
默认的网页元素的click事件会更改activedIndex，如果点击到插件上就被拦截了

在插件的点击回调里添加this.$el.click()即可