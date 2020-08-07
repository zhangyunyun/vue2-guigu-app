<template>
  <div class="cartControl">
    <div class="iconfont icon-minus"></div>
    <div class="cart-count">1</div>
    <div class="iconfont icon-add1"></div>
  </div>
</template>

<script>
  export default {
     name: "CartControl"
  }
</script>

<style type="text/scss" lang="scss" scoped>
  .cartControl{
    font-size: 0;
    .cart-decrease{
      display: inline-block;
      padding: 6px;
      line-height: 24px;
      font-size: 24px;
      color: rgb(0, 160, 220);
    }
    .icon-minus{
      display: inline-block;
      text-align: center;
      width:18px;
      height:18px;
      line-height: 18px;
      font-size: 8px;
      color:#fff;
      background:#02a774;
      border-radius:100%;
    }
    .cart-count{
      display: inline-block;
      vertical-align: top;
      width: 16px;
      line-height: 18px;
      text-align: center;
      font-size: 10px;
      color: #93999f;
    }
    .icon-add1{
      display: inline-block;
      text-align: center;
      width:18px;
      height:18px;
      line-height: 18px;
      font-size: 8px;
      color:#fff;
      background:#02a774;
      border-radius:100%;
    }
  }
</style>
