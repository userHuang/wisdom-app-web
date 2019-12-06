<template>
  <div class="home-page">
    <Swiper :autoPlay='false'>
      <Slide class="slide-one">
        <home-card></home-card>
      </Slide>
      <div @touchstart="s" @touchmove="m" @touchend="e">
        <Slide class="slide-two"  >
          <message-card></message-card>
        </Slide>
      </div>
      <Slide class="slide-three">
        3
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

export default {
  name: 'Home',

  components: {
    Swiper,
    Slide,
    HomeCard,
    MessageCard
  },

  data () {
    return {
      text: 'Home'
    }
  },

  created () {
    console.log('-----created------')
  },

  methods: {
    s () {
      console.log('touchstart')
    },

    m (e) {
      console.log('m')
    },

    e () {
      console.log('touchend')
    }
  }
}
</script>
