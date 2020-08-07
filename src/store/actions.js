/*
*通过mutation间接更新state的多个方法的对象
* */
import {reqAddress,reqFoodList,reqShopList,reqUser,reqLogout,reqShopGoods,reqShopRatings,reqShopInfo} from '../api'
import {RECEIVE_ADDRESS,RECEIVE_FOODLIST,RECEIVE_SHOPLIST,RECEIVE_USERINFO,RESET_USERINFO,RECEIVE_GOODS,RECEIVE_RATINGS,RECEIVE_INFO} from './mutations-type'

export default {
  //异步获取地址信息
  async getAddress({commit,state}){
    const geohash = state.latitude +','+ state.longitude
    const result = await reqAddress(geohash)

    //提交一个mutation
    if(result.code === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address:address})
    }
  },

  //异步获取商品列表信息
  async getFoodList({commit,state}){
    //发送异步ajax请求
    const result = await reqFoodList()
    if(result.code === 0){
      const foodList = result.data
      commit(RECEIVE_FOODLIST,{foodList:foodList})
    }
  },

  //异步获取商铺列表信息
  async getShopList({commit,state}){
    //发送异步ajax请求
    const {latitude, longitude} = state
    const result = await reqShopList({latitude, longitude})
    //提交一个mutation
    if(result.code === 0){
      const shopList = result.data
      commit(RECEIVE_SHOPLIST, {shopList:shopList})
    }
  },

  //同步记录用户信息
  recordUser({commit}, userInfo) {
    commit(RECEIVE_USERINFO, {userInfo})
  },

  //异步获取用户信息
  async getUserInfo({commit,state}){
    const result = await reqUser(state)
    if(result.code === 0){
      const userInfo = result.data
      commit(RECEIVE_USERINFO,{userInfo:userInfo})
    }
  },

  //退出登录
  async logout({commit}){
    const result = await reqLogout()
    if(result.code === 0){
        commit(RESET_USERINFO)
    }
  },

  //获取模拟mock接口数据
  //异步获取商品分类信息
  async getShopGoods({commit}, cb){
    const result = await reqShopGoods()
    if(result.code === 0){
      const goods = result.data
      commit(RECEIVE_GOODS,{goods:goods})
      // 如果组件中传递了接收消息的回调函数 , 数据更新后 , 调用回调通知调用的组件
      cb && cb()
    }
  },
  //异步获取商品评价信息
  async getRatings({commit}, cb){
    const result = await reqShopRatings()
    if(result.code === 0){
      const ratings = result.data
      commit(RECEIVE_RATINGS,{ratings:ratings})

      cb && cb()
    }
  },
  //异步获取商家信息
  async getShopInfo({commit}, cb){
    const result = await reqShopInfo()
    if(result.code === 0){
      const info = result.data
      info.score = 3.5
      commit(RECEIVE_INFO,{info:info})

      cb && cb()
    }
  }
}
