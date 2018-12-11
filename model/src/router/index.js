import Vue from 'vue'
import Router from 'vue-router'
import ManagerInterface from '../components/manager-interface'
import DayTradeTotal from '../components/TradeTotal/DayTradeTotal'
import MonthTradeTotal from '../components/TradeTotal/MonthTradeTotal'
import YearTradeTotal from '../components/TradeTotal/YearTradeTotal'
import ManagerOrders from '../components/ManagerOrders'

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
          path:'/ManagerInterface/DayTradeTotal',
          name:'daytradetotal',
          component:DayTradeTotal,
        },{
          path:'/ManagerInterface/MonthTradeTotal',
          name:'monthtradetotal',
          component:MonthTradeTotal,
        },{
          path:'/ManagerInterface/YearTradeTotal',
          name:'yeartradetotal',
          component:YearTradeTotal,
        },{
          path:'/ManagerInterface/ManagerOrders',
          name:'managerorders',
          component:ManagerOrders,
        },
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
