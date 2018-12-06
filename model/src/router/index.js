import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ManagerInterface from '@/components/manager-interface.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/manager-interface',
      name:'manager-interface',
      component:ManagerInterface,
    }
  ]
})
