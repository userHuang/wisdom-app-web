<template>
  <div class="sky-app-page">
    <bread-nav :bread-data="breadData"></bread-nav>
    <div class="device">
      <div class="item" v-for="item in deviceData" :key="item.name">
        <span class="name">{{item.name}}</span>
        <span class="status" :class="{'active': item.status === '在线'}">{{item.status}}</span>
        <img class="icon" :src="item.src" alt="icon"/>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .sky-app-page {
    font-size: 0;
    .device {
      padding: 20px 30px;
      padding-top: 0px;
      overflow: scroll;
      margin-right: -10px;
      padding-right: 40px;
      height: 560px;

      .item {
        width: 320px;
        height: 160px;
        background: rgba(255,255,255,0.05);
        position: relative;
        display: inline-block;
        margin-right: 20px;
        margin-top: 20px;

        &:nth-child(even) {
          margin-right: 0px;
        }

        .name {
          font-size: 28px;
          line-height: 28px;
          font-weight: 500;
          color: #FFF;
          position: absolute;
          top: 30px;
          left: 20px;
        }

        .status {
          font-size: 24px;
          line-height: 24px;
          font-weight: 400;
          color: #6C6E7AFF;
          position: absolute;
          bottom: 30px;
          left: 20px;
          padding-left: 12px;

          &:before {
            width: 8px;
            height: 8px;
            content: '';
            display: block;
            background: #6C6E7AFF;
            border-radius: 8px;
            position: absolute;
            top: 8px;
            left: 0px;
          }

          &.active {
            color: #02BC1FFF;

            &:before {
              background: #02BC1FFF;
            }
          }
        }

        .icon {
          width: 100px;
          height: 100px;
          position: absolute;
          top: 30px;
          right: 20px;
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
        name: '小维智联',
        url: '/'
      },
      deviceData: [{
        name: '电烤箱',
        status: '离线',
        src: systemIcon
      }, {
        name: '煤气热水器',
        status: '离线',
        src: systemIcon
      }, {
        name: '行车记录仪',
        status: '在线',
        src: systemIcon
      }, {
        name: '扫地机器人',
        status: '离线',
        src: systemIcon
      }, {
        name: '智能风扇',
        status: '在线',
        src: systemIcon
      }, {
        name: '呼叫铃',
        status: '离线',
        src: systemIcon
      }, {
        name: '净化器',
        status: '离线',
        src: systemIcon
      }]
    }
  }
}
</script>
