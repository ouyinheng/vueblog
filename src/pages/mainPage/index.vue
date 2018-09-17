<template>
	<div class="mainpage">
		<aside :class="[isHide?'show':'hide', 'aside']">
			<header class="aside-header">

			</header>
			<section class="aside-section">
				<ul class="aside-section-menulist">
					<li @click="changepages('')">
						<img src="/static/icon/baseline-home-24px.svg" alt="">
						<span>HOME</span>
					</li>
					<li @click="changepages('css')">
						<img src="/static/icon/baseline-line_style-24px.svg" alt="">
						<span>CSS</span>
					</li>
					<li @click="changepages('three')">
						<img src="/static/icon/baseline-3d_rotation-24px.svg" alt="">
						<span>THREE</span>
					</li>
					<li @click="changepages('phone')">
						<img src="/static/icon/baseline-mobile_screen_share-24px.svg" alt="">
						<span>PHONE</span>
					</li>
				</ul>
			</section>
		</aside>
		<div class="section">
			<span :class="['iconfont icon-caidan menu', isHide?'vh':'wh']" @click="getHide"></span>
			<span :class="['iconfont icon-add menu2', isHide?'vh':'wh']" @click="getHide"></span>
				<div class="router">
					<transition name="slide-fade" mode="out-in">
						<router-view/>
					</transition>	
				</div>
		</div>
	</div>
</template>

<script>
	import './max.scss'
	import './min.scss'
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
				this.$router.push('/'+path)
			}
		}
	}
</script>