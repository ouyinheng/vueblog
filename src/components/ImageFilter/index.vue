<template>
  <div class="image-filter">
    <div v-for="(item, index) in list" :key="index" class="img-card">
      <div class="img-item" v-for="(item1, index1) in 12" :key="index1">
        <img :src="item.url" alt="img">
      </div>
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
    .image-filter::-webkit-scrollbar {
        display: none;
    }
    .img-card {
      margin-bottom: 80px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .img-item {
        display: inline-block;
        margin-bottom: 20px;
			  box-shadow: 0 2px 2px rgba(10,16,20,.24), 0 0 2px rgba(10,16,20,.12);
        img {
          width: 200px;
        }
        &:nth-of-type(2) img {
          filter: invert(100%);
        }
        &:nth-of-type(3) img {
          filter: grayscale(100%);;
        }
        &:nth-of-type(4) img {
          filter: blur(5px);
        }
        &:nth-of-type(5) img {
          filter: brightness(20%);
        }
        &:nth-of-type(6) img {
          filter: contrast(20%);
        }
        &:nth-of-type(7) img {
          filter: drop-shadow(10px 10px lightblue);
        }
        &:nth-of-type(8) img {
          filter: hue-rotate(100deg);
        }
        &:nth-of-type(9) img {
          filter: opacity(50%);
        }
        &:nth-of-type(10) img {
          filter: saturate(40%);
        }
        &:nth-of-type(11) img {
          filter: sepia(100%);
        }
        &:nth-of-type(12) img {
          filter: url('/static/icon/baseline-3d_rotation-24px.svg');
        }
      }
    }
  }
</style>
