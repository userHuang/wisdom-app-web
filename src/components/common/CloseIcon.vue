<template>
  <div class="colse-component" @click="closed()"></div>
</template>

<style>
  .colse-component {
    position: absolute;
    width: 100px;
    height: 100px;
    background: url("../.././assets/image/closed.png");
    background-size: 100%;
    bottom: 40px;
    left: 50%;
    transform: translate(-50%, 0px);
  }
</style>

<script>
export default {
  methods: {
    closed () {
      this.$router.replace({
        path: '/'
      })
    }
  }
}
</script>
