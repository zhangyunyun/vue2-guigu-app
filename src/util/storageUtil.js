/*
* 存储数据模块
*
* 1.函数 1个功能用函数
* 2.对象 1个或多个功能用对象
* */
export default {
  set(key,value){
    window.localStorage.setItem(key,JSON.stringify(value));
  },
  get(key){
    return JSON.parse(window.localStorage.getItem(key) || '[]')
  },
  remove(){

  }
}
