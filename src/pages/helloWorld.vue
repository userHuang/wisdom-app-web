<template>
  <div class="hello-world-page">
    <div class="float-btn" id="moveDiv" ref="moveDiv"
      @mousedown="down" @touchstart="down"
      @mousemove="move" @touchmove="move"
      @mouseup="end" @touchend="end"
    >11
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .hello-world-page {
    color: red;

    .float-btn {
      height: 4.5rem;
      width: 4.5rem;
      z-index: 99999;
      position: fixed;
      top: 4.2rem;
      right: 3.2rem;
      border-radius: 0.8rem;
      background-color: rgba(0, 0, 0, 0.55);
    }
  }
</style>

<script>
export default {
  name: 'HelloWorld',

  data () {
    return {
      flags: false,
      position: { x: 0, y: 0 },
      nx: '', ny: '', dx: '', dy: '', xPum: '', yPum: ''
    }
  },

  methods: {
    down () {
      this.flags = true;
      const touch = event.touches ? event.touches[0] : event
      this.position.x = touch.clientX
      this.position.y = touch.clientY
      const moveDiv = this.$refs.moveDiv
      this.dx = moveDiv.offsetLeft
      this.dy = moveDiv.offsetTop
    },
    move () {
      if(this.flags){
        const touch = event.touches ? event.touches[0] : event
        this.nx = touch.clientX - this.position.x
        this.ny = touch.clientY - this.position.y
        this.xPum = this.dx + this.nx
        this.yPum = this.dy + this.ny
        const moveDiv = this.$refs.moveDiv
        moveDiv.style.left = this.xPum + 'px'
        moveDiv.style.top = this.yPum  + 'px'
        //阻止页面的滑动默认事件
        document.addEventListener('touchmove', function () { // 1.2 如果碰到滑动问题，请注意是否获取到 touchmove
          event.stopPropagation();
        },false)
      }
    },
    //鼠标释放时候的函数
    end () {
      this.flags = false
    }
  }
}
</script>
