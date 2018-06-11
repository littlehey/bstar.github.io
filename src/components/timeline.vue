<template>
  <div id="timeline">
    <canvas class="line" @mouseleave="ml" @mousedown="md" @mouseup="mu" @mousemove="mm" @wheel.stop="scroll" @click="lineClick" ref="line"></canvas>
  </div>
</template>
<script>
// 使用今天零点的时间作为基准时间，绘制时间轴由当前选择时间与基准时间计算
export default {
  name: 'bs-timeline',
  props: {
    value: { // 时间
      type: Number,
      default: () => {
        const date = new Date()
        date.setHours(12)
        date.setMinutes(0)
        date.setSeconds(0)
        return date.getTime()
      }
    },
    recordInfo: { // 录像信息
      type: Array,
      default: () => {
        return []
      }
    },
    level: {
      type: Number,
      default: 24
    },
    timeLineColor: {
      type: String,
      default: '#1fa0fe'
    },
    eventLineColor: {
      type: String,
      default: '#fc6e30'
    },
    lineColor: {
      type: String,
      default: '#ccc'
    }
  },
  data() {
    const date = new Date()
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    const today0 = date.getTime()
    return {
      today0,
      time: this.value,
      canvas: null,
      ctx: null,
      startPosition: 0,
      canMove: false,
      canvasWidth: 0,
      wheelIndex: 0,
      activeIndex: 0
    }
  },
  computed: {
    scale() { // 1px代表的时间（毫秒）
      return this.level * 60 * 60 * 1000 / this.canvasWidth
    },
    timeList() {
      const arr = []
      const allTime = 24 * 60 * 60 // 24小时的秒数
      const range = this.level * 60 * 60 / 12  // 两大格之间的间距
      for (let s = 0; s <= allTime; s += range) {
        let second = s
        const hour = parseInt(second / 3600)
        second = second % 3600
        const minute = parseInt(second / 60)
        second = second % 60
        arr.push([hour, minute, second].map(this.addZero).join(':'))
      }
      return [...arr, ...arr.slice(1)]
    },
    /*
    * 计算绘制时间轴时的位移,需要注意当前时间应该是轴的中间位置，指针所指的位置，而不是轴开始的位置,还有时间差为正，则位置为负
    * this.level * 60 * 60 * 1000 / 2   可视轴一半所代表的的时间
    * rangeTime 当前时间距中心位置偏移的时间
    */
    beforeSpace() {
      const rangeTime = - (this.time - this.today0 - this.level * 60 * 60 * 1000 / 2) % (24 * 60 * 60 * 1000)
      return (rangeTime > 0 ? rangeTime - 24 * 60 * 60 * 1000 : rangeTime) / this.scale
    }
  },
  watch: {
    value(newValue) {
      this.time = newValue
    },
    time(newTime) {
      this.draw()
      this.$emit('input', newTime)
    },
    level() {
      this.draw()
    },
  },
  methods: {
    init() {
      this.canvas = this.$refs.line
      this.ctx = this.canvas.getContext('2d')
      this.canvas.height = 110
      this.resizeFn = () => {
        this.canvasWidth = this.$refs.line.offsetWidth
        this.canvas.width = this.canvasWidth
        this.draw()
      }
      this.resizeFn()
    },
    scroll(evt) {
      if (this.recordInfo.length <= 2) { return }
      var evt = evt || window.event;
      if (evt.preventDefault) {  // 阻止默认事件流
        evt.preventDefault()
        evt.stopPropagation()
      } else {
        evt.returnValue = false
        evt.cancelBubble = true
      }

      const len = this.recordInfo.length
      const deltaY = evt.deltaY

      if (deltaY > 0) { this.wheelIndex++ }
      if (deltaY < 0) { this.wheelIndex-- }

      if (this.wheelIndex < 0) { this.wheelIndex = 0 }
      if (this.wheelIndex > len - 2) { this.wheelIndex = len - 2 }
      this.draw()
    },
    initStyle() { // 初始化背景色
      this.ctx.fillStyle = '#393E46'
      this.ctx.fillRect(0, 0, this.canvasWidth, 50)
      this.ctx.fillStyle = '#222831'
      this.ctx.fillRect(0, 50, this.canvasWidth, 60)
      this.ctx.fillStyle = this.lineColor
      this.ctx.fillRect(0, 50, this.canvasWidth, 10)
      if (this.recordInfo.length > 1) { this.ctx.fillRect(0, 80, this.canvasWidth, 10) }
    },
    addZero(n) {
      return + n < 10 ? '0' + n : '' + n
    },
    draw() {
      // this.ctx.clearRect(0, 0, this.canvasWidth, this.canvas.height)
      this.initStyle()
      this.drawTimes()
      this.drawColorLine()
      this.drawScroll()
      this.drawPointer()
    },
    drawPointer() { // 画中间的指针
      this.ctx.strokeStyle = '#1fa0fe'
      this.ctx.beginPath()
      this.ctx.moveTo(this.canvasWidth / 2, 20)
      this.ctx.lineTo(this.canvasWidth / 2, 110)
      this.ctx.stroke()
    },
    drawTimes() { // 画时间
      this.ctx.strokeStyle = '#EEE'
      this.ctx.fillStyle = '#EEE'
      const space = this.canvasWidth / 12  // 每一大格代表的宽度(px)
      this.ctx.textAlign = 'center'
      const y = 20
      this.timeList.forEach((text, index) => {
        const x = this.beforeSpace + index * space
        if (x < - this.canvasWidth / 12 || x > this.canvasWidth * 13 / 12) return
        this.ctx.fillText(text, x, y)
        this.drawLine(x, y + 5, space / 5)
      })
    },
    drawLine(x, y, space) { // 画刻度
      [...Array(5)].forEach((_, index) => {
        const X = x + index * space
        this.ctx.beginPath()
        this.ctx.moveTo(X, y)
        this.ctx.lineTo(X, index ? y + 8 : y + 15)
        this.ctx.stroke()
      })
    },
    drawColorLine() { // 10px一条，中间隔20px,从50px位置开始, 画事件轴
      this.recordInfo.forEach(({ eventVideo, timedVideo, title }, index) => {
        const y = 50 + (index - this.wheelIndex) * 30
        if (index < this.wheelIndex) return
        if (index > this.wheelIndex + 1) return
        this.ctx.fillStyle = '#EEE'
        this.ctx.fillText(title, this.canvasWidth / 2, y + 23)

        timedVideo.forEach(({ start, end }) => this.time2Rect(start, end, y, this.timeLineColor, index))
        eventVideo.forEach(({ start, end }) => this.time2Rect(start, end, y, this.eventLineColor, index))
      })
    },
    position2time(position) {
      return - position * this.scale
    },
    time2Rect(start, end, y, color, index) { // 画时间轴具体的画法
      const x = (start - this.time) / this.scale + this.canvasWidth / 2
      const width = (end - start) / this.scale
      this.ctx.fillStyle = color
      this.ctx.fillRect(x, y, width, 10)

      if (index === this.activeIndex) {
        this.ctx.strokeStyle = '#1fa0fe'
        this.ctx.rect(0, y - 2, this.canvasWidth, 14)
        this.ctx.stroke()
      }
    },
    drawScroll() {
      const len = this.recordInfo.length
      if (len < 3) return
      const height = 2 / len * 60
      const y = 50 + (60 - height) / (len - 2) * this.wheelIndex
      this.ctx.fillStyle = '#EEE'
      this.ctx.fillRect(this.canvasWidth - 5, y, 3, height)
    },
    md(e) {
      this.startPosition = e.clientX
      this.canMove = true
    },
    mm(e) {
      if (!this.canMove) return
      const endPosition = e.clientX
      const rangePosition = endPosition - this.startPosition
      this.startPosition = endPosition
      this.time += this.position2time(rangePosition) // 把位移转为时间
    },
    mu() {
      this.canMove = false
    },
    ml() {
      this.canMove = false
    },
    lineClick(e) {
      const y = e.offsetY
      const oldIndex = this.activeIndex
      if (y > 50 && y < 60) { this.activeIndex = this.wheelIndex }
      if (y > 80 && y < 90) { this.activeIndex = this.wheelIndex + 1 }
      if (oldIndex !== this.activeIndex) {
        this.draw()
        this.$emit('activeLine', this.activeIndex)
      }
    }
  },
  mounted() {
    this.init()
    document.querySelector('body').addEventListener('resize', this.resizeFn, false)
  },
  beforeDestory() {
    document.querySelector('body').removeEventListener('resize', this.resizeFn, false)
    this.resizeFn = null
  }
}
</script>

<style lang="less" scoped>
#timeline {
  position: relative;
  .line {
    width: 100%;
    height: 110px;
    cursor: pointer;
  }
}
</style>


