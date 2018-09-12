import homePage from './home'
import cssPage from './css'
import threePage from './three'
import phonePage from './phone'
import CssRoutes from '@/pages/css/routes.js'
const Routes = [{
    path: '/',
    name: 'homePage',
    component: homePage,
    children:[]
  },{
    path: '/css',
    name: 'cssPage',
    component: cssPage,
    children:[,
      ...CssRoutes
    ]
  },{
    path: '/three',
    name: 'threePage',
    component: threePage 
  },{
    path: '/phone',
    name: 'phonePage',
    component: phonePage 
}]

export default Routes