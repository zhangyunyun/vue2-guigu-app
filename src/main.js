/*
* 入口js
* */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockServer'

import '../public/css/reset.css'
import '../public/js/rem.js'

import 'mint-ui/lib/style.css'
import {Button} from 'mint-ui'
Vue.component(Button.name,Button)

Vue.config.productionTip = false

/*eslint-disable no-new*/
new Vue({
  router, //使用上vue-router
  store,  //使用上vuex
  render: h => h(App)
}).$mount('#app')
