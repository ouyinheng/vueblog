webpackJsonp([1],{"/zym":function(t,e){},D0Ag:function(t,e){},Dgqh:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={};i.d(n,"setHide",function(){return tt});var a={};i.d(a,"setHide",function(){return et});var s=i("IvJb"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var c=i("C7Lr")({name:"App"},r,!1,function(t){i("/zym")},"data-v-ae150328",null).exports,o=i("IHPB"),l=i.n(o),u=i("zO6J"),d=i("4YfN"),m=i.n(d),p=i("9rMa"),f={name:"mainpage",data:function(){return{}},computed:m()({},Object(p.c)({isHide:function(t){return t.home.isHide}})),methods:m()({},Object(p.b)(["setHide"]),{getHide:function(){this.setHide(!this.isHide)},changepages:function(t){this.$router.push("/"+t)}})},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mainpage"},[i("aside",{class:[t.isHide?"show":"hide","aside"]},[i("header",{staticClass:"aside-header"}),t._v(" "),i("section",{staticClass:"aside-section"},[i("ul",{staticClass:"aside-section-menulist"},[i("li",{on:{click:function(e){t.changepages("")}}},[i("img",{attrs:{src:"/static/icon/baseline-home-24px.svg",alt:""}}),t._v(" "),i("span",[t._v("HOME")])]),t._v(" "),i("li",{on:{click:function(e){t.changepages("css")}}},[i("img",{attrs:{src:"/static/icon/baseline-line_style-24px.svg",alt:""}}),t._v(" "),i("span",[t._v("CSS")])]),t._v(" "),i("li",{on:{click:function(e){t.changepages("three")}}},[i("img",{attrs:{src:"/static/icon/baseline-3d_rotation-24px.svg",alt:""}}),t._v(" "),i("span",[t._v("THREE")])]),t._v(" "),i("li",{on:{click:function(e){t.changepages("phone")}}},[i("img",{attrs:{src:"/static/icon/baseline-mobile_screen_share-24px.svg",alt:""}}),t._v(" "),i("span",[t._v("PHONE")])])])])]),t._v(" "),i("div",{staticClass:"section"},[i("span",{class:["iconfont icon-caidan menu",t.isHide?"vh":"wh"],on:{click:t.getHide}}),t._v(" "),i("span",{class:["iconfont icon-add menu2",t.isHide?"vh":"wh"],on:{click:t.getHide}}),t._v(" "),i("div",{staticClass:"router"},[i("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[i("router-view")],1)],1)])])},staticRenderFns:[]};var g=i("C7Lr")(f,h,!1,function(t){i("r963")},"data-v-20bf0d76",null).exports,v=[{url:"/hometest",title:"asdf",intro:"asdf",image:"/static/images/679A459AA71A089EA008819F9C099BEA.jpg"},{url:"asdf",title:"asdf",intro:"asdf",image:"/static/images/75F022F0DFF707BD6D51B05F13DA8EF3.jpg"},{url:"asdf",title:"asdf",intro:"asdf",image:null},{url:"asdf",title:"asdf",intro:"asdf",image:"/static/images/E58F21FC49EECC66CE3A370F77C40C2D.jpg"}],_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page"},t._l(t.list,function(e,n){return i("div",{key:n,staticClass:"card",style:{backgroundImage:"url("+e.image+")",backgroundSize:"auto"},on:{click:function(i){t.changepages(e.url)}}},[i("span",{staticClass:"title"},[t._v(t._s(e.title))])])}))},staticRenderFns:[]};var E=i("C7Lr")({name:"page",props:["list"],data:function(){return{}},methods:{changepages:function(t){this.$router.push(t)}}},_,!1,function(t){i("WTqX")},"data-v-53d3000e",null).exports,C={name:"home",data:function(){return{list:[]}},components:{card:E},methods:{changepages:function(t){this.$router.push(t)}},created:function(){v.map(function(t){t.image=null==t.image?"/static/images/post-bg-2015.jpg":t.image}),this.list=v}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("card",{attrs:{list:this.list}})],1)},staticRenderFns:[]};var w=i("C7Lr")(C,F,!1,function(t){i("wejB")},"data-v-cdb4a748",null).exports,H=[{url:"/Tooltip",title:"Tooltip",intro:"Tooltip",image:"/static/images/679A459AA71A089EA008819F9C099BEA.jpg"},{url:"/filter",title:"ImageFilter",intro:"ImageFilter",image:"/static/images/css/cover/20160621010533_K3EJh.thumb.700_0.jpeg"}],b={name:"css",components:{card:E},created:function(){H.map(function(t){t.image=null==t.image?"/static/images/post-bg-2015.jpg":t.image}),this.list=H}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"css"},[e("card",{attrs:{list:this.list}})],1)},staticRenderFns:[]};var A=i("C7Lr")(b,R,!1,function(t){i("Ng1X")},"data-v-fc913eb4",null).exports,T=[{url:"/panorama",title:"panorama（全景图）",intro:"panorama（全景图）",image:"/static/images/three/cover/]SI}SK2XVMZ461~DUE[XPUX.png"}],j={name:"three",components:{card:E},created:function(){T.map(function(t){t.image=null==t.image?"/static/images/post-bg-2015.jpg":t.image}),this.list=T}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"three"},[e("card",{attrs:{list:this.list}})],1)},staticRenderFns:[]};var x=i("C7Lr")(j,L,!1,function(t){i("mWyS")},"data-v-6bdd1b93",null).exports,$=[{url:"/hometest",title:"asdf",intro:"asdf",image:"/static/images/679A459AA71A089EA008819F9C099BEA.jpg"},{url:"asdf",title:"asdf",intro:"asdf",image:"/static/images/75F022F0DFF707BD6D51B05F13DA8EF3.jpg"}],k={name:"phone",components:{card:E},created:function(){$.map(function(t){t.image=null==t.image?"/static/images/post-bg-2015.jpg":t.image}),this.list=$}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"phone"},[e("card",{attrs:{list:this.list}})],1)},staticRenderFns:[]};var D=i("C7Lr")(k,y,!1,function(t){i("ppLR")},"data-v-3d1fdb70",null).exports,S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip"},[e("div",{class:"tip-s"},[e("span",[this._v(this._s(this.content))])]),this._v(" "),this._t("default")],2)},staticRenderFns:[]};var B={name:"Tooltip",components:{toolTip:i("C7Lr")({name:"ToolTip",props:["content"],data:function(){return{}}},S,!1,function(t){i("NtFM")},"data-v-156e11e7",null).exports}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Tooltip"},[e("h3",{staticClass:"title"},[this._v("Tooltip")]),this._v(" "),e("section",{staticClass:"section"},[e("tool-tip",{attrs:{content:"adf"}},[e("div",{staticClass:"btn-tip"},[this._v("下")])])],1)])},staticRenderFns:[]};var P=i("C7Lr")(B,M,!1,function(t){i("sKsv")},"data-v-586f2d0f",null).exports,X={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image-filter"},t._l(t.list,function(e,n){return i("div",{key:n,staticClass:"img-card"},t._l(12,function(t,n){return i("div",{key:n,staticClass:"img-item"},[i("img",{attrs:{src:e.url,alt:"img"}})])}))}))},staticRenderFns:[]};var I=[{url:"/static/images/css/filter/966-1F310095053-50.jpg"}],N={name:"filters",components:{imageFilter:i("C7Lr")({name:"ImageFilter",props:["list"],data:function(){return{}}},X,!1,function(t){i("SXcn")},"data-v-5ff434d0",null).exports},data:function(){return{list:[]}},created:function(){this.list=I}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"filters"},[e("image-filter",{attrs:{list:this.list}})],1)},staticRenderFns:[]};var W=[{path:"/Tooltip",name:"Tooltip",component:P,meta:{title:"Tooltip"}},{path:"/filter",name:"Filter",component:i("C7Lr")(N,O,!1,function(t){i("fybL")},"data-v-2cb2fef1",null).exports,meta:{title:"ImageFilter"}}],z={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"test"},[this._v("test")])},staticRenderFns:[]};var q=i("C7Lr")({name:"test"},z,!1,function(t){i("D0Ag")},"data-v-0a870147",null).exports,J=[{path:"hometest",component:q,name:q}],K=[{url:"/static/images/three/img.jpg"},{url:"/static/images/three/img1.jpg"},{url:"/static/images/three/dandelion.jpg"},{url:"/static/images/three/gugong.jpg"},{url:"/static/images/three/yinghua.jpg"},{url:"/static/images/three/jigaung.jpg"}],G={name:"panorama",beforeRouteLeave:function(t,e,i){this.full?(this.full=!1,this.$router.push({path:"three"}),this.$router.push({path:"panorama"})):i()},data:function(){return{full:!1,list:[]}},methods:{getRef:function(t){this.full=!0;var e=this.$refs.panorama,i=new THREE.Scene,n=window.innerWidth,a=window.innerHeight,s=new THREE.PerspectiveCamera(40,n/a,.1,1e3);s.position.set(0,10,50),s.lookAt(0,0,0);var r=new THREE.WebGLRenderer({antialas:!0,canvas:e});r.setSize(n,a),r.setClearColor(0);var c=(new THREE.TextureLoader).load(t),o=new THREE.SphereGeometry(10,100,100);if(window.screen.width<=800)var l=new THREE.DeviceOrientationControls(s);else new THREE.OrbitControls(s,e).addEventListener("change",m);var u=new THREE.MeshBasicMaterial({color:15921906,map:c,side:THREE.BackSide}),d=new THREE.Mesh(o,u);function m(){r.render(i,s)}i.add(d),d.position.set(0,0,0),d.scale.set(10,10,10),m(),window.addEventListener("resize",function(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)},!1),function t(){m();window.screen.width<=800&&l.update();requestAnimationFrame(t)}()},change:function(){this.full=!1}},created:function(){console.log(K),this.list=K}},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"panorama"},[t._l(t.list,function(e,n){return i("div",{key:n,staticClass:"card"},[i("img",{attrs:{src:e.url,alt:n},on:{click:function(i){t.getRef(e.url)}}})])}),t._v(" "),i("div",{class:[t.full?"dialog":"hide-dialog"]},[i("canvas",{ref:"panorama",class:[t.full?"full":"canvas"]}),t._v(" "),i("div",{class:[t.full?"close":"close-hide"],on:{click:t.change}},[t._v("X")])])],2)},staticRenderFns:[]};var V=i("C7Lr")(G,U,!1,function(t){i("Dgqh")},"data-v-cd3fbf92",null).exports,Y=[{path:"panorama",component:V,name:V}],Z=[{path:"/",name:"homePage",component:w},{path:"/css",name:"cssPage",component:A,meta:{title:"css"}},{path:"/three",name:"threePage",component:x,meta:{title:"three"}},{path:"/phone",name:"phonePage",component:D,meta:{title:"phone"}}].concat(l()(W),l()(Y),l()(J));s.a.use(u.a);var Q=new u.a({routes:[{path:"/",component:g,children:[].concat(l()(Z))}]}),tt=function(t,e){(0,t.commit)("setHide",e)},et=function(t,e){t.isHide=e},it={state:{isHide:!1},actions:n,mutations:a};s.a.use(p.a);var nt=new p.a.Store({modules:{home:it},strict:!1});s.a.config.productionTip=!1,new s.a({el:"#app",router:Q,store:nt,components:{App:c},template:"<App/>"}),Q.beforeEach(function(t,e,i){t.meta.title&&(document.title=t.meta.title),i()})},Ng1X:function(t,e){},NtFM:function(t,e){},SXcn:function(t,e){},WTqX:function(t,e){},fybL:function(t,e){},mWyS:function(t,e){},ppLR:function(t,e){},r963:function(t,e){},sKsv:function(t,e){},wejB:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9380293e6a66e2942279.js.map