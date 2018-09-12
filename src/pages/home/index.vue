<template>
	<div class="home">
		<div class="card" v-for="(item,index) in list" :key="index" @click="changepages(item.url)" :style="{backgroundImage: 'url(' + item.image + ')', backgroundSize:'auto'}">{{item.title}}</div>
	</div>
</template>
<script>
// 

	import list from './list.js'
	import ripple from '@/components/ripple'
	export default {
		name: 'home',
		data(){
			return {
				list: []
			}
		},
		components: {
			ripple
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
		 .card {
			width: 90%;
			max-width: 900px;
			min-height: 300px;
			margin: 50px auto 0;
			background-color: white;
			background-position: center;
			background-size: 100%;
			box-shadow: 0 2px 2px rgba(10,16,20,.24), 0 0 2px rgba(10,16,20,.12);
			font-size: 0.8rem;
			padding: 10px;
			color: white;
			font-size: 1rem;
		}
	}
</style>
	