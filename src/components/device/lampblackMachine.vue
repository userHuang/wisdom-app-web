<template>
  <div class="lampblack-machine-page">
    <section>
      <div class="switch btn-style">
        <span class="img"></span>
        <span class="name">开关</span>
      </div>
      <div class="light btn-style">
        <span class="img"></span>
        <span class="name">照明</span>
      </div>
    </section>
  </div>
</template>

<style lang="stylus" scoped>
  .lampblack-machine-page {
    font-size: 0;
    padding: 80px 60px;

    .btn-style {
      width:180px;
      height:180px;
      border-radius: 180px;
      background: rgba(255,255,255,0.05);
      text-align: center;

      .img {
        width: 56px;
        height: 56px;
        background-image: url("../.././assets/image/device/start.png");
        background-size: 56px 56px;
        display: inline-block;
        vertical-align: middle;
        background-position: center;
        background-repeat: no-repeat;
        margin-top: 42px;
      }

      .name {
        display block
        font-size: 28px;
        font-family: NotoSansHans-Medium,NotoSansHans;
        font-weight: 500;
        color: #FFF;
        margin-top: 18px;
      }
    }

    .switch {
      display: inline-block;
    }

    .light {
      display: inline-block;
      float: right;
    }
  }
</style>

<script>
import BreadNav from '@/components/common/BreadNav'
import defaultPhoto from '@/assets/image/default_photo.png'
import netSet from '@/assets/image/net_set.png'
import arrow from '@/assets/image/arrow.png'
import wallpaperSet from '@/assets/image/wallpaper_set.png'
import manageSet from '@/assets/image/manage_set.png'

export default {
  components: {
    BreadNav
  },

  data () {
    return {
      breadData: {
        name: '系统设置',
        url: '/'
      },
      defaultPhoto,
      netSet,
      arrow,
      setDatas: [{
        icon: netSet,
        name: '无线局域网'
      }, {
        icon: wallpaperSet,
        name: '待机壁纸'
      }, {
        icon: manageSet,
        name: '应用管理'
      }, {
        icon: manageSet,
        name: '飞行模式'
      }]
    }
  }
}
</script>
