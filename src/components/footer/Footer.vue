<template>
  <div class="footer_guide">
    <ul class="footer">
      <li>
        <router-link to="/msite" class="guide_item">
          <i class="iconfont icon-home"></i>
          <span class="item_icon">首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/search" class="guide_item">
          <i class="iconfont icon-search_icon"></i>
          <span class="item_icon">搜索</span>
        </router-link>
      </li>
      <li>
        <router-link to="/order" class="guide_item">
          <i class="iconfont icon-orderform"></i>
          <span class="item_icon">订单</span>
        </router-link>
      </li>
      <li>
        <router-link to="/mine" class="guide_item" v-bind:class="{on:'/mine'===$route.path}">
          <i class="iconfont icon-account"></i>
          <span class="item_icon">我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data(){
      return{

      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  .footer_guide{
    height:50px;
    .footer{
      position:fixed;
      z-index:100;
      left:0;
      right:0;
      bottom:0;
      background:#fff;
      width:100%;
      height:50px;
      display:flex;
      border-top:1px solid #ddd;
      li{
        flex:1;
        .guide_item {
          display: flex;
          flex: 1;
          text-align: center;
          flex-direction: column;
          align-items: center;
          margin: 5px;
          color: #999999;
          &.on {
            color: #02a774;
            .iconfont{
              color: #02a774;
            }
          }
          .iconfont {
            display:inline-block;
            width: 20px;
            height:20px;
            font-size:18px;
            color:#999999;
          }
          span {
            display:block;
            font-size:12px;
            margin-top:5px;
          }
        }
      }
    }
  }
</style>
