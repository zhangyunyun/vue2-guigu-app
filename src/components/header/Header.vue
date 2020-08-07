<template>
  <div class="header_guide">
    <div class="header">
      <slot name="left">
        <router-link class="header_left" to="/msite">
          <span>
            <i class="iconfont icon-arrow"></i>
          </span>
        </router-link>
      </slot>
      <span class="header_cent">
        <span class="header_cent_text ellipsis">{{title}}</span>
      </span>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:"Header",
    props:{
      title:String
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  /*******************头部*****************/
  .header_guide{
    height:45px;
  }
  .header{
    background-color:#02a774;
    position:fixed;
    z-index:100;
    left:0;
    top:0;
    width:100%;
    height:45px;
    a{
      color:#fff;
    }
    .iconfont{
      font-size: 18px;
      color: #fff;
      width: 100%;
      height: 100%;
      position: relative;
      top: -1px;
    }
  }
  .header_left{
    position:absolute;
    width:20px;
    height:20px;
    left:10px;
    top:calc(50% - .3rem);
    text-align: center;
    vertical-align:middle;
  }
  .header_cent{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:50%;
    color:#fff;
    text-align:center;
  }
  .header_cent_text{
    font-size:15px;
    color:#fff;
    display:block;
  }
  .header_right{
    font-size:14px;
    color:#fff;
    position:absolute;
    right:10px;
    top:50%;
    transform:translateY(-50%);
  }
</style>
