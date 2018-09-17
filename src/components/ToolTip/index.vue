<template>
  <div class="tip">
    <div :class="'tip-s'">
      <span>{{content}}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ToolTip',
  props:['content'],
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.tip {
  display: inline-block;
  position: relative;
  &-s {
    display: none;
    padding: 5px 10px;
    font-size: 0.8rem;
    border: 1px solid gainsboro;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    text-align: center;
    position: absolute;
    bottom: -40px;
    &:after {
      content:'';
      width: 0;
      height: 0;
      position: absolute;
      top: -20px;
      left: 10px; 
      border: 10px solid red;
      border-color: transparent transparent #000 transparent;
      z-index: 2;
    }
  }
  &:hover {
    .tip-s {
      display: inline-block;
    }
  }
}
</style>

