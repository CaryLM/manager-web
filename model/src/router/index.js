import Vue from 'vue'
import Router from 'vue-router'
import ManagerInterface from '../components/manager-interface'
import AvMonthTrade from '../components/avenge-month-trade'

// import Login from '../components/login'
const loginpage=resolve=>require(['@/components/login'],resolve)
Vue.use(Router)


let router=new Router({
  routes: [
    {
      path:'/',
      component:loginpage,
    },
    {
      path:'/login',
      name:'login',
      component:loginpage
    },
    {
      path:'/ManagerInterface',
      name:'ManagerInterface',
      component:ManagerInterface,
      children:[
        {
          path:'/ManagerInterface/AvMonthTrade',
          name:'AvMonthTrade',
          component:AvMonthTrade,
        }
      ]
    },
  ]
})
// router.beforeEach((to,from,next)=>{
//   if(to.path.startsWith('/login')){
//     window.sessionStorage.removeItem('access-token');
//     next();
//   }else{
//     let token=window.sessionStorage.getItem('access-token');
//     if(!token){
//       next({path:'/login'})
//     }else{
//       next()
//     }
//   }
// });
export default router
