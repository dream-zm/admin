import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/'
import HomeIndex from '../pages/home/'
Vue.use(Router)

export default new Router({
  routes: [{
    	path: '/',
      name: 'LoginIndex',
      component: Login
    }, {
      path: '/home',
      name: 'HomeIndex',
      component: HomeIndex
    }
  ]
})
