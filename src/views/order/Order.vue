<template>
  <div class="order">
    <!--------------头部------------->
    <Header :title="title"></Header>
    <!--------------订单------------->
    <!--暂无订单-->
    <dl class="orderNo">
      <dt>
        <img src="../order/images/person.png">
      </dt>
      <dd>
        <h3>登录后查看外卖订单</h3>
      </dd>
      <dd>
        <button>立即登录</button>
      </dd>
    </dl>
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  export default {
    name: "Order",
    components:{
      Header
    },
    data(){
      return{
        title:'订单列表'
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import "../../assets/styles/mixin";
  /*******************订单*****************/
  /*暂无订单*/
  .orderNo{
    dt{
      width:200px;
      margin:0 auto;
    }
    dd{
      text-align:center;
      margin-top:.35rem;
      button{
        @include btn(120px,34px,#02a774,#ffffff,14px,5px);
      }
    }
  }
</style>
