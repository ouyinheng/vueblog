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

<style lang="scss" scoped>
@media screen and (max-width: 800px) {
  .mainpage {
    display: flex;
    height: 100%;
    .aside {
      display: none;
      li {
        span {
          display: none;
        }
      }
    }
    .show {
      width: 320px;
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
        display: none;
      }
      .menu2 {
        display: inline-block;
        position: fixed;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: white;
        background-color:var(--md-theme-demo-light-accent,#ff5252);
        border-radius: 50%;
        box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
        bottom: 50px;
        right: 20px;
        padding: 10px;
        font-size: 1.2rem;
        z-index: 10;
      }
      .vh {
        transform: rotate(90deg);
        transition: all .5s;
      }
      .wh {
        transition: all .5s;
      }
    }
  }
}
@media only screen and (min-width: 800px) {
  .slide-fade-enter-active {
		transition: all .3s ease;
	}
	.slide-fade-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active for below version 2.1.8 */ {
		opacity: 0;
	}
  .mainpage {
    display: flex;
    height: 100%;
    .aside {
      width: 320px;
      background: white;
      box-shadow: 0 2px 2px rgba(10,16,20,.24), 0 0 2px rgba(10,16,20,.12);
      overflow: hidden;
      &-header {
        width: 100%;
        min-height: 200px;
        height: 30%;
        max-height: 280px;
        background-color: lightgrey;
        background-image: url('/static/images/424211.jpg');
        background-size: auto;
        background-position: -600px -110px;
        background-repeat: no-repeat;
        filter: invert(35%);
        transition: all .5s;
        cursor: pointer;
        &:hover {
          transition: all .5s;
          background-position: -600px -10px;
          // background-size: cover;
          filter: invert(10%);
        }
      }
      &-section {
        width: 100%;
        overflow-x: hidden;
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
      width: 320px;
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
      .router {
        width: 90%;
        max-width: 900px;
        margin: 50px auto 50px;
      }
      .menu {
        display: inline-block;
        position: fixed;
        top: 50px;
        left: 20px;
        padding: 10px;
        z-index: 10;
        cursor: pointer;
      }
      .menu2 {
        display: none;
      }
      .vh {
        transform: rotate(90deg);
        transition: all .5s;
        left: 300px;
      }
      .wh {
        transition: all .5s;
      }
    }
  }
}
</style>
