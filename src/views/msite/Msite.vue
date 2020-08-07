<template>
  <div class="msite">
    <!--头部-->
    <Header :title="address.name">
      <router-link class="header_left" slot="left" to="/search">
        <span>
          <i class="iconfont icon-search_icon"></i>
        </span>
      </router-link>
      <router-link class="header_right" slot="right" :to="userInfo._id ? '/userInfo' : '/login'">
          <span v-if="!userInfo._id">
            <span>登录</span> |
            <span>注册</span>
          </span>
          <span v-else>
              <i class="iconfont icon-account"></i>
          </span>
        </router-link>
    </Header>
    <!--首页食品分类导航-->
    <div class="navList" v-if="categorysArr.length>0">
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(cs,index) in categorysArr" :key="index">
            <a href="javascript:;" class="link_to_food" v-for="(c,index) in cs" :key="index">
              <div class="food_container">
                <img :src="imgBaseUrl+c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>
            <!--<a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../msite/images/nav/2.jpg">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../msite/images/nav/3.jpg">
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../msite/images/nav/4.jpg">
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../msite/images/nav/5.jpg">
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../msite/images/nav/6.jpg">
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../msite/images/nav/7.jpg">
              </div>
              <span>预订早餐</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="../msite/images/nav/8.jpg">
              </div>
              <span>土豪推荐</span>
            </a>-->
          </li>
        </ul>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <img src="./images/msite_back.svg" v-else>
    <!--首页附近商家-->
    <div class="shopList">
      <div class="shopList_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'

  import Header from "../../components/header/Header"
  import ShopList from '../../components/shopList/ShopList'
  export default {
    name: "Msite",
    components:{
      Header,
      ShopList
    },
    data(){
      return{
        //title:'兰州市城关区雁滩安居小区',
        imgBaseUrl: 'https://fuss10.elemecdn.com'
      }
    },
    mounted(){
      //获取异步请求方法
      this.$store.dispatch('getAddress')
      this.$store.dispatch('getFoodList')
      this.$store.dispatch('getUserInfo')
    },
    computed:{
      ...mapState(['address', 'foodList', 'userInfo']),

      categorysArr(){
        const max = 8;
        const resultArr = []  //存放li中8个为一组的a(即一组8个a)
        const {foodList} = this
        let smallArr = []
        foodList.forEach((c,index)=>{
          if(smallArr.length === 0){
            resultArr.push(smallArr)
          }

          smallArr.push(c)

          if(smallArr.length === max){
            smallArr = []
          }
        })
        console.log(resultArr);

        return resultArr
      }
    },
    watch:{
      foodList(value){ //数组中有数据了，在异步更新之前执行了
        // 方法一：使用setTimeout，但不是太好
        // setTimeout(()=>{})

        //方法二:使用$nextTick，界面数据更新之后，立即执行，此条语句写在数据更新之后
        this.$nextTick(() => {
          new Swiper('.swiper-container',{
            autoplay: {
              delay: 3000,
              disableOnInteraction: false, // 取消鼠标操作后的轮播暂停【无操作轮播继续】【参考链接1】
              stopOnLastSlide: false // 在最后一页停止
            },
            //显示分页
            pagination:{
              el:'.swiper-pagination',
              clickable: true
            }
          })
        })
      }
    }
  }
</script>
<style>
  /*******************swiper*****************/
  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
    bottom:-20px;
  }
  .swiper-pagination{
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .swiper-pagination-bullet{
    background:#02a774;
    margin:0 3px;
    opacity:.3;
  }
  .swiper-pagination-bullet-active{
    background:#02a774;
    opacity:1;
  }
</style>
<style type="text/scss" lang="scss" scoped>
  /*******************首页导航*****************/
  .navList{
    position:relative;
    border-bottom:1px solid #e4e4e4;
    height:180px;
    background:#fff;
    ul {
      display:flex;
      li{

      }
      .link_to_food{
        display:inline-block;
        width:25%;
        .food_container{
          display:block;
          width:100%;
          text-align:center;
          padding:5px 0;
          font-size:0;
        }
        img{
          display:inline-block;
          width:50px;
          height:50px;
        }
        span{
          display:block;
          width:100%;
          text-align:center;
          font-size:12px;
          color:#666;
        }
      }
    }
  }
  /*******************首页附近商家*****************/
  .shopList{
    margin-top:10px;
    background: #fff;
    &::before{
      content: '';
      position: absolute;
      z-index: 200;
      left: 0;
      top: 0;
      width: 100%;
      height: 1px;
      background-color: #e4e4e4;
    }
    .shopList_header{
      padding:10px 10px 0;
      .shop_header_title{
        color:#999;
        font-size:14px;
        line-height:20px;
      }
    }
  }
</style>
