<template>
  <div class="controll-page">
    <div class="shortcut-item">
      <span class="item" :class="{'active': item.isOpened}" v-for="(item, index) in datas" :key="item.src" @click="changeStatus(index)">
        <img :src="item.src" alt="icon" />
      </span>
    </div>
    <div class="brightness">
      <img :src="brightnessIcon" alt="icon"/>
      <van-slider
        v-model="brightValue"
        bar-height="100px"
      />
    </div>
    <div class="volume">
      <img :src="volumeIcon"  alt="icon"/>
      <van-slider
        v-model="volumeValue"
        bar-height="100px"
      />
    </div>
    <close-icon></close-icon>
  </div>
</template>

<style lang="stylus" scoped>
  .controll-page {
    height: 590px;
    color: #FFF;
    font-weight: 400;
    overflow: hidden;
    font-size: 0;
    padding: 70px;
    padding-bottom: 0px;

    .shortcut-item {
      .item {
        display: inline-block;
        width: 100px;
        height: 100px;
        border-radius: 100%;
        background:rgba(255,255,255,0.05);
        margin-right: 60px;

        &:last-child {
          margin-right: 0px;
        }

        img {
          width: 100px;
          height: 100px;
        }
      }
      .active {
        background:rgba(255,161,48,1);
      }
    }

    .brightness, .volume {
      width: 580px;
      height: 100px;
      background:rgba(255,255,255,0.05);
      position: relative;

      /deep/ .van-slider {
        border-radius: initial;
        background-color: initial;

        &:before {
          top: 0px;
          bottom: 0px;
          
        }

        .van-slider__bar {
          background: linear-gradient(225deg,rgba(144,148,160,1) 0%,rgba(65,70,77,1) 100%);
        }

        .van-slider__button {
          width: 120px;
          height: 100px;
          box-shadow: none;
          background-color: inherit;
        }
      }

      img {
        position: absolute;
        top: 0px;
        width: 100px;
        height: 100px;
        z-index: 99;
      }
    }

    .brightness {
      margin-top: 80px;
      margin-bottom: 40px;
    }
  }
</style>

<script>
import { Slider } from 'vant'
import CloseIcon from '@/components/common/CloseIcon'
import 'vant/lib/Slider/style'
import bluetoothIcon from '@/assets/image/bluetooth.png'
import dndIcon from '@/assets/image/dnd.png'
import homeIcon from '@/assets/image/home.png'
import networkIcon from '@/assets/image/network.png'
import brightnessIcon from '@/assets/image/brightness.png'
import volumeIcon from '@/assets/image/volume.png'

export default {
  name: 'Controll',

  components: {
    'van-slider': Slider,
    CloseIcon
  },

  data () {
    return {
      brightnessIcon,
      volumeIcon,
      datas: [{
        src: dndIcon,
        isOpened: false
      }, {
        src: bluetoothIcon,
        isOpened: false
      }, {
        src: networkIcon,
        isOpened: false
      }, {
        src: homeIcon,
        isOpened: false
      }],
      brightValue: 20,
      volumeValue: 70
    }
  },

  methods: {
    changeStatus (index) {
      this.datas.forEach((item, i) => {
        if (index === i) {
          item.isOpened = !item.isOpened
        }
      })
    }
  }
}
</script>
