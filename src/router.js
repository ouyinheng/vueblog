import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/mainPage'
import PagesRoutes from '@/pages/routes.js'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainPage,
      children: [
        ...PagesRoutes
      ]
    }
  ]
})
