<template>
  <div class="panorama">
    <div>
      <button @click="getRef">click</button>
    </div>
    <canvas id="panorama" ref="panorama"></canvas>
  </div>
</template>

<script>
export default {
  name: 'panorama',
  data(){
    return {

    }
  },
  methods: {
    getRef(){
      // const one = this.$refs.panorama
      // console.log(panorama);
      var one = document.getElementById("panorama");
      var scene = new THREE.Scene();
      var width = window.innerWidth;
      var height= window.innerHeight;

      var camera = new THREE.PerspectiveCamera(40,width/height,0.1,1000);
      camera.position.set(0,10,50);
      camera.lookAt(0,0,0);

      var renderer = new THREE.WebGLRenderer({antialas:true,canvas:one});
      renderer.setSize(width,height)
      renderer.setClearColor(0x000000);

      var texture = new THREE.TextureLoader().load("/static/images/2294472375_24a3b8ef46_o.jpg");
      var geometry =  new THREE.SphereGeometry(10,100,100);

      var sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xF2F2F2,map:texture,side:THREE.BackSide});
      var sphere = new THREE.Mesh( geometry, sphereMaterial );
      scene.add(sphere);
      sphere.position.set(0,0,0);
      sphere.scale.set(10,10,10);
      render();
      animation();
      function render(){
          renderer.render(scene,camera);
      }
      function animation(){
          render();
          requestAnimationFrame(animation)
      }
      var control = new THREE.OrbitControls(camera,one);
      control.addEventListener("change",render)
    }
  },
  created(){
  }
}
</script>

<style lang="scss" scoped>
.panorama {
  background-color: #fff;
  box-shadow: 0 2px 2px rgba(10,16,20,.24), 0 0 2px rgba(10,16,20,.12);
  font-size: 0.8rem;
  padding: 10px;
  #panorama {
    width: 500px;
    height: 400px;
    background: gainsboro;
    display: block;
  }
}
</style>
