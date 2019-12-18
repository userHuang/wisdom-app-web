<template>
  <div class="bread-nav-component">
    <span class="back" @click="goBack"></span>
    <span class="name">{{breadData.name}}</span>
    <div class="controll" v-show="sidebar">
      <span class="share" @click="share">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </span>
      <span class="divide"></span>
      <router-link :to="`${closeUrl}`">
        <span class="back-home">
          <span class="icon">+</span>
        </span>
      </router-link>
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
        font-size: 0px;
      }
      .share {
        border-radius: 30px 0px 0px 30px;
        float: left;

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 6px;
          display: inline-block;
          background: #FFF;
          vertical-align: middle;
          margin-right: 5px;
        }

        .dot:nth-child(2) {
          width: 8px;
          height: 8px;
          border-radius: 8px;
        }
        
        .dot:nth-child(3) {
          margin-right: 0px;
        }
      }

      .back-home {
        border-radius: 0px 30px 30px 0px;
        float: right;

        .icon {
          width: 24px;
          height: 24px;
          display: inline-block;
          line-height: 24px;
          border-radius: 30px;
          border: 3px solid #FFF;
          font-size: 29px;
          transform: rotate(45deg);
          margin-top: 15px;
        }
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
      default: false
    },
    closeUrl: {
      type: String,
      default: '/'
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    share () {
      console.log('----share--')
    }
  }
}
</script>
