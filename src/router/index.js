import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index'
import About from '../components/about/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
