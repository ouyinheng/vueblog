import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/mainPage'
import HomePage from '@/pages/home'
import cssPage from '@/pages/css'
import threePage from '@/pages/three'
import phonePage from '@/pages/phone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainPage,
      children: [
      	{
      		path: '/',
  		    name: 'HomePage',
          component: HomePage,
          children: [
            {
              path: '/css',
              name: 'cssPage',
              component: cssPage 
            },{
              path: '/three',
              name: 'threePage',
              component: threePage 
            },{
              path: '/phone',
              name: 'phonePage',
              component: phonePage 
            }
          ]
      	}
      ]
    }
  ]
})
