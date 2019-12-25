<template>
  <div class="connect-load-page">
    <section>
      <div class="loading">
        <span class="img"></span>
      </div>
      <div class="circle"></div>
    </section>
    <div class="title">
      设备连接中...
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .connect-load-page {
    font-size: 0;
    position: relative;
    overflow: hidden;

    .loading {
      width: 308px;
      height: 308px;
      border-radius: 160px;
      background: rgba(216,216,216,0);
      border: 6px solid rgba(111, 109, 106, 0.06);
      margin: 110px 200px 0 200px;
      position: relative;
      z-index: 9;

      .img {
        width:200px;
        height:100px;
        background-image: url("../.././assets/image/device/connect_load.png");
        background-size: cover;
        display: inline-block;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
    }

    .circle {
      position: absolute;
      top: 110px;
      left: 200px;
      width: 320px;
      height: 320px;
      border-radius: 160px;
      animation: clockwise 2s linear infinite;
      box-shadow: 4px 6px 0 rgba(255, 161, 48, 0.3) inset;
    }

    @keyframes clockwise{
      from { 
        transform: rotate(0deg)
      }
      to {
        transform: rotate(360deg)
      }
    }

    .title {
      height: 40px;
      font-size: 32px;
      margin-top: 40px;
      font-family: NotoSansHans-Medium,NotoSansHans;
      font-weight: 500;
      text-align: center;
      color: rgba(255,255,255,1);
      letter-spacing: 5px;
    }
  }
</style>
