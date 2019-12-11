<template>
  <div class="personal-set-page">
    <bread-nav :bread-data="breadData"></bread-nav>
    <div class="content">
      <div class="personal-info">
        <img class="photo" :src="defaultPhoto" alt="icon"/>
        <span class="name">未登录</span>
      </div>
      <div class="set-item" v-for="item in setDatas" :key="item.name">
        <img class="icon" :src="item.icon" alt="icon"/>
        <span class="name">{{item.name}}</span>
        <img class="arrow" :src="arrow" alt="icon"/>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .personal-set-page {
    font-size: 0;
    .content {
      padding: 30px 30px;
      overflow: scroll;
      margin-right: -10px;
      padding-right: 40px;
      height: 540px;
      color: #FFF;
      font-family: NotoSansHans-Medium,NotoSansHans;
      font-weight: 500;

      .personal-info {
        height: 140px;
        margin-bottom: 40px;
        .photo {
          width: 140px;
          display: inline-block;
          vertical-align: top;
        }

        .name {
          display: inline-block;
          font-size:32px;
          line-height: 140px;
          margin-left: 40px;
        }
      }

      .set-item {
        height: 120px;
        background:rgba(255,255,255,0.05);
        padding-left: 30px;
        padding-right: 20px;
        margin-bottom: 20px;

        .icon {
          width: 60px;
          height: 60px;
          margin-top: 30px;
          display: inline-block;
          vertical-align: top;
        }

        .name {
          display: inline-block;
          font-size: 32px;
          line-height: 120px;
          margin-left: 20px;
        }

        .arrow {
          width: 40px;
          height: 40px;
          float: right;
          margin-top: 40px;
        }
      }
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
