import homePage from './home'
import cssPage from './css'
import threePage from './three'
import phonePage from './phone'
import CssRoutes from '@/pages/css/routes.js'
import HomeRoutes from '@/pages/home/routes.js'
import ThreeRoutes from '@/pages/three/routes.js'

const Routes = [{
    path: '/',
    name: 'homePage',
    component: homePage,
  },{
    path: '/css',
    name: 'cssPage',
    component: cssPage,
    meta: {
      title: 'css'
    }
  },{
    path: '/three',
    name: 'threePage',
    component: threePage,
    meta: {
      title: 'three'
    } 
  },{
    path: '/phone',
    name: 'phonePage',
    component: phonePage,
    meta: {
      title: 'phone'
    } 
  },
  ...CssRoutes,
  ...ThreeRoutes,
  ...HomeRoutes]

export default Routes