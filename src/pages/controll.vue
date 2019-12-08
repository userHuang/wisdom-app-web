<template>
  <div class="controll-page">
    <div class="shortcut-item">
      <span class="item" v-for="item in datas" :key="item.src">
        <img :src="item.src" alt="icon" />
      </span>
    </div>
    <div class="brightness">
      <img :src="brightnessIcon"  alt="icon"/>
    </div>

    <div class="volume">
      <img :src="volumeIcon"  alt="icon"/>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  #app {
    background: linear-gradient(135deg,rgba(77,84,93,1) 0%,rgba(25,29,35,1) 100%);
  }
  .controll-page {
    height: 100%;
    color: #FFF;
    font-weight: 400;
    overflow: hidden;
    font-size: 0;
    padding: 70px;

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
    }

    .brightness, .volume {
      width: 580px;
      height: 100px;
      background:rgba(255,255,255,0.05);
      position: relative;

      img {
        position: absolute;
        width: 96px;
        height: 96px;
      }
    }

    .brightness {
      margin-top: 80px;
      margin-bottom: 40px;
    }
  }
</style>

<script>
import bluetoothIcon from '@/assets/image/bluetooth.png'
import dndIcon from '@/assets/image/dnd.png'
import homeIcon from '@/assets/image/home.png'
import networkIcon from '@/assets/image/network.png'
import brightnessIcon from '@/assets/image/brightness.png'
import volumeIcon from '@/assets/image/volume.png'

export default {
  name: 'Controll',

  data () {
    return {
      brightnessIcon,
      volumeIcon,
      datas: [{
        src: dndIcon
      }, {
        src: bluetoothIcon
      }, {
        src: networkIcon
      }, {
        src: homeIcon
      }]
    }
  }
}
</script>
