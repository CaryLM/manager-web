import Vue from 'vue'
import Router from 'vue-router'
import ManagerInterface from '../components/manager-interface'
import Login from '../components/login'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path:'/',
      component:Login,
    },
    {
      path:'/ManagerInterface',
      name:'ManagerInterface',
      component:ManagerInterface,
    }
  ]
})
