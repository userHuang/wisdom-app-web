<template>
  <div class="num-tips-component" v-show="value > 0">{{getNums}}</div>
</template>

<style>
  .num-tips-component {
    width: 60px;
    height: 40px;
    background: rgba(247,71,60,1);
    border-radius: 25px;
    font-size: 28px;
    color: #FFF;
    font-family: NotoSansUI-Regular,NotoSansUI;
    text-align: center;
    line-height: 40px;
    overflow: hidden;
  }
</style>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    }
  },

  computed: {
    getNums () {
      if (this.value > 9) {
        return '9+'
      } else {
        return this.value
      }
    }
  }
}
</script>
