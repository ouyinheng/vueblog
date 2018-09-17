<template>
	<div class="home">
		<card :list="list">

		</card>
	</div>
</template>
<script>
	import list from './list.js'
	import card from '@/components/card'
	export default {
		name: 'home',
		data(){
			return {
				list: []
			}
		},
		components: {
			card
		},
		methods: {
			changepages(path) {
				this.$router.push(path)
			}
		},
		created() {
			list.map(item=>{
				item.image = item.image==null?'/static/images/post-bg-2015.jpg':item.image;
			})
			this.list = list
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		 width: 100%;
	}
</style>
	