/*
* 直接更新state的多个方法的对象
* */
import {
  RECEIVE_ADDRESS,
  RECEIVE_FOODLIST,
  RECEIVE_SHOPLIST,
  RECEIVE_USERINFO,
  RESET_USERINFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO
} from './mutations-type'

export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECEIVE_FOODLIST](state,{foodList}){
    state.foodList = foodList
  },
  [RECEIVE_SHOPLIST](state,{shopList}){
    state.shopList = shopList
  },

  [RECEIVE_USERINFO](state,{userInfo}){
    state.userInfo = userInfo
  },
  [RESET_USERINFO](state){
    state.userInfo = {}
  },

  [RECEIVE_GOODS](state,{goods}){
    state.goods = goods
  },
  [RECEIVE_RATINGS](state,{ratings}){
    state.ratings = ratings
  },
  [RECEIVE_INFO](state,{info}){
    state.info = info
  },
}

