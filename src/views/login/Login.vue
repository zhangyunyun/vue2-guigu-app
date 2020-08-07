<template>
  <div class="login">
    <a href="javascript:;" class="goBack" v-on:click="goBack">
      <i class="iconfont icon-arrow"></i>
    </a>
    <!--------------登录------------->
    <div class="loginGuide">
      <h2 class="loginTitle">硅谷外卖</h2>
      <ul class="loginTab">
        <li :class="{on:!isLogin}" v-on:click="isLogin=false">短信登录</li>
        <li :class="{on:isLogin}" v-on:click="isLogin=true">密码登录</li>
      </ul>
      <div class="loginPanel">
        <form @submit.prevent="login">
          <div class="panel" :class="{on:!isLogin}">
            <div class="formItem form_number">
              <input type="tel" maxlength="11" placeholder=" 手机号" v-model="phone">
              <button :disabled="!rightPhone" :class="{on:rightPhone}" v-on:click.prevent="getCode">
                {{count > 0 ? count + 's后重试' : '获取验证码'}}
              </button>
            </div>
            <div class="formItem form_coding">
              <input type="tel" maxlength="8" placeholder=" 验证码" v-model="code">
            </div>
            <p class="formText">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意 <a href="#">《用户服务协议》</a>
            </p>
          </div>
          <div class="panel" :class="{on:isLogin}">
            <div class="formItem">
              <input type="text" placeholder="手机/邮箱/用户名" v-model="name">
            </div>
            <div class="formItem form_password">
              <input type="password" maxlength="6" placeholder="密码1" v-model="pwd" v-if="!isPwd">
              <input type="text" maxlength="6" placeholder="密码2" v-model="pwd" v-if="isPwd">
              <span class="switch_code" :class="isPwd ? 'on' : ''" v-on:click="isPwd=!isPwd">
                {{isPwd ? 'abc' : ''}}
                <span></span>
              </span>
            </div>
            <div class="formItem form_code">
              <input type="text" maxlength="6" placeholder="验证码" v-model="captcha">
              <img src="../../views/login/images/captcha.svg" alt="" ref="captcha" v-on:click="getCaptcha">
            </div>
          </div>
          <div class="loginBtn">
            <button>登录</button>
          </div>
        </form>
      </div>
    </div>
    <altTip :alertText="alertText" v-show="alertShow"  v-on:closeAlert="closeAlert"></altTip>
  </div>
</template>

<script>
  import {reqSendCode,reqSmsLogin,reqPwdLogin} from '../../api'
  import altTip from "../../components/altTip/altTip";
  export default {
    name: "Login",
    components:{
      altTip
    },
    data(){
      return{
        isLogin:false,  //false代表短信登陆，true代表密码登陆
        count:0,  //计时

        phone:'', //手机号
        code:'',  //短信验证

        isPwd:false, //是否显示密码
        name:'', //用户名
        pwd:'',  //密码
        captcha:'',  //图形验证码

        alertShow:false, //是否显示提示框
        alertText:'' //提示框文本
      }
    },
    mounted() {
      this.getCaptcha()
    },
    computed:{
      rightPhone(){
        const phoneReg = /^1\d{10}$/
        return phoneReg.test(this.phone)
      },
      rightCode(){
        const codeReg = /^\d{6}$/gi
        return codeReg.test(this.code)
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      },

      //关闭弹窗
      closeAlert(){
        this.alertShow = false,
        this.alertText = ''
      },

      //显示弹窗
      showAlert(text){
        this.alertShow = true,
          this.alertText = text
      },

      // 获取图形验证码
      getCaptcha() {
        this.$refs.captcha.src = 'http://localhost:4000/captcha?time=' + Date.now()
      },

      //获取短信验证码
      async getCode(){
        if(this.count === 0){
          this.count = 60;
          this.timer = setInterval(() =>{
            this.count--
            if(this.count === 0){
              clearInterval(this.timer);
            }
          },1000)

          //发送ajax,请求后台，向指定的手机号码发送验证码
          //发送短信验证码
          const result = await reqSendCode(this.phone)
          console.log(result)
          if(result.code === 1){//"code":1 发送失败 "code":0  发送成功
            //显示弹框提示
            this.showAlert(result.msg)

            //清除定时器
            if(this.count){
              this.count = 0
              clearInterval(this.timer)
            }
          }
        }
      },

      //发送登录信息
      async login(){
        let result
        if(!this.isLogin){
          const {rightPhone, rightCode, phone, code} = this
          //手机号验证码检测
          if(!this.rightPhone){
            this.showAlert('手机号码不正确')
            return false
          }else if(!this.rightCode){
            this.showAlert('短信验证码不正确')
            return false
          }
          //发送ajax请求，手机号短信验证码登陆
          result = await reqSmsLogin(phone, code)

        }else{
          const {name, pwd, captcha} = this
          //用户名密码登陆
          if(!this.name){
            this.showAlert('请输入手机号/ 邮箱/ 用户名')
            return false
          }else if(!this.pwd){
            this.showAlert('请输入密码')
            return false
          }else if(!this.captcha){
            this.showAlert('请输入验证码')
            return false
          }
          //发送ajax请求，用户名密码登陆
          result = await reqPwdLogin({name, pwd, captcha})
        }

        //登录成功数据结果处理
        if(result.code === 0){
          //登录成功
          console.log("登录成功")
          const user = result.data
          //将用户信息user保存到vuex的state中
          this.$store.dispatch('recordUser', user)
          //跳转到个人中心界面
          this.$router.replace('/mine')
        }else{
          // 显示新的图片验证码
          this.getCaptcha()
          // 显示警告提示
          const msg = result.msg
          this.showAlert(msg)


          /*//登录失败
          console.log("登录失败")
          //刷新验证码
          this.getCaptcha()

          const msg = result.message
          this.showAlert(msg)*/
        }
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  @import "../../assets/styles/mixin";
  /*******************登录*****************/
  .goBack{
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
  }
  .login{
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width: 100%;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background:#fff;
    .loginGuide{
      width: 80%;
      margin: 0 auto;
    }
    .loginTitle{
      font-size: 40px;
      font-weight: bold;
      color: #02a774;
      text-align: center;
    }
    .loginTab{
      text-align: center;
      display:flex;
      margin-top:20px;
      li{
        flex: 1;
        margin: 0 35px;
        a{
          display:block;
          color: #333;
          font-size: 14px;
          padding-bottom: 4px;
        }
        &.on{
          color: #02a774;
          font-weight: 700;
          border-bottom: 2px solid #02a774;
        }
      }
    }
    .loginPanel{
      height:250px;
      form{
        .panel{
          display:none;
          &.on{
            display:block;
          }
          .formItem{
            position: relative;
            margin-top: 16px;
            height: 45px;
            font-size: 14px;
            background: #fff;
            padding:0 10px;
            border-radius:5px;
            border: 1px solid #ddd;
            &.form_number{
              padding: 0 90px 0 10px;
            }
            &.form_password{
              padding: 0 90px 0 10px;
              .switch_code{
                font-size: 12px;
                border: 1px solid #ddd;
                border-radius: 8px;
                transition: background-color 0.3s, border-color 0.3s;
                padding: 0 6px;
                width: 30px;
                height: 16px;
                line-height: 16px;
                color: #fff;
                position: absolute;
                top: 50%;
                right: 10px;
                transform: translateY(-50%);
                background:#fff;
                &.on{
                  background:#02a774;
                  span{
                    left:inherit;
                    right:-1px;
                  }
                }
                span{
                  position: absolute;
                  left: -1px;
                  width: 16px;
                  height: 16px;
                  top:calc(50% - 9px);
                  border: 1px solid #ddd;
                  border-radius: 50%;
                  background: #fff;
                  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
                  transition: transform 0.3s;
                }
              }
            }
            &.form_code{
              padding: 0 90px 0 10px;
              img{
                position: absolute;
                top: 50%;
                right: 10px;
                transform: translateY(-50%);
                border: 0;
                color: #ccc;
                font-size: 14px;
                background: transparent;
                width: 120px;
              }
            }
            input{
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              border-radius: 4px;
              outline: 0;
              font: 400 14px Arial;
              &:-moz-placeholder{color:#999; font-size:13px;}
              &::-moz-placeholder{color:#999; font-size:13px;}
              &:-ms-input-placeholder{color:#999; font-size:13px;}
              &::-webkit-input-placeholder{color:#999; font-size:13px;}
            }
            button{
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              border: 0;
              color: #ccc;
              font-size: 14px;
              background: transparent;
              &.on{
                color:#02a774;
              }
            }
          }
          .formText{
            margin-top: 12px;
            color: #999;
            font-size: 14px;
            line-height: 20px;
            a{
              color:#02a774;
            }
          }
        }
        .loginBtn{
          button{
            margin-top:20px;
            display: block;
            text-align: center;
            line-height: 42px;
            border: 0;
            @include btn(100%,42px,#4cd96f,#ffffff,15px,5px);
          }
        }
      }
    }
  }
</style>
