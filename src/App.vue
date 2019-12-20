<template>
  <div id="app" :style="homeBg">
    <div class="app-page" :style="coveredBg">
      <move-btn v-show="curPath !== '/controll'"></move-btn>
      <nav-header></nav-header>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
  </div>
</template>

<script>
import vuexStore from './store'
import MoveBtn from '@/components/common/MoveBtn'
import NavHeader from '@/components/common/Header'
import homeBgImage from '@/assets/image/home.jpg'
import coveredImage from '@/assets/image/covered.png'

export default {
  name: 'App',
  components: {
    NavHeader,
    MoveBtn
  },

  store: vuexStore,

  data () {
    return {
      curPath: '',
      homeBg: '',
      coveredBg: '',
      coveredImage,
      route2homeStyle: {
        '/': `background-image: url("${homeBgImage}")`,
        '/common': 'background: linear-gradient(135deg,rgba(77,84,93,1) 0%,rgba(25,29,35,1) 100%)',
      }
    }
  },

  watch: {
    $route (route) {
      this.$nextTick(() => {
        this.curPath = route.path
        this.homeBg = route.path in this.route2homeStyle ? this.route2homeStyle[route.path] : this.route2homeStyle['/common']
        this.coveredBg = route.path === '/' ? `background-image: url("${this.coveredImage}")` : ''
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 720px;
  height: 720px;
  overflow: hidden;
  background-repeat: no-repeat;
}
.app-page{
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
}
</style>
