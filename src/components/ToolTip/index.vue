<template>
  <div class="tip">
    <span class="tip-s"></span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ToolTip'
}
</script>

<style lang="scss" scoped>
.tip {
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  .tip-s {
    position: absolute;
    
  }
}
</style>

