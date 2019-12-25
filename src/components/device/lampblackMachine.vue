<template>
  <div class="lampblack-machine-page">
    <section>
      <div class="switch btn-style">
        <span class="img"></span>
        <span class="name">开关</span>
      </div>
      <div class="light btn-style">
        <span class="img"></span>
        <span class="name">照明</span>
      </div>
    </section>
    <section class="model">
      <div class="btn-style"
        :class="item.isActive ? `${item.className} active` : `${item.className}`"
        v-for="item in modelDatas"
        :key="item.name"
        @click.prevent="selectModel(item)">
          <span class="img"></span>
          <span class="name">{{item.name}}</span>
      </div>
    </section>
  </div>
</template>

<style lang="stylus" scoped>
  .lampblack-machine-page {
    font-size: 0;
    padding: 80px 60px;

    .btn-style {
      width:180px;
      height:180px;
      border-radius: 180px;
      background: rgba(255,255,255,0.05);
      text-align: center;
      display: inline-block;

      .img {
        width: 56px;
        height: 56px;
        background-image: url("../.././assets/image/device/start.png");
        background-size: 56px 56px;
        display: inline-block;
        vertical-align: middle;
        background-position: center;
        background-repeat: no-repeat;
        margin-top: 42px;
      }

      .name {
        display block
        font-size: 28px;
        font-family: NotoSansHans-Medium,NotoSansHans;
        font-weight: 500;
        color: #FFF;
        margin-top: 18px;
      }
    }

    .light {
      float: right;
    }

    .model {
      width: 600px;
      height: 180px;
      background: rgba(255,255,255,0.05);
      border-radius: 90px;
      margin-top: 80px;

      .weak-winds {
        margin: 0 30px;
      }

      .active {
        background: rgba(255,161,48,1);
      }
    }
  }
</style>

<script>

export default {
  data () {
    return {
      modelDatas: [{
        icon: '',
        name: '强风',
        model: 'high',
        className: 'high-winds',
        isActive: false
      }, {
        icon: '',
        name: '低风',
        model: 'weak',
        className: 'weak-winds',
        isActive: false
      }, {
        icon: '',
        name: '清洗',
        model: 'clean',
        className: 'clean',
        isActive: false
      }]
    }
  },
  methods: {
    selectModel (item) {
      this.modelDatas.forEach(model => {
        model.isActive = model.name === item.name
      })
    }
  }
}
</script>
