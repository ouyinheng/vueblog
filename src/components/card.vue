<template>
	<div class="page">
		<div class="card" v-for="(item,index) in list" :key="index" @click="changepages(item.url)" :style="{backgroundImage: 'url(' + item.image + ')', backgroundSize:'auto'}">
			<span class="title">{{item.title}}</span>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'page',
    	props:['list'],
		data(){
			return {
				
			}
		},
		methods: {
			changepages(path) {
				this.$router.push(path)
			}
		}
	}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 800px) {
	.page {
		 width: 100%;
		 .card {
			width: 100%;
			max-width: 900px;
			height: 250px;
			margin: 50px auto 50px;
			background-color: white;
			background-position: center;
			background-size: cover!important;
			background-repeat: no-repeat;
			box-shadow: 0 2px 2px rgba(10,16,20,.24), 0 0 2px rgba(10,16,20,.12);
			font-size: 0.8rem;
			padding: 10px;
			color: white;
			font-size: 1rem;
			position: relative;
			.title {
				position: absolute;
				bottom: 30px;
				left: 50px;
			}
		}
	}
}
@media only screen and (max-width: 800px) {
	.page {
		 width: 100%;
		 .card {
			width: 90%;
			max-width: 900px;
			height: 250px;
			margin: 0 auto 50px;
			background-color: white;
			background-position: center;
			background-size: auto;
			box-shadow: 0 2px 2px rgba(10,16,20,.24), 0 0 2px rgba(10,16,20,.12);
			font-size: 0.8rem;
			padding: 10px;
			color: white;
			font-size: 1rem;
			position: relative;
			.title {
				position: absolute;
				bottom: 30px;
				left: 50px;
			}
		}
	}
}
</style>
	