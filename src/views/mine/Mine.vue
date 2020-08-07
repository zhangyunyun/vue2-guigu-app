<template>
  <div class="mine">
    <!--头部-->
    <Header :title="title"></Header>
    <!--个人中心-->
    <div class="profile-number">
      <router-link :to="userInfo._id ? '/userInfo' : '/login'" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-account"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top" v-if="!userInfo.phone">{{userInfo.name || '登录/注册'}}</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-Phone"></i>
            </span>
            <span class="icon-mobile-number">{{userInfo.phone || '暂无绑定手机号'}}</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-arrow1"></i>
        </span>
      </router-link>
    </div>
    <ul class="profile_info_data ">
      <li>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><em>0.00</em>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
      </li>
      <li>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><em>0</em>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
      </li>
      <li>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><em>0</em>分</span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </li>
    </ul>
    <ul class="profile_my_order">
      <li>
        <a href="#">
          <i class="iconfont icon-orderform"></i>
          <p>我的订单</p>
          <i class="iconfont icon-arrow1"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <div>
            <i class="iconfont icon-weibiaoti20101010101"></i>
            <p>积分商城</p>
            <i class="iconfont icon-arrow1"></i>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div>
            <i class="iconfont icon-iconfontcardid"></i>
            <p>会员卡</p>
            <i class="iconfont icon-arrow1"></i>
          </div>
        </a>
      </li>
    </ul>
    <ul class="profile_my_order">
      <li>
        <a href="#">
          <i class="iconfont icon-service"></i>
          <p>服务中心</p>
          <i class="iconfont icon-arrow1"></i>
        </a>
      </li>
    </ul>
    <div class="profile_my_exit" v-if="userInfo._id">
      <mt-button type="danger" v-on:click="logout">退出登录</mt-button>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {MessageBox} from 'mint-ui'
  import Header from "../../components/header/Header";
  export default {
    name: "Mine",
    components:{
      Header
    },
    data(){
      return{
        title:'个人中心'
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    methods:{
      logout(){
        MessageBox.confirm('确定退出登陆吗?').then(action => {
            this.$store.dispatch('logout')
        });
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  /*******************我的*****************/
  .profile-number{
    .profile-link{
      *zoom: 1;
      position: relative;
      display: block;
      background: rgba(2, 167, 116, 0.87);
      padding: 20px 10px;
      &::after{
        content: '';
        display: block;
        clear: both;
      }
      .profile_image{
        float: left;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        vertical-align: middle;
        text-align: center;
        background: #fff;
        .iconfont{
          font-size: 40px;
        }
      }
      .user-info{
        float: left;
        margin-top: 8px;
        margin-left: 15px;
        p{
          font-size: 12px;
          color: #fff;
          .user-icon{
            display: inline-block;
            margin-left: -2px;
            margin-right: 0;
            width: 17px;
            height: 20px;
          }
        }
        P.user-info-top{
          font-size:16px;
        }
      }
      .arrow{
        width: 12px;
        height: 12px;
        position: absolute;
        right: 15px;
        top: 40%;
        color:#fff;
      }
    }
  }
  .profile_info_data{
    display:flex;
    background:#fff;
    li{
      flex:1;
      &:nth-of-type(3) a{
        border-right:0;
      }
      &:nth-of-type(2) .info_data_top em{
        color:#ff5f3e;
      }
      &:nth-of-type(3) .info_data_top em{
        color:#6ac20b;
      }
      a{
        display:block;
        text-align: center;
        border-right: 1px solid #f1f1f1;
        color: #333;
      }
      .info_data_top{
        display: block;
        font-size: 14px;
        padding: 15px 5px 10px;
        em{
          display: inline-block;
          font-size: 30px;
          color: #f90;
          font-weight: 700;
          line-height: 30px;
        }
      }
      .info_data_bottom{
        display: inline-block;
        font-size: 14px;
        color: #666;
        font-weight: 400;
        padding-bottom: 10px;
      }
    }
  }
  .profile_my_order{
    margin-top:.25rem;
    background:#fff;
    li{
      align-items:center;
      padding:0 .25rem;
      &:last-child a{
        border-bottom:0;
      }
      a{
        display: block;
        padding: 0 20px 0 30px;
        position: relative;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ddd;
        i{
          position: absolute;
          left: 0;
          top: calc(50% - 20px);
          width: 20px;
          height: 20px;
          font-size: 22px;
          text-align: center;
          &.icon-arrow1{
            left: inherit;
            right:0;
            color:#bbb;
            font-size:15px;
          }
          &.icon-orderform{
            color:#9266f9;
          }
          &.icon-weibiaoti20101010101{
            color:#ff5f3e;
          }
          &.icon-iconfontcardid{
            color:#f90;
          }
          &.icon-service{
            color:#16c2c2;
          }
        }
      }
    }
  }
  .profile_my_exit{
    margin-top:.25rem;
    button{
      width: 100%;
      height:1rem;
      line-height:1rem;
      color:#fff;
      text-align: center;
      background:#ff5f3e;
      font-size:.35rem;
      letter-spacing:2px;
    }
  }
</style>
