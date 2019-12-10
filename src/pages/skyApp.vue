<template>
  <div class="sky-app-page">
    <bread-nav :bread-data="breadData"></bread-nav>
    <div class="device">
      <div class="item">
        <span class="name">电烤箱</span>
        <span class="status">离线</span>
        <img class="icon" :src="systemIcon" alt="icon"/>
      </div>

      <div class="item">
        <span class="name">电烤箱</span>
        <span class="status">离线</span>
        <img class="icon" :src="systemIcon" alt="icon"/>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .sky-app-page {
    font-size: 0;
    .device {
      padding: 20px 30px;

      .item {
        width: 320px;
        height: 160px;
        background:rgba(255,255,255,0.05);
        position: relative;
        display: inline-block;
        margin-right: 20px;

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
          color:rgba(108,110,122,1);
          position: absolute;
          bottom: 30px;
          left: 20px;

          &:before {
            width: 4px;
            height: 4px;
            content: ''
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
      systemIcon
    }
  },

  created () {
    console.log('-----created------')
  }
}
</script>
