<template>
	<div class="home">
		home
	</div>
</template>

<script>
	import ripple from '@/components/ripple'
	export default {
		name: 'home',
		data(){
			return {
				
			}
		},
		components: {
			ripple
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		width: 90%;
		max-width: 900px;
		margin: 50px auto 0;
		background: white;
		box-shadow: 0 2px 2px rgba(10,16,20,.24), 0 0 2px rgba(10,16,20,.12);
		font-size: 0.8rem;
		padding: 10px;
	}
</style>
	