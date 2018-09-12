<template>
	<div class="mainpage">
		<aside :class="[isHide?'show':'hide', 'aside']">
			<header class="aside-header">

			</header>
			<section class="aside-section">
				<ul class="aside-section-menulist">
					<li @click="changepages('/')">
						<img src="/static/icon/baseline-home-24px.svg" alt="">
						<span>HOME</span>
					</li>
					<li @click="changepages('/css')">
						<img src="/static/icon/baseline-line_style-24px.svg" alt="">
						<span>CSS</span>
					</li>
					<li @click="changepages('/three')">
						<img src="/static/icon/baseline-3d_rotation-24px.svg" alt="">
						<span>THREE</span>
					</li>
					<li @click="changepages('/phone')">
						<img src="/static/icon/baseline-mobile_screen_share-24px.svg" alt="">
						<span>PHONE</span>
					</li>
				</ul>
			</section>
		</aside>
		<div class="section">
			<span :class="['iconfont icon-caidan menu', isHide?'vh':'wh']" @click="getHide"></span>
    		<transition name="slide-fade" mode="out-in">
				<router-view/>
			</transition>
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
			changepages(path) {
				this.$router.push(path)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.slide-fade-enter-active {
		transition: all .1s ease;
	}
	.slide-fade-leave-active {
		transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to {
		transform: translateY(-100px);
		opacity: 0;
	}
	.mainpage {
		display: flex;
		height: 100%;
		.aside {
			width: 250px;
			background: white;
			box-shadow: 0 2px 2px rgba(10,16,20,.24), 0 0 2px rgba(10,16,20,.12);
			overflow: hidden;
			&-header {
				width: 100%;
				min-height: 200px;
				height: 30%;
				max-height: 250px;
				background-color: lightgrey;
				background-image: url('/static/images/shenwei.jpg');
				background-position: center;
				background-size: auto;
				background-repeat: no-repeat;
				filter: invert(35%);
				transition: all .5s;
				cursor: pointer;
				&:hover {
					transition: all .5s;
					background-position: bottom;
					filter: invert(10%);
				}
			}
			&-section {
				width: 100%;
				&-menulist {
					font-family: 'Material Icons';
					font-weight: normal;
					li {
						padding: 10px 0;
						display: flex;
						align-items: center;
						cursor: pointer;
						span {
							display: inline-block;
							padding: 0 10px;
							font-size: 0.8rem;
						}
						img {
							padding: 0 10px;
						}
						&:hover {
							background: rgba(10,16,20,.12)
						}
					}
				}
			}
		}
		.show {
			width: 300px;
			transition: all .5s;
		}
		.hide {
			width: 0;
			transition: all .5s;
		}
		.section {
			box-sizing: border-box;
			position: relative;
			width: 100%;
			height: 100%;
			padding: 50px 0;
			overflow-y: auto;
			.menu {
				display: inline-block;
				position: fixed;
				top: 50px;
				left: 20px;
				padding: 10px;
				z-index: 10;
				cursor: pointer;
			}
			.vh {
				transform: rotate(90deg);
				transition: all .5s;
				left: 250px;
			}
			.wh {
				transition: all .5s;
			}
		}
	}
</style>