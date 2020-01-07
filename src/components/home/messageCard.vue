<template>
  <div class="message-card-page">
    <div v-for="item in appData" :key="item.name">
      <router-link :to="`${item.url}`">
        <div class="card-item">
          <span class="img">
            <img :src="item.icon" alt="icon"/>
          </span>
          <title class="device-name">{{item.name}}</title>
          <span class="nums" v-if="item.name === '最新留言' && item.num">
            <num-tips :value="item.num"></num-tips>
          </span>
        </div>
      </router-link>
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

    .card-item {
      width: 660px;
      height: 160px;
      line-height: 160px;
      margin-bottom: 20px;
      background:rgba(255,255,255,0.05);
      position: relative;

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

      .nums {
        position: absolute;
        display: inline-block;
        right: 40px;
        top: 60px;
      }
    }
  }
</style>

<script>
import NumTips from '@/components/common/NumTips'
import updateIcon from '@/assets/image/update_icon.png'
import messageIcon from '@/assets/image/message_icon.png'
import tipsIcon from '@/assets/image/tips_icon.png'

export default {
  name: 'MessageCard',

  components: {
    NumTips
  },

  data () {
    return {
      appData: [{
        name: '发现新版本 1.1.2',
        icon: updateIcon
      }, {
        name: '最新留言',
        icon: messageIcon,
        num: 4,
        url: '/messageBoard'
      }, {
        name: '微波炉预约已取消',
        icon: tipsIcon
      }, {
        name: '系统设置1',
        icon: updateIcon
      }, {
        name: '应用服务1',
        icon: messageIcon
      }]
    }
  }
}
</script>
