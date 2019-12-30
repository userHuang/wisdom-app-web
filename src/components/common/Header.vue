<template>
  <div class="header-page">
    <div class="time">11:16</div>
    <div class="status-icons">
      <span class="item" v-for="item in icons" :key="item.src" v-show="getStatus(item.name)">
        <img :src="item.src" alt="icon" />
      </span>
      <span class="item">
        <img :src="getVolumeIcon" alt="icon" />
      </span>
      <span class="item">19%</span>
      <span class="item">
        <battery></battery>
      </span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .header-page{
    height: 60px;
    line-height: 60px;
    text-align: left;
    font-size: 0;

    .time{
      display: inline-block;
      font-size: 30px;
      font-weight: 400;
      font-family: DINPro-Regular,DINPro;
      margin-left: 20px;
      color: #b4b9c5;
    }
    
    .status-icons{
      display: inline-block;
      float: right;
      font-size: 0;
      height: 50px;
      padding-top: 10px;
      margin-right: 20px;

      &:after {
        clear: both;
      }

      .item {
        min-width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        display: inline-block;
        margin-left: 14px;
        vertical-align: top;
        font-size: 24px;
        font-family:NotoSansUI-Regular,NotoSansUI;
        color: #B4B9C5FF;

        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
</style>

<script>
import { mapGetters } from 'vuex'
import Battery from '@/components/common/Battery'
import unconnectIcon from '@/assets/image/unconnect_icon.png'
import unvoiceIcon from '@/assets/image/unvoice_icon.png'
import volume from '@/assets/image/volume.png'
import voiceHelperIcon from '@/assets/image/voice_helper.png'

export default {
  name: 'Header',
  components: { Battery },
  data () {
    return {
      volume,
      unvoiceIcon,
      icons: [{
        src: unconnectIcon,
        name: 'network'
      }, {
        src: voiceHelperIcon,
        name: 'bluetooth'
      }],
      voiceIcon: volume
    }
  },

  computed: {
    ...mapGetters('controll', ['getControllValue']),

    getVolumeIcon () {
      const data = this.getControllValue() || { volume: 0 }
      return data.volume === 0 ? this.unvoiceIcon : this.voiceIcon
    }
  },

  methods: {
    getStatus (name) {
      const data = this.getControllValue()
      const value = data[name]
      return value !== undefined ? value : true
    }
  }
}
</script>

