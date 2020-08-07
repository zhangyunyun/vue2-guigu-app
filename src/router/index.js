/*
* vue-router 路由管理
* */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Msite from "../views/msite/Msite";
import Search from "../views/search/Search";
import Order from "../views/order/Order";
import Mine from "../views/mine/Mine";

import Login from "../views/login/Login";

import UserInfo from '../views/userInfo/UserInfo'

import Shop from '../views/shop/Shop'
import ShopGood from '../views/shop/shopGoods/ShopGood'
import ShopRating from '../views/shop/shopRatings/ShopRating'
import ShopInfo from '../views/shop/shopInfo/ShopInfo'

const routes = [
  {
    path:'/',
    redirect:'/msite'
  },
  {
    path:'/msite',
    component:Msite,
    meta:{
      Footer:true
    }
  },
  {
    path:'/search',
    component:Search,
    meta:{
      Footer:true
    }
  },
  {
    path:'/order',
    component:Order,
    meta:{
      Footer:true
    }
  },
  {
    path:'/mine',
    component:Mine,
    meta:{
      Footer:true
    }
  },
  {
    path:'/login',
    component:Login,
    meta:{
      Footer:false
    }
  },
  {
    path:'/userInfo',
    component:UserInfo,
    meta:{
      Footer:false
    }
  },
  {
    path:'/shop',
    component:Shop,
    children:[
      {
        path:'/',
        redirect:'/shop/goods'
      },
      {
        path:'/shop/goods',
        component:ShopGood
      },
      {
        path:'/shop/ratings',
        component:ShopRating
      },
      {
        path:'/shop/info',
        component:ShopInfo
      }
    ],
    meta:{
      Footer:false
    }
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass:'on'
})

export default router
