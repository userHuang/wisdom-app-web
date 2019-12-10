<template>
  <div class="bread-nav-component">
    <router-link :to="`${breadData.url}`">
      <span class="back"></span>
    </router-link>
    <span class="name">{{breadData.name}}</span>
  </div>
</template>

<style lang="stylus" scoped>
  .bread-nav-component {
    width: 720PX;
    height: 80px;
    line-height: 80px;
    text-align: center;
    color: #FFF;
    font-size: 0px;

    .back {
      width: 80px;
      height: 80px;
      background: url("../.././assets/image/go_back.png") no-repeat;
      background-size: 80px 80px;
      display: inline-block;
      background-position: center;
      position: absolute;
      left: 20px;
    }

    .name {
      font-weight: 500;
      font-size: 36px;
      vertical-align: top;
    }
  }
</style>

<script>
export default {
  props: {
    breadData: {},
    default: () => {}
  }
}
</script>
