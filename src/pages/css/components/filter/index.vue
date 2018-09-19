<template>
  <div class="filter">
    <image-filter :list="list"></image-filter>
  </div>
</template>

<script>
import imageFilter from '@/components/ImageFilter';
import data from './data.js';
export default {
  name: 'filter',
  components: {
    imageFilter
  },
  data() {
    return {
      list: []
    }
  },
  created(){
    this.list = data
  }
}
</script>

<style lang="scss" scoped>
  .filter {
    .img {
    }
  }
</style>
