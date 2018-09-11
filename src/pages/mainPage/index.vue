<template>
	<div class="mainpage">
		<header class="header">
			<span class="iconfont icon-category menu" @click="getHide"></span>
			<div class="header-menu">
				<span @click="changePage('/css')">CSS</span>
				<span @click="changePage('/three')">THREE</span>
				<span @click="changePage('/phone')">PHONE</span>
			</div>
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
			getHide() {
				this.setHide(!this.isHide);
			},
			changePage(path) {
				this.$router.push(path)
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
			display: flex;
			z-index: 10;
			background: #fafafa;
			&-menu {
				padding: 0 10px;
				span {
					display: inline-block;
					margin: 0 10px;
					padding: 0 10px;
					color: #42b983;
					cursor: pointer;
					&:hover {
						background: rgba(0,0,0,0.2);
					}
				}
			}
			.menu {
				display: inline-block;
				padding: 0 20px;
				font-size: 1.3rem;
			}
		}
		.section {
			box-sizing: border-box;
			padding-top: 60px;
			height: 100%;
		}
	}
</style>