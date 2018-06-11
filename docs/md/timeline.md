# 描述
时间轴组件

# 效果展示
<template>
  <div>
    <bs-timeline v-model="value" :recordInfo="recordInfo" :level="levels[step]" @activeLine="activeLine"></bs-timeline>
    <v-btn @click="zoomOut">+</v-btn>  <v-btn @click="zoomIn">-</v-btn>
    <span @click="value= new Date().getTime()">当前时间：</span>  {{now()}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      recordInfo: [
        {
          title: '通道1',
          eventVideo: [{ start: new Date().getTime(), end: new Date().getTime() + 10000000 },
          { start: new Date().getTime() + 10500000, end: new Date().getTime() + 11000000 }],
          timedVideo: [{ start: new Date().getTime() - 10000000, end: new Date().getTime() }]
        },
        {
          title: '视频通道2',
          eventVideo: [{ start: new Date().getTime() - 5000000, end: new Date().getTime() + 10000000 }],
          timedVideo: [{ start: new Date().getTime() - 10000000, end: new Date().getTime() }]
        },
        {
          title: '通道3',
          eventVideo: [{ start: new Date().getTime(), end: new Date().getTime() + 10000000 }],
          timedVideo: [{ start: new Date().getTime() - 10000000, end: new Date().getTime() },
          { start: new Date().getTime() + 10005000, end: new Date().getTime() + 10010000 }]
        },
        {
          title: '通道4',
          eventVideo: [{ start: new Date().getTime(), end: new Date().getTime() + 10000000 }],
          timedVideo: [{ start: new Date().getTime() - 10000000, end: new Date().getTime() - 1000000 }]
        },
        {
          title: '自定义通道5',
          eventVideo: [{ start: new Date().getTime(), end: new Date().getTime() + 10000000 }],
          timedVideo: [{ start: new Date().getTime() - 10000000, end: new Date().getTime() }]
        },
        {
          title: '通道6',
          eventVideo: [{ start: new Date().getTime(), end: new Date().getTime() + 10000000 }],
          timedVideo: [{ start: new Date().getTime() - 10000000, end: new Date().getTime() }]
        }
      ],
      value: new Date().getTime(),
      levels: [1/60, 1/5, 1, 6, 12, 24], // 5s/60s, 60s/12m, 5m/1h, 0.5h/6h, 1h/12h, 2h/24h
      step: 5
    }
  },
  methods: {
    zoomOut() {
      if (this.step === 0) return
      this.step--
    },
    zoomIn() {
      if (this.step === this.levels.length - 1) return
      this.step++
    },
    activeLine(index) {
      console.log(index)
    },
    now() {
      const date = new Date(this.value)
      const addZero = (n) => (n.toString().length < 2 ? '0' + n : '' + n)
      return `${addZero(date.getFullYear())}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())} ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`
    }
  }
}
</script>


# 代码示例
```html
<template>
  <div>
    <bs-timeline v-model="value" :recordInfo="recordInfo" :level="levels[step]" @activeLine="activeLine"></bs-timeline>
    <v-btn @click="zoomOut">+</v-btn>  <v-btn @click="zoomIn">-</v-btn>
    <span @click="value= new Date().getTime()">当前时间：</span>  {{now()}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      recordInfo: [
        {
          title: '通道1',
          eventVideo: [{ start: new Date().getTime(), end: new Date().getTime() + 10000000 },
          { start: new Date().getTime() + 10500000, end: new Date().getTime() + 11000000 }],
          timedVideo: [{ start: new Date().getTime() - 10000000, end: new Date().getTime() }]
        },
        {
          title: '视频通道2',
          eventVideo: [{ start: new Date().getTime() - 5000000, end: new Date().getTime() + 10000000 }],
          timedVideo: [{ start: new Date().getTime() - 10000000, end: new Date().getTime() }]
        },
        {
          title: '通道3',
          eventVideo: [{ start: new Date().getTime(), end: new Date().getTime() + 10000000 }],
          timedVideo: [{ start: new Date().getTime() - 10000000, end: new Date().getTime() },
          { start: new Date().getTime() + 10005000, end: new Date().getTime() + 10010000 }]
        },
        {
          title: '通道4',
          eventVideo: [{ start: new Date().getTime(), end: new Date().getTime() + 10000000 }],
          timedVideo: [{ start: new Date().getTime() - 10000000, end: new Date().getTime() - 1000000 }]
        },
        {
          title: '通道5',
          eventVideo: [{ start: new Date().getTime(), end: new Date().getTime() + 10000000 }],
          timedVideo: [{ start: new Date().getTime() - 10000000, end: new Date().getTime() }]
        },
        {
          title: '通道6',
          eventVideo: [{ start: new Date().getTime(), end: new Date().getTime() + 10000000 }],
          timedVideo: [{ start: new Date().getTime() - 10000000, end: new Date().getTime() }]
        }
      ],
      value: new Date().getTime(),
      levels: [1/60, 1/5, 1, 6, 12, 24], // 5s/60s, 60s/12m, 5m/1h, 0.5h/6h, 1h/12h, 2h/24h
      step: 5
    }
  },
  methods: {
    zoomOut() {
      if (this.step === 0) return
      this.step--
    },
    zoomIn() {
      if (this.step === this.levels.length - 1) return
      this.step++
    },
    activeLine(index) {
      console.log(index)
    },
    now() {
      const date = new Date(this.value)
      const addZero = (n) => (n.toString().length < 2 ? '0' + n : '' + n)
      return `${addZero(date.getFullYear())}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())} ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`
    }
  }
}
</script>

```

# props
属性名称|描述|类型|默认值
--|--|--|--
v-model|双向绑定当前时间戳(毫秒)|Number|当天12点时间戳
level|当前可视时间轴区域所能表示的时间（小时）|Number|24
recordInfo|回放信息|Array|无
timeLineColor|定时录像条颜色|String|#1fa0fe
eventLineColor|事件录像条颜色|String|#fc6e30
lineColor|轴背景颜色|String|#ccc


# events
事件名称|描述|参数
--|--|--
activeLine|焦点轴|焦点轴的索引


# 说明
这个时间轴只保留了最根本的轴体，不包括之前的标题、日历、图例，使用时可以根据v-model与level自行添加