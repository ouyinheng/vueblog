<template>
	<div class="home">
		<aside :class="[isHide?'show':'hide', 'aside']">
		</aside>
		<section class="section">
			<ripple></ripple>
		</section>
	</div>
</template>

<script>
	import ripple from '@/components/ripple'
	import { mapActions, mapState } from 'vuex'
	export default {
		name: 'home',
		data(){
			return {
				
			}
		},
		components: {
			ripple
		},
		computed: {
		    ...mapState({
		      isHide: state => state.home.isHide
		    })
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		display: flex;
		height: 100%;
		.aside {
			width: 250px;
			background: lightgreen;
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
			width: 100%;
			background: skyblue;
		}
	}
</style>
	