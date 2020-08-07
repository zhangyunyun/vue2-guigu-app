<template>
  <div class="search">
    <!--------------头部------------->
    <Header :title="title"></Header>
    <!--------------搜索------------->
    <!--暂无记录-->
    <form action="">
      <div class="searchBox">
        <input type="text" placeholder="请输入搜索内容">
        <button>提交</button>
      </div>
    </form>
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  export default {
    name: "Search",
    components:{
      Header
    },
    data(){
      return{
        title:'搜索'
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import "../../assets/styles/mixin";
  /*******************搜索*****************/
  .searchBox{
    background:#fff;
    padding:.25rem 2.2rem .25rem .25rem;
    position:relative;
    height:34px;
    >input{
      background:#f2f2f2;
      width:100%;
      height:100%;
      border-radius:5px;
      padding:0 .15rem;
      box-sizing:border-box;
    }
    >button{
      position:absolute;
      right:10px;
      top:calc(50% - 17px);
      @include btn(78px,34px,#02a774,#ffffff,15px,5px);
    }
  }
</style>
