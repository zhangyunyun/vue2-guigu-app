<template>
  <div class="userInfo">
    <!--------------头部------------->
    <Header :title="title"></Header>
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  export default {
    name: "userInfo",
    components:{
      Header
    },
    data(){
      return{
        title:'用户信息'
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>

</style>
