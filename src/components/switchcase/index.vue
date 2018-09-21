<template>
  <div class="on-off">
    <div :class="[onoff?'onoff':'switch']" @click="off">
      <span :class="[onoff?'case1':'case']"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'oyhCase',
  data() {
    return {
      onoff: false
    }
  },
  methods: {
    off() {
      this.onoff = !this.onoff
    }
  }
}
</script>

<style lang="scss" scoped>
.on-off {
  .switch {
    width: 55px;
    height: 26px;
    border-radius: 13px;
    background: rgb(19, 206, 102);
    border-color: rgb(19, 206, 102);
    position: relative;
    transition: all .3s;
    .case {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: inline-block;
      background-color: white;
      position: absolute;
      top: 3px;
      left: 4px;
      transition: all 1s;
    }
  }
  .onoff {
    width: 55px;
    height: 26px;
    border-radius: 13px;
    background: rgb(255, 73, 73);
    border-color: rgb(255, 73, 73);
    position: relative;
    transition: all .3s;
    .case1 {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: inline-block;
      background-color: white;
      position: absolute;
      top: 3px;
      right: 4px;
      transition: all 1s;
    }
  }
}
</style>
