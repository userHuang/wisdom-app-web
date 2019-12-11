<template>
  <div class="move-btn-component" :class="{'active': flags}" ref="moveDiv"
    @touchstart="down"
    @click="click"
    @touchmove.prevent="move"
    @touchend="end"
  >
    <span class="mid"></span>
    <span class="out"></span>
  </div>
</template>

<style lang="stylus" scoped>
  .move-btn-component {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    z-index: 9999999;
    position: fixed;
    background-color: #979BAA1A;
    left: 625px;
    top: 310px;

    .mid {
      position: absolute;
      display: inline-block;
      height: 80px;
      width: 80px;
      background: #979BAA1A;
      border-radius: 80px;
      text-align: center;
      top: 10px;
      left: 10px;
    }

    .out {
      position: absolute;
      display: inline-block;
      height: 50px;
      width: 50px;
      background: #979BAA80;
      border-radius: 50px;
      text-align: center;
      top: 25px;
      left: 25px;
    }

    &.active {
      .mid {
        background: #979baa4d;
      }
      
      .out {
        background: #ffffffcc;
      }
    }
  }
</style>

<script>
export default {
  data () {
    return {
      flags: false,
      position: { x: 0, y: 0 },
      downX: '',
      downY: ''
    }
  },

  methods: {
    click () {
      console.log('click')
      this.$router.push({
        path: '/controll'
      })
    },
    down () {
      console.log('down')
      this.flags = true;
      const touch = event.touches ? event.touches[0] : event
      this.position.x = touch.clientX
      this.position.y = touch.clientY
      const moveDiv = this.$refs.moveDiv
      this.downX = moveDiv.offsetLeft
      this.downY = moveDiv.offsetTop
    },
    move () {
      if(this.flags){
        const touch = event.touches ? event.touches[0] : event
        const nx = touch.clientX - this.position.x
        const ny = touch.clientY - this.position.y
        const xPum = this.downX + nx
        const yPum = this.downY + ny
        console.log(xPum, yPum)
        if (xPum < -5 || xPum > 625 || yPum < -5 || yPum > 625) {
          return
        }
        const moveDiv = this.$refs.moveDiv
        moveDiv.style.left = xPum + 'px'
        moveDiv.style.top = yPum  + 'px'
        //阻止页面的滑动默认事件
        // document.addEventListener('touchmove', function () { // 1.2 如果碰到滑动问题，请注意是否获取到 touchmove
        //   event.stopPropagation();
        // },false)
      }
    },
    //鼠标释放时候的函数
    end () {
      this.flags = false
    }
  }
}
</script>
