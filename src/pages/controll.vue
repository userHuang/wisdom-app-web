<template>
  <div class="controll-page">
    <div class="shortcut-item">
      <span class="item" :class="{'active': item.isOpened}" v-for="(item, index) in getData()" :key="item.src" @click="changeStatus(index)">
        <span class="icon"></span>
      </span>
    </div>
    <div class="brightness">
      <img :src="brightnessIcon" alt="icon"/>
      <van-slider
        v-model="brightValue"
        bar-height="100px"
        @input="brightChange"
      />
    </div>
    <div class="volume">
      <img :src="getVolumeIcon"  alt="icon"/>
      <van-slider
        v-model="volumeValue"
        bar-height="100px"
        @input="volumeChange"
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

        .icon {
          width: 100px;
          height: 100px;
          display: inline-block;
        }

        &:last-child {
          margin-right: 0px;
        }
      }
      .active {
        background:rgba(255,161,48,1);
      }

      .item:nth-of-type(1) {
        .icon {
          background-image: url(".././assets/image/dnd.png");
          background-size: cover;
        }
      }
      .item:nth-of-type(2) {
        .icon {
          background-image: url(".././assets/image/bluetooth.png");
          background-size: cover;
        }
      }
      .item:nth-of-type(3) {
        .icon {
          background-image: url(".././assets/image/network.png");
          background-size: cover;
        }
      }
      .item:nth-of-type(4) {
        .icon {
          background-image: url(".././assets/image/home.png");
          background-size: cover;
        }
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
          opacity: 0.5;
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
      }
    }

    .brightness {
      margin-top: 80px;
      margin-bottom: 40px;
    }
  }
</style>

<script>
import 'vant/lib/Slider/style'
import { Slider } from 'vant'
import { mapGetters, mapActions } from 'vuex'
import CloseIcon from '@/components/common/CloseIcon'
import brightnessIcon from '@/assets/image/brightness.png'
import volumeIcon from '@/assets/image/volume.png'
import unVolumeIcon from '@/assets/image/unVolume.png'

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
      unVolumeIcon,
      datas: [{
        isOpened: false,
        name: 'dnd'
      }, {
        isOpened: true,
        name: 'bluetooth'
      }, {
        isOpened: true,
        name: 'network'
      }, {
        isOpened: false,
        name: 'home'
      }],
      brightValue: 20,
      volumeValue: 0,
      isUpdateBright: true,
      isUpdateVolume: true
    }
  },

  computed: {
    ...mapGetters('controll', ['getControllValue']),

    getVolumeIcon () {
      return this.volumeValue === 0 ? this.unVolumeIcon : this.volumeIcon 
    }
  },

  methods: {
    ...mapActions('controll', ['updateStatus']),

    changeStatus (index) {
      this.datas.forEach((item, i) => {
        if (index === i) {
          item.isOpened = !item.isOpened
          this.valueUpdate(item.name, item.isOpened)
        }
      })
    },

    brightChange () {
      // 节流处理滑动值改变
      if (!this.isUpdateBright) {
        return
      }
      this.isUpdateBright = false
      this.brightTimer && clearTimeout(this.brightTimer)
      this.brightTimer = setTimeout (() => {
        this.isUpdateBright = true
        this.valueUpdate('bright', this.brightValue)
      }, 300)
    },

    volumeChange () {
      // 节流处理滑动值改变
      if (!this.isUpdateVolume) {
        return
      }
      this.isUpdateVolume = false
      this.volumeTimer && clearTimeout(this.volumeTimer)
      this.volumeTimer = setTimeout (() => {
        this.isUpdateVolume = true
        this.valueUpdate('volume', this.volumeValue)
      }, 300)
    },

    valueUpdate (name, value) {
      // 存储值到store
      this.updateStatus({name, value})
    },

    getData () {
      const data = this.getControllValue()
      this.datas.forEach(item => {
        item.isOpened = data[item.name] || false
      })
      return this.datas
    }
  }
}
</script>
