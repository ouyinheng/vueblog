let scene = new THREE.Scene();

let width = window.innerWidth;
let height= window.innerHeight;
let one = document.getElementById("one");

let camera = new THREE.PerspectiveCamera(40,width/height,0.1,1000);
var controls = new THREE.DeviceOrientationControls( camera );
camera.position.set(0,10,30);
camera.lookAt(scene.position);

let renderer = new THREE.WebGLRenderer({antialias:true,canvas:one});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(width,height);
renderer.setClearColor(0xF0F0F0);

scene.add(new THREE.AmbientLight(0xffffff));
scene.add(new THREE.PointLight(0xcccccc));

/*load 全景图*/
var texture = new THREE.TextureLoader().load("images/2294472375_24a3b8ef46_o.jpg");
var geometry =  new THREE.SphereGeometry(10,100,100);
var sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xF2F2F2,map:texture,side:THREE.BackSide});
var sphere = new THREE.Mesh( geometry, sphereMaterial );
scene.add(sphere);
sphere.position.set(0,0,0);
sphere.scale.set(10,10,10);
/*load 全景图*/





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
    controls.update();
    requestAnimationFrame(animation)
}
