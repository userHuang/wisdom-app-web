<template>
  <div class="no-content-component">
    <div class="img"></div>
    <div class="tips">空空如也</div>
  </div>
</template>

<style lang="stylus" scoped>
  .no-content-component {
    position: absolute;
    width: 200px;
    height: 200px;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: auto;

    .img {
      width: 100%;
      height: 100%;
      background-image: url('../.././assets/image/no_content.png');
      background-size: cover;
    }

    .tips {
      font-size: 24px;
      text-align: center;
      color: rgba(108,110,122,1);
      line-height: 36px;
    }
  }
</style>
