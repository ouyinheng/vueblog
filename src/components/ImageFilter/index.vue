<template>
  <div class="image-filter">
    <div v-for="(item, index) in list" :key="index" class="img-card">
      <img class="img-item" v-for="(item1, index1) in 12" :key="index1" :src="item.url" alt="img">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageFilter',
  props: ['list'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .image-filter {
    .img-card {
      margin-bottom: 80px;
      .img-item {
        display: inline-block;
        width:200px;
        margin-right: 20px;
        margin-bottom: 20px;
			  box-shadow: 0 2px 2px rgba(10,16,20,.24), 0 0 2px rgba(10,16,20,.12);
        &:nth-of-type(2) {
          filter: invert(100%);
        }
        &:nth-of-type(3) {
          filter: grayscale(100%);;
        }
        &:nth-of-type(4) {
          filter: blur(5px);
        }
        &:nth-of-type(5) {
          filter: brightness(20%);
        }
        &:nth-of-type(6) {
          filter: contrast(20%);
        }
        &:nth-of-type(7) {
          filter: drop-shadow(10px 10px lightblue);
        }
        &:nth-of-type(8) {
          filter: hue-rotate(100deg);
        }
        &:nth-of-type(9) {
          filter: opacity(50%);
        }
        &:nth-of-type(10) {
          filter: saturate(40%);
        }
        &:nth-of-type(11) {
          filter: sepia(100%);
        }
        &:nth-of-type(12) {
          filter: url('/static/icon/baseline-3d_rotation-24px.svg');
        }
      }
    }
  }
</style>
