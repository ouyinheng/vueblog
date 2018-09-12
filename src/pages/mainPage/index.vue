<template>
	<div class="mainpage">
		<header class="header">
			<span class="iconfont icon-category menu" @click="getHide(event)"></span>
			<div></div>
		</header>
		<div class="section">
    	<router-view/>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapState } from 'vuex'
	export default {
		name: 'mainpage',
		data(){
			return {
				
			}
		},
		computed: {
		    ...mapState({
		      isHide: state => state.home.isHide
		    })
		},
		methods: {
			...mapActions(['setHide']),
			getHide(event) {
				this.setHide(!this.isHide);
			}
		}
	}
</script>

<style lang="scss" scoped="">
	.mainpage {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		overflow-y: auto;
		.header {
			width: 100%;
			height: 60px;
			line-height: 60px;
			box-shadow: 0 0 10px rgba(0,0,0,0.4);
			position: fixed;
			top: 0;
			left: 0;
			.menu {
				display: inline-block;
				padding: 0 20px;
				font-size: 25px;
			}
		}
		.section {
			box-sizing: border-box;
			padding-top: 60px;
			height: 100%;
		}
	}
</style>