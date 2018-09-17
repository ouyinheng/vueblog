<template>
  <div class="phone">
    <card :list="list"></card>
  </div>
</template>

<script>
  import card from '@/components/card'
  import list from './list.js'
  export default {
    name: 'phone',
    components: {
      card
    },
    created(){
      list.map(item=>{
				item.image = item.image==null?'/static/images/post-bg-2015.jpg':item.image;
			})
			this.list = list
    }
  }
</script>

<style lang="scss" scoped>
  .phone {
    width: 100%;
  }
</style>
