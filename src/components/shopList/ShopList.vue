<template>
  <div class="shopList_container">
    <ul class="shop_list" v-if="shopList.length>0">
      <li class="shop_li" v-for="(item,index) in shopList" :key="index" v-on:click="$router.push('/shop')">
        <a href="javascript:;" class="clearfix">
          <div class="shop_left">
            <img class="shop_img" :src="imgBaseUrl + item.image_path">
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">{{item.name}}</h4>
              <ul class="shop_detail_ul">
                <li class="supports" v-for="(s,index) in item.supports" :key="index">{{s.icon_name}}</li>
                <!--<li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>-->
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <!--星星组件-->
                <Star :score="item.rating" :size="24"></Star>
                <div class="rating_section">
                  {{item.rating}}
                </div>
                <div class="order_section">
                  月售{{item.recent_order_num}}单
                </div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">{{item.delivery_mode.text}}</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥{{item.float_minimum_order_amount}}起送</span>
                <span class="segmentation">/</span>
                <span>{{item.piecewise_agent_fee.tips}}</span>
              </p>
            </section>
          </div>
        </a>
      </li>
      <!--<li class="shop_li">
        <a class="clearfix">
          <div class="shop_left">
            <img class="shop_img" src="images/shop/3.jpg">
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item off"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_section">
                  3.2
                </div>
                <div class="order_section">
                  月售106单
                </div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">硅谷专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>
      <li class="shop_li">
        <a class="clearfix">
          <div class="shop_left">
            <img class="shop_img" src="images/shop/4.jpg">
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item half"></span>
                  <span class="star-item off"></span>
                </div>
                <div class="rating_section">
                  3.6
                </div>
                <div class="order_section">
                  月售106单
                </div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">硅谷专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥20起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥5</span>
              </p>
            </section>
          </div>
        </a>
      </li>-->
    </ul>
    <ul v-else>
      <li v-for="item in 10" :key="item">
        <img src="./images/shop_back.svg">
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Star from '../star/Star'
  export default {
    name: "ShopList",
    components:{
      Star
    },
    data(){
      return {
        imgBaseUrl: 'https://fuss10.elemecdn.com/'
      }
    },
    mounted() {
      this.$store.dispatch('getShopList')
    },
    computed:{
      ...mapState(['shopList'])
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  /*******************首页附近商家*****************/
  .shopList_container{
    .shop_li{
      border-top:1px solid #f1f1f1;
      width:100%;
      a{
        display: flex;
        box-sizing: border-box;
        padding: 15px 8px;
        width: 100%;
        .shop_left{
          box-sizing: border-box;
          width: 90px;
          height: 75px;
          padding-right: 10px;
          .shop_img{
            display:block;
            width:100%;
            height:100%;
          }
        }
        .shop_right{
          flex: 1;
          .shop_detail_header{
            width:100%;
            &::after{
              content: ".";
              display: block;
              height: 0;
              clear: both;
              visibility: hidden;
            }
            .shop_title{
              padding-top:2px;
              float:left;
              width:140px;
              color:#333;
              font-size:15px;
              line-height:16px;
              font-weight:700;
              &::before{
                content:'品牌';
                display:inline-block;
                font-size: 11px;
                line-height: 11px;
                color: #333;
                background-color:#ffd930;
                padding:2px 2px;
                border-radius:2px;
                margin-right:5px;
              }
            }
            .shop_detail_ul{
              float:right;
              .supports{
                float: left;
                font-size:10px;
                color: #999;
                border:1px solid #f1f1f1;
                padding:0 2px;
                border-radius:2px;
              }
            }
          }
          .shop_rating_order{
            width:100%;
            margin-top: 12px;
            margin-bottom: 5px;
            &::after{
              content: ".";
              display: block;
              height: 0;
              clear: both;
              visibility: hidden;
            }
            .shop_rating_order_left{
              float:left;
              color:#ff9a0d;
              >.star{
                vertical-align:text-top;
              }
              .rating_section{
                float:left;
                font-size:10px;
                color:#ff6000;
                margin-left:4px;
              }
              .order_section{
                float:left;
                font-size:10px;
                color:#666;
                transform:scale(.8);
              }
            }
            .shop_rating_order_right{
              float: right;
              font-size:0;
              .delivery_style{
                transform-origin:35px 0;
                transform:scale(.7);
                display: inline-block;
                font-size:12px;
                padding:1px;
                border-radius:2px;
              }
              .delivery_left{
                color: #fff;
                margin-right: -10px;
                background-color: #02a774;
                border: 1px solid #02a774;
              }
              .delivery_right{
                color: #02a774;
                border: 1px solid #02a774;
              }
            }
          }
          .shop_distance{
            width:100%;
            font-size:12px;
            .shop_delivery_msg{
              float:left;
              transform-origin:0;
              transform:scale(.9);
              width:200px;
              color: #999;
              .segmentation{
                color:#ccc;
              }
            }
          }
        }
      }
    }
  }
</style>
