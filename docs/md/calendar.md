# 描述
提供了日历组件，可显示标记

# 效果展示
<template>
  <div class="calendar-demo">
    <div class="demo">
       <div>
      <bs-calendar v-model="date" :marks="marks"></bs-calendar>
    </div>
    <div>
      <bs-calendar v-model="date" local="en" :theme="theme"></bs-calendar>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarDemo',
  data() {
    return {
      date: new Date().getTime(),
      marks: [
        {
          title: '事件录像',
          timestamp: new Date().getTime() - 24 * 60 * 60 * 1000 * 3,
          type: 'event'
        },
        {
          title: '定时录像',
          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 3,
          type: 'time'
        },
        {
          title: '定时录像',
          timestamp: new Date().getTime() - 24 * 60 * 60 * 1000 * 2,
          type: 'time'
        },
        {
          title: '定时录像',
          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 2,
          type: 'time'
        },
        {
          title: '事件录像',
          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 3,
          type: 'event'
        },
        {
          title: '定时录像',
          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 15,
          type: 'time'
        },
        {
          title: '事件录像',
          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 13,
          type: 'event'
        }
      ],
      theme: {
        mainColor: '#212121',
        textColor: '#0D7377',
        darkTextColor: '#323232',
        highlightColor: '#14FFEC',
        eventColor: '#da8204',
        timeColor: '#32e184'
      }
    }
  }
}
</script>

<style scoped>
.demo {
  display: flex;
  justify-content: space-around;
}

.demo div {
  width: 300px;
}
</style>


# 代码示例
```html
<template>
  <div class="calendar-demo">
    <div class="demo">
       <div>
      <bs-calendar v-model="date" :marks="marks"></bs-calendar>
    </div>
    <div>
      <bs-calendar v-model="date" local="en" :theme="theme"></bs-calendar>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarDemo',
  data() {
    return {
      date: new Date().getTime(),
      marks: [
        {
          title: '事件录像',
          timestamp: new Date().getTime() - 24 * 60 * 60 * 1000 * 3,
          type: 'event'
        },
        {
          title: '定时录像',
          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 3,
          type: 'time'
        },
        {
          title: '定时录像',
          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 2,
          type: 'time'
        },
        {
          title: '事件录像',
          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 3,
          type: 'event'
        },
        {
          title: '定时录像',
          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 15,
          type: 'time'
        },
        {
          title: '事件录像',
          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 13,
          type: 'event'
        }
      ],
      theme: {
        mainColor: '#212121',
        textColor: '#0D7377',
        darkTextColor: '#323232',
        highlightColor: '#14FFEC',
        eventColor: '#da8204',
        timeColor: '#32e184'
      }
    }
  }
}
</script>

<style scoped>
.demo {
  display: flex;
  justify-content: space-around;
}

.demo div {
  width: 300px;
}
</style>

```
# props
属性名称|描述|类型|默认值
--|--|--|--
v-model|选中的时间戳|Number|当前时间的时间戳
marks|需要标记的日期|Array|[]
local|语言模式|String|'zh-cn'
theme|主题|Object|{}
### marks属性列表
属性名称|描述|类型
--|--|--
title|标记说明|String
timestamp|毫秒时间戳|Number
type|类型|String(event或time)
### theme属性列表
属性名称|描述|类型|默认值
--|--|--|--
mainColor|主体背景色|String|#efefef
textColor|字体颜色|String|#444
darkTextColor|灰显字体颜色|String|#999
highlightColor|选中项的背景色|String|#4499f7
eventColor|事件标记颜色|String|#da8204
timeColor|定时录像标记颜色|String|#32e184