import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/mainPage'
import HomePage from '@/pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      children: [
      	{
      		path: '/',
  		    name: 'HomePage',
  		    component: HomePage 
      	}
      ]
    }
  ]
})
