<template>
  <div class="bread-nav-component">
    <router-link :to="`${breadData.url}`">
      <span class="back"></span>
    </router-link>
    <span class="name">{{breadData.name}}</span>
    <div class="controll" v-show="sidebar">
      <span class="share" @click="share">...</span>
      <span class="divide"></span>
      <span class="back-home" @click="backHome">X</span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .bread-nav-component {
    width: 720PX;
    height: 80px;
    line-height: 80px;
    text-align: center;
    color: #FFF;
    font-size: 0px;
    position: relative;

    .back {
      width: 80px;
      height: 80px;
      background: url("../.././assets/image/go_back.png") no-repeat;
      background-size: 80px 80px;
      display: inline-block;
      background-position: center;
      position: absolute;
      left: 20px;
    }

    .name {
      font-weight: 500;
      font-size: 36px;
      vertical-align: top;
    }

    .controll {
      width: 151px;
      display: inline-block;
      border-radius: 30px;
      height: 60px;
      position: absolute;
      right: 25px;
      top: 10px;
      border: 1px solid rgba(67,71,78,1);
      background: rgba(0,0,0,0.1);
      line-height: 60px;

      .share, .back-home {
        width: 75px;
        height: 60px;
        color: #FFF;
        display: inline-block;
        font-size: 20px;
      }
      .share {
        border-radius: 30px 0px 0px 30px;
        float: left;
      }

      .back-home {
        border-radius: 0px 30px 30px 0px;
        float: right;
      }

      .divide {
        width: 1px;
        height: 30px;
        background: rgba(255,255,255,0.15);
        display: inline-block;
        float: left;
        vertical-align: top;
        margin-top: 15px;
      }
    }
  }
</style>

<script>
export default {
  props: {
    breadData: {
      type: Object,
      default: () => {}
    },
    sidebar: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    share () {
      console.log('----share--')
    },
    backHome () {
      console.log('----backHome--')
    }
  }
}
</script>
