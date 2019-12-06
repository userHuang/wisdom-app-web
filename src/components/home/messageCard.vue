<template>
  <div class="message-card-page">
    <div class="card-item" v-for="item in appData" :key="item.name">
      <span class="img">
        <img :src="item.src" alt="icon"/>
      </span>
      <title class="device-name">{{item.name}}</title>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .message-card-page {
    height: 580px;
    color: #FFF;
    font-weight: 400;
    font-size: 0;
    padding: 40px 30px;
    overflow: scroll;
    margin-right: -10px;
    padding-right: 40px;

    .card-item {
      width: 660px;
      height: 160px;
      line-height: 160px;
      margin-bottom: 20px;
      background:rgba(255,255,255,0.05);

      .img {
        display: inline-block;
        margin: 30px 20px 30px 40px;

        img {
          width: 100px;
          height: 100px;
        }
      }

      .device-name {
        display: inline-block;
        font-size:32px;
        color: #FFF;
        vertical-align: top;
      }
    }
  }
</style>

<script>
import updateIcon from '@/assets/image/update_icon.png'
import messageIcon from '@/assets/image/message_icon.png'
import tipsIcon from '@/assets/image/tips_icon.png'

export default {
  name: 'MessageCard',

  data () {
    return {
      appData: [{
        name: '发现新版本 1.1.2',
        src: updateIcon
      }, {
        name: '最新留言',
        src: messageIcon
      }, {
        name: '微波炉预约已取消',
        src: tipsIcon
      }, {
        name: '系统设置1',
        src: updateIcon
      }, {
        name: '应用服务1',
        src: messageIcon
      }]
    }
  }
}
</script>
