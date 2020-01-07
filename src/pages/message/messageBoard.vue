<template>
  <div class="message-board-page">
    <bread-nav :bread-data="breadData" :sidebar="true"></bread-nav>
    <section class="message-list">
      <div class="messages" :class="{'messages-true': message.content.length > 0}" v-for="(message, index) in messages" :key="index">
        <div class="date" v-if="message.content.length > 0">
          <span class="month">{{message.month}}</span>
          <span class="time">{{message.time}}</span>
        </div>
        <div class="content" @touchstart="showDeleteButton(index, item.id)" @touchend="emptyTime" v-for="item in message.content" :key="item.seconds" :style="{width: getItemWidth(item.seconds)}">
          <span class="icon"></span>
          <span class="seconds">{{item.seconds}}s</span>
        </div>
      </div>
    </section>
    <van-popup v-model="isShow" position="bottom" :style="{ height: '200px', background: 'rgba(53,53,63,1)' }">
      <div class="clear" @click="clearMessage">清空留言</div>
      <div class="cancle" @click="isShow = false">取消</div>
    </van-popup>
  </div>
</template>

<style lang="stylus" scoped>
  .message-board-page {
    font-size: 0px;
    position: relative;

    .message-list {
      padding: 30px 20px;
      overflow: scroll;
      height: 520px;

      .date {
        font-size: 0px;
        font-family: NotoSansUI-Regular,NotoSansUI;
        font-weight: 400;
        color: rgba(108,110,122,1);
        line-height: 34px;
        text-align: center;
        margin-bottom: 20px;

        .month {
          font-size: 24px;
          margin-right: 10px;
        }
        .time {
          font-size: 24px;
        }
      }

      .content {
        max-width: 680px;
        min-width: 180px;
        height:80px;
        background: #8c8d8e40;
        margin-bottom: 40px;
        color: #FFF;
        line-height: 80px;
        user-select: none

        .icon {
          width:80px;
          height:80px;
          display: inline-block;
          vertical-align: top;
          margin-left: 10px;
          margin-right: 20px;
          background-image: url("../.././assets/image/icons_message.png");
          background-size: cover;
        }

        .seconds {
          font-size: 28px;
          font-family: NotoSansUI-Regular,NotoSansUI;
          display: inline-block;
          vertical-align: middle;
        }
      }

      .messages {
        .content:nth-last-of-type(1) {
          margin-bottom: 60px;
        }
      }
    }

    .van-popup--bottom {
      overflow: hidden;
      .clear, .cancle{
        height: 100px;
        font-size: 32px;
        color: #FFF;
        font-family:NotoSansHans-Regular,NotoSansHans;
        text-align: center;
        line-height: 100px;
        letter-spacing: 2px;
      }

      .clear {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
    }
  }
</style>

<script>
import 'vant/lib/Popup/style'
import { Popup } from 'vant'
import BreadNav from '@/components/common/BreadNav'

export default {
  components: {
    BreadNav,
    'van-popup': Popup,
  },

  data () {
    return {
      loop: null,
      isShow: false,
      parentIndex: 0,
      selectedID: 0,
      breadData: {
        name: '留言板',
        url: '/'
      },
      messages: [{
        month: '1月7日',
        time: '08:21',
        content: [{
          id: 1,
          voice: '',
          seconds: 60
        },{
          id: 2,
          voice: '',
          seconds: 30
        },{
          id: 3,
          voice: '',
          seconds: 40
        }]
      }, {
        month: '1月5日',
        time: '18:54',
        content: [{
          id: 4,
          voice: '',
          seconds: 44
        },{
          id: 5,
          voice: '',
          seconds: 50
        }]
      }, {
        month: '1月5日',
        time: '18:54',
        content: [{
          id: 7,
          voice: '',
          seconds: 23
        }]
      }]
    }
  },

  methods: {
    getItemWidth (seconds) {
      return `${parseInt(680 * (+ seconds) / 60)}px`
    },

    showDeleteButton (parentIndex, selectedID) {
      this.isShow = false
      clearTimeout(this.loop)
      this.loop = setTimeout(() => {
        this.isShow = true
        this.selectedID = selectedID
        this.parentIndex = parentIndex
      }, 1000)
    },

    emptyTime () {
      clearTimeout(this.loop)
    },

    clearMessage () {
      const datas = this.messages[this.parentIndex].content.filter(item => item.id !== this.selectedID)
      this.messages[this.parentIndex].content = datas
      this.isShow = false
    }
  }
}
</script>
