<template>
  <div class="washing-machine-page">
    <bread-nav :bread-data="breadData" :sidebar="true"></bread-nav>
    <section class="content">
      <div class="time">01:30</div>
      <div class="name">羽绒服</div>
      <div class="status">正在洗涤中</div>
      <span class="child-lock"></span>
    </section>
    <section class="controll-btn">
      <span class="on-off"></span>
      <span class="restart-stop"></span>
      <span class="mode"></span>
    </section>
  </div>
</template>

<style lang="stylus" scoped>
  .washing-machine-page {
    font-size: 0;
    .content {
      font-size: 26px;
      margin: 40px 30px;
      width:660px;
      height:300px;
      background: rgba(0,0,0,0.2);
      overflow: hidden;
      position: relative;

      .time {
        width: 300px;
        font-size: 100px;
        line-height: 100px;
        color: #FFF;
        margin: 0 auto;
        text-align: center;
        margin-top: 46px;
        font-family: DINPro-Regular,DINPro;
        font-weight:400;
      }

      .name {
        width: 300px;
        margin: 0 auto;
        text-align: center;
        font-size:36px;
        line-height: 36px;
        color: #FFF;
        font-family: NotoSansHans-Medium,NotoSansHans;
        margin-top: 20px;
        font-weight: 500;
      }
      
      .status {
        width: 300px;
        font-size: 28px;
        line-height: 32px;
        font-family: NotoSansHans-Regular,NotoSansHans;
        color: #FFA130FF;
        font-weight: 400;
        margin: 0 auto;
        text-align: center;
        margin-top: 20px;
      }

      .child-lock {
        position: absolute;
        display: inline-block;
        width: 40px;
        height: 40px;
        background-image: url("../.././assets/image/device/child_lock.png");
        background-size: 100% 100%;
        top: 30px;
        left: 30px;
      }
    }

    .controll-btn {
      height: 140px;
      overflow: hidden;
      margin-top: 10px;

      .on-off {
        width: 100px;
        height: 100px;
        background: #FFFFFF0D;
        border-radius: 100px;
        margin-left: 90px;
        margin-right: 100px;
        background-image: url("../.././assets/image/device/start.png");
        background-size: 40px 40px;
      }

      .restart-stop {
        width: 140px;
        height: 140px;
        background: #FFFFFF0D;
        border-radius: 140px;
        margin-right: 100px;
        background-image: url("../.././assets/image/device/stop.png");
        background-size: cover;
      }

      .mode {
        width: 100px;
        height: 100px;
        background: #FFFFFF0D;
        border-radius: 100px;
        background-image: url("../.././assets/image/device/washing_type.png");
        background-size: 40px 40px;
      }

      .on-off, .restart-stop, .mode {
        display: inline-block;
        vertical-align: middle;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
</style>

<script>
import BreadNav from '@/components/common/BreadNav'
export default {
  components: {
    BreadNav
  },

  data () {
    return {
      breadData: {
        name: '洗衣机',
        url: '/'
      }
    }
  },

  methods: {
    goDetail (item) {
      console.log(item, '-----')
    }
  }
}
</script>
