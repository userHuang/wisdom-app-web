<template>
  <div class="local-date-component"> {{dateTime}} </div>
</template>

<style lang="stylus" scoped>
  .local-date-component {
    display inline-block
  }
</style>

<script>
export default {
  data () {
    return {
      dateTime: ''
    }
  },

  // timeType: {time: '10:20', week: '星期五', date: '11月22日'}
  props: {
    timeType: {
      type: String,
      default: 'time'
    },
    format: {
      type: String,
      default: 'mm:dd'
    }
  },

  methods: {
    show () {
      this.showTime()
      if (this._timer) {
        clearInterval(this._timer)
      } else {
        this._timer = setInterval(() => {
          this.showTime()
        }, 1000)
      }
    },

    showTime() {
      let times
      const now = new Date()
      times = [now.getHours(), now.getMinutes()]
      let hour = +times[0]
      let minute = +times[1]
      minute = minute < 10 ? `0${minute}` : minute

      const week2name = {
        1: '星期一',
        2: '星期二',
        3: '星期三',
        4: '星期四',
        5: '星期五',
        6: '星期六',
        7: '星期日'
      }
      let yy = now.getFullYear()
      let mm = now.getMonth() + 1
      let dd = now.getDate()
      let week = now.getDay()
      const weekName = week2name[week] || ''
      if (this.timeType == 'time') {
        this.dateTime = `${hour}:${minute}`
      }
      if (this.timeType == 'week') {
        this.dateTime = weekName
      }
      if (this.timeType == 'date') {
        this.dateTime = `${mm}月${dd}日`
        if (this.format === 'yy:mm:dd') {
          this.dateTime = `${yy}年${mm}月${dd}日`
        }
        if (this.format === 'mm:dd') {
          this.dateTime = `${mm}月${dd}日`
        }
      }
    }
  },

  mounted() {
    this.show()
  },

  destroyed () {
    if (this._timer) clearInterval(this._timer)
  }
}
</script>
