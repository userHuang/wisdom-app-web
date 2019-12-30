<template>
  <div class="home-page">
    <Swiper :autoPlay='false' :targetIndex="targetIndex" @transtionend="transtionend" :key="menuKey">
      <Slide class="slide-one" v-if="currentCardComponent">
        <component v-bind:is="currentCardComponent"></component>
      </Slide>
      <Slide class="slide-two">
        <home-card></home-card>
      </Slide>
      <Slide class="slide-three">
        <message-card></message-card>
      </Slide>
    </Swiper>
  </div>
</template>

<style lang="stylus" scoped>
  .home-page {
    height: calc(100% - 60px)

    /deep/ .wh_content {
      height: 100%;

      .wh_swiper {
        height: 100%;
      }

      .wh_indicator {
        bottom: 24px;
        height: 36px;
        line-height: 36px;
        
        .wh_indicator_item {
          vertical-align: middle;
          width: 16px;
          height: 16px;
          background:rgba(153,153,153,0.3);
          margin: 0px 12px;
        }

        .wh_show_bgcolor {
          background: #FFF;
        }
      }
    }
  }
</style>

<script>
import Swiper from '@/components/common/Swiper'
import Slide from '@/components/common/Slide'
import HomeCard from '@/components/home/homeCard'
import MessageCard from '@/components/home/MessageCard'
import Service from '@/services/contract'
import { mapGetters, mapActions, mapState } from 'vuex'
import LampblackMachine from '@/components/device/lampblackMachine'
import ConnectLoad from '@/components/device/connectLoad'

export default {
  name: 'Home',

  components: {
    Swiper,
    Slide,
    HomeCard,
    MessageCard,
    LampblackMachine,
    ConnectLoad
  },

  data () {
    return {
      targetIndex: 1,
      currentCardComponent: '',
      menuKey:1
    }
  },

  created () {
    this.targetIndex = this.$route.query.id || 1
    // this.init()
  },

  computed: {
    // 通过vuex获取数据
    // ...mapGetters('ceshi', ['getVoiceprompt']), //单独模块的vuex获取
    ...mapState({ getCurrentDevice: state => state.app.currentDevice }) //通用公共vuex获取
  },

  watch: {
    getCurrentDevice (newData, oldData) {
      if (newData.deviceName !== oldData.deviceName) {
        this.currentCardComponent = newData.deviceName
        this.targetIndex = 1
        this.menuKey += 1
        const id = + this.$route.query.id
        if (id !== 1) {
          this.$router.push({
            path: '/',
            query: { id: 1 }
          })
        }
      }
    }
  },

  methods: {
    // 存储数据到store
    // ...mapActions('ceshi', ['getList']),

    // async init () {
    //   // 直接调接口
    //   const res = await Service.getDetail({
    //     key: 'voiceprompt'
    //   })

    //   // 通过vuex存储数据
    //   this.getList({
    //     key: 'voiceprompt'
    //   })
    // },
    transtionend (index) {
      const curIndex = index + 1
      const id = this.$route.query.id
      // 当前页滑动判断
      if (id && + id === curIndex) {
        return
      }
      // 进入详情后返回判断
      if (this.targetIndex === curIndex) {
        return
      }
      this.targetIndex = curIndex
      this.$router.push({
        path: '/', 
        query: {id: curIndex}
      })
    }
  }
}
</script>
