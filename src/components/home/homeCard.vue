<template>
  <div class="home-card-page">
    <div class="time-info">
      <div class="time">
        <local-date timeType="time"></local-date>
      </div>
      <div class="month-week">
        <span class="month">
          <local-date timeType="date"></local-date>
        </span>
        <span><local-date timeType="week"></local-date></span>
      </div>
    </div>
    <div class="app-info">
      <div class="item" v-for="item in appData" :key="item.name">
        <router-link :to="`${item.url}`">
          <span class="img">
            <img :src="item.src" alt="icon"/>
          </span>
          <title class="device-name">{{item.name}}</title>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .home-card-page {
    height: 100%;
    color: #FFF;
    font-weight: 400;
    overflow: hidden;
    font-size: 0;
    

    .time-info {
      margin: 0 auto;
      margin-top: 78px;
      width: 400px;

      .time {
        height: 120px;
        font-size: 120px;
        line-height: 120px;
        text-align: center;
        font-family: DINPro-Regular,DINPro;
      }

      .month-week {
        font-size: 32px;
        margin-top: 8px;
        text-align: center;

        .month {
          margin-right: 20px;
          display: inline-block;
        }
      }
    }

    .app-info {
      margin-top: 122px;

      .item {
        width: 200px;
        height: 200px;
        background: rgba(255,255,255,0.05);
        display: inline-block;
        margin-left: 30px;
        text-align: center;
        vertical-align: top;

        .img {
          display: inline-block;
          margin: 30px 60px 20px 60px;
          width: 80px;
          height: 80px;

          img {
            width: 80px;
            height: 80px;
          }
        }

        .device-name{
          display: block;
          font-size: 24px;
          color: #FFF;
        }
      }
    }
  }
</style>

<script>
import LocalDate from '@/components/common/LocalDate'
import xiaoweiIcon from '@/assets/image/xiaowei_icon.png'
import deviceIcon from '@/assets/image/device_icon.png'
import systemIcon from '@/assets/image/system_icon.png'

export default {
  name: 'HomeCard',

  components: {
    LocalDate
  },

  data () {
    return {
      appData: [{
        name: '小维智联',
        src: xiaoweiIcon,
        url: '/skyApp'
      }, {
        name: '应用服务',
        src: deviceIcon,
        url: '/systemApp'
      }, {
        name: '系统设置',
        src: systemIcon,
        url: '/settings'
      }]
    }
  }
}
</script>
