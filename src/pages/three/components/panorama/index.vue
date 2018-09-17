<template>
  <div class="panorama">
    <div class="card" v-for="(item,index) in list" :key="index" >
      <img :src="item.url" :alt="index" @click="getRef(item.url)">
    </div>
    <div :class="[full?'dialog':'hide-dialog']">
      <canvas :class="[full?'full':'canvas']" ref="panorama"></canvas>
      <div :class="[full?'close':'close-hide']" @click="change">X</div>
    </div>
  </div>
</template>

<script>
import data from './data.js';
export default {
  name: 'panorama',
  data(){
    return {
      full: false,
      list:[]
    }
  },
  methods: {
    getRef(url){
      this.full = true
      const one = this.$refs.panorama
      var scene = new THREE.Scene();
      var width = window.innerWidth;
      var height= window.innerHeight;

      var camera = new THREE.PerspectiveCamera(40,width/height,0.1,1000);
      camera.position.set(0,10,50);
      camera.lookAt(0,0,0);

      var renderer = new THREE.WebGLRenderer({antialas:true,canvas:one});
      renderer.setSize(width,height)
      renderer.setClearColor(0x000000);

      var texture = new THREE.TextureLoader().load(url);
      var geometry =  new THREE.SphereGeometry(10,100,100);
      if(window.screen.width <= 800){
        var controls = new THREE.DeviceOrientationControls( camera );
      } else {
        var control = new THREE.OrbitControls(camera,one);
        control.addEventListener("change",render)
      }

      var sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xF2F2F2,map:texture,side:THREE.BackSide});
      var sphere = new THREE.Mesh( geometry, sphereMaterial );
      scene.add(sphere);
      sphere.position.set(0,0,0);
      sphere.scale.set(10,10,10);
      render();
      window.addEventListener("resize",onWindowResize,false)
      animation();
      function onWindowResize(){
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize( window.innerWidth, window.innerHeight );
      }
      function render(){
          renderer.render(scene,camera);
      }
      function animation(){
          render();
          if(window.screen.width <= 800){
            controls.update();
          }
          requestAnimationFrame(animation)
      }
    },
    change(){
      this.full = false
    }
  },
  created(){
    console.log(data)
    this.list = data;
  }
}
</script>

<style lang="scss" scoped>
.panorama {
  width: 100%;
  .card {
    box-sizing: border-box;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 2px rgba(10,16,20,.24), 0 0 2px rgba(10,16,20,.12);
    font-size: 0.8rem;
    padding: 10px;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 300px;
    }
  }
 
  .dialog {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: gainsboro;
    top: 0;
    left: 0;
    transition: all .5s;
  }
  .hide-dialog {
    position: fixed;
    width: 0;
    height: 0;
    overflow: hidden;
    background: gainsboro;
    top: 0;
    left: 0;
    transition: all .5s;
  }
  .close {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.4);
    color: #fff;
    text-align: center;
    position: fixed;
    top: 30px;
    right: 40px;
    font-size: 20px;
    cursor: pointer;
  }
  .close-hide {
    display: none;
  }
}
</style>
