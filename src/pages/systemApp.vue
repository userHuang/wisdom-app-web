<template>
  <div class="sysytem-app-page">
    <bread-nav :bread-data="breadData"></bread-nav>
    <div class="device">
      <div class="item" v-for="item in deviceData" :key="item.name">
        <img class="icon" :src="item.src" alt="icon"/>
        <title class="name">{{item.name}}</title>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .sysytem-app-page {
    font-size: 0;
    .device {
      padding: 30px 30px;
      padding-top: 0px;
      overflow: scroll;
      margin-right: -10px;
      padding-right: 40px;
      height: 560px;

      .item {
        width: 200px;
        height: 200px;
        background: rgba(255,255,255,0.05);
        position: relative;
        display: inline-block;
        margin-right: 30px;
        margin-top: 30px;

        &:nth-child(3n) {
          margin-right: 0px;
        }

        .icon {
          width: 80px;
          height: 80px;
          display: inline-block;
          margin-top: 30px;
          margin-left: 60px;
        }

        .name {
          display: block;
          font-size: 24px;
          font-family: NotoSansHans-Regular, NotoSansHans;
          font-weight: 400;
          color: #fff;
          line-height: 36px;
          margin-top: 14px;
          text-align: center;
        }
      }
    }
  }
</style>

<script>
import BreadNav from '@/components/common/BreadNav'
import systemIcon from '@/assets/image/system_icon.png'
export default {
  components: {
    BreadNav
  },

  data () {
    return {
      breadData: {
        name: '应用服务',
        url: '/'
      },
      deviceData: [{
        name: '天气',
        src: systemIcon
      }, {
        name: '计算器',
        src: systemIcon
      }, {
        name: '闹钟',
        src: systemIcon
      }, {
        name: '留言板',
        src: systemIcon
      }, {
        name: '蓝牙音乐',
        src: systemIcon
      }, {
        name: '备忘录',
        src: systemIcon
      }, {
        name: '微信',
        src: systemIcon
      }, {
        name: '抖音',
        src: systemIcon
      }]
    }
  }
}
</script>
