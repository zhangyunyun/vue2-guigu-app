<template>
  <div class="shop">
    <ShopHeader></ShopHeader>
    <div class="shopTab">
      <div class="tab-item">
        <router-link to="/shop/goods">点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import ShopHeader from "../../components/shopHeader/ShopHeader";
  export default {
    name: "Shop",
    components:{
      ShopHeader
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  .shopTab{
    height:40px;
    line-height:40px;
    background:#fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom:1px solid rgba(7, 17, 27, 0.1);
    .tab-item{
      flex:1;
      a{
        display:block;
        position:relative;
        font-size: 13px;
        color:rgb(77, 85, 93);
        text-align: center;
        &.on{
          color:#02a774;
          &::after{
            content:'';
            position:absolute;
            left:50%;
            bottom:1px;
            width:35px;
            height:2px;
            transform:translateX(-50%);
            background:#02a774;
          }
        }
      }
    }
  }
</style>
