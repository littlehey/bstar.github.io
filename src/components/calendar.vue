<template>
  <div class="calendar" :style="{backgroundColor: theme.mainColor, color: theme.textColor}">
    <div class="year-month-content">
      <div class="left-arrow arrow" @click="subtractYear">«</div>
      <div class="left-arrow arrow" @click="subtractMonth">‹</div>
      <div class="middle-content">
        <div class="year" @click="showWhat === 2 ? showWhat = 0 : showWhat = 2">{{year}}</div>
        <div class="month" @click="showWhat === 1 ?showWhat = 0 : showWhat = 1">{{month}}</div>
      </div>
      <div class="right-arrow arrow" @click="addMonth">›</div>
      <div class="right-arrow arrow" @click="addYear">»</div>
    </div>
    <div v-show="showWhat === 0" class="week-day-content">
      <div class="weeks">
        <div class="week" v-for="week in weeks" :key="week">{{week}}</div>
      </div>
      <div class="days">
        <div class="day gray" :style="{color: theme.darkeTextColor}" v-for="date in days.last" :key="'last' + date" @click="selectLastMonthDay(date)">{{date}}</div>
        <div class="day" :class="{highlight: date == day}" :style="date == day ? {backgroundColor:  theme.highlightColor} : {}" v-for="date in days.now" :key="'now' + date" @click="selectToMonthDay(date)">
          <div class="text">{{date}}</div>
          <div class="marke" v-for="mark in checkMarked(date)" :title="mark.title" :key="mark.timestamp" :class="[mark.type]" :style="{background:theme[`${mark.type}Color`]}"></div>
        </div>
        <div class="day gray" :style="{color: theme.darkeTextColor}" v-for="date in days.next" :key="'next' + date" @click="selectNextMonthDay(date)">{{date}}</div>
      </div>
    </div>
    <div class="month-box" v-show="showWhat === 1">
      <div class="month-item" v-for="m in months" :key="m" :style="month === m ? {backgroundColor:  theme.highlightColor} : {}" :class="{highlight: month === m}" @click="selectMonth(m)">{{m}}</div>
    </div>
    <div class="year-box" v-show="showWhat === 2">
      <div class="year-item" v-for="y in years" :key="y" :style="year === y ? {backgroundColor:  theme.highlightColor} : {}" :class="{highlight: year === y}" @click="selectYear(y)">{{y}}</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'bs-calendar',
  props: {
    local: {
      type: String,
      default: 'zh-cn'
    },
    value: {
      type: Number,
      default: new Date().getTime()
    },
    theme: {
      type: Object,
      default() {
        return {
          mainColor: '#efefef',
          textColor: '#444',
          darkTextColor: '#999',
          highlightColor: '#4499f7',
          eventColor: '#da8204',
          timeColor: '#32e184'
        }
      }
    },
    marks: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      showWhat: 0,
      timestamp: this.value,
      oneDayLength: 24 * 60 * 60 * 1000
    }
  },
  created() {
    moment.locale(this.local)
  },
  computed: {
    weeks() {
      return moment.weekdaysShort()
    },
    months() {
      return moment.monthsShort()
    },
    years() {
      const last12 = [... new Array(12)].map((_, index) => this.year - index - 1).reverse()
      const next12 = [... new Array(12)].map((_, index) => this.year + index + 1)
      return last12.concat([this.year]).concat(next12)
    },
    time: {
      get() {
        return moment(this.timestamp)
      },
      set(mn) {
        this.timestamp = parseInt(mn.format('x'))
      }
    },
    year() {
      return this.time.get('year')
    },
    month() {
      return this.months[this.time.get('month')]
    },
    day() {
      return this.time.get('date')
    },
    days() {
      // 最多6行 42天
      const toMonthDays = this.time.daysInMonth()
      let lastMonthDays = moment(this.time).subtract(1, 'M').daysInMonth()
      const nextMonthDays = moment(this.time).add(1, 'M').daysInMonth()
      const startWeek = moment(this.time).startOf('month').day()
      const endWeek = moment(this.time).endOf('month').day()
      return {
        last: [... new Array(startWeek)].map(() => lastMonthDays--).reverse(),
        now: [... new Array(toMonthDays)].map((_, index) => ++index),
        next: [... new Array(42 - startWeek - toMonthDays)].map((_, index) => ++index)
      }
    }
  },
  watch: {
    value(newTime) {
      this.timestamp = newTime
    },
    timestamp(newTime) {
      this.$emit('input', newTime)
    }
  },
  methods: {
    checkMarked(day) {
      const start = parseInt(moment(`${this.year}-${this.months.findIndex(item => item === this.month) + 1}-${day}`).format('x'))
      const end = start + this.oneDayLength
      const list = this.marks.filter(({ timestamp }) => timestamp >= start && timestamp <= end)
      const evtList = list.filter(({ type }) => type === 'event')
      return list.length > 0 ? (evtList.length > 0 ? [evtList[0]] : [list[0]]) : []
    },
    subtractMonth() {
      this.time = this.time.subtract(1, 'M')
    },
    addMonth() {
      this.time = this.time.add(1, 'M')
    },
    addYear() {
      this.time = this.time.add(1, 'Y')
    },
    subtractYear() {
      this.time = this.time.subtract(1, 'Y')
    },
    selectToMonthDay(date) {
      this.time = this.time.set('date', date)
    },
    selectLastMonthDay(date) {
      this.time = this.time.subtract(1, 'M').set('date', date)
    },
    selectNextMonthDay(date) {
      this.time = this.time.add(1, 'M').set('date', date)
    },
    selectMonth(mString) {
      const m = this.months.findIndex(item => item === mString)
      this.time = this.time.set('month', m)
      this.showWhat = 0
    },
    selectYear(y) {
      this.time = this.time.set('year', y)
      this.showWhat = 0
    }
  }

}
</script>

<style lang="less" scoped>
@mainColor: #0b90aa;
@textColor: #fff;
@darkTextColor: #999;
@highlightColor: #fd367e;
@topHeight: 50px;
@bottomHeight: 210px;

.calendar {
  color: @textColor;
  background-color: @mainColor;
  text-align: center;
  user-select: none;
  padding: 0 6px;
  .highlight {
    background-color: @highlightColor;
  }
  .month-box {
    height: @bottomHeight;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    .month-item {
      width: 33%;
      height: 25%;
      line-height: 50px;
      cursor: pointer;
    }
  }
  .year-box {
    height: @bottomHeight;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    .year-item {
      width: 20%;
      height: 20%;
      line-height: 40px;
      cursor: pointer;
    }
  }
  .year-month-content {
    height: @topHeight;
    display: flex;
    align-items: center;
    line-height: @topHeight;
    .arrow {
      height: 100%;
      width: 25%;
      line-height: 44px;
      font-size: 32px;
      cursor: pointer;
    }
    .middle-content {
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 100%;
      width: 50%;
      .year {
        width: 50%;
        height: 100%;
      }
      .month {
        height: 100%;
        width: 50%;
      }
    }
  }
  .week-day-content {
    height: @bottomHeight;
    .weeks {
      height: 15%;
      display: flex;
      justify-content: space-between;
      .week {
        flex-grow: 1;
        width: 14%;
      }
    }
    .days {
      height: 85%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .day {
        height: 16%;
        flex-grow: 1;
        width: 14%;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        position: relative;
        line-height: 28px;
        .text {
          height: 100%;
        }
        .marke {
          height: 4px;
          width: 4px;
          position: absolute;
          bottom: 2px;
          left: calc(50% - 3px);
          border-radius: 50%;
        }
      }
      .gray {
        color: @darkTextColor;
      }
    }
  }
}
</style>
