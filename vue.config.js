module.exports = {
  devServer: {
    proxy: {
      //配置跨域
      '/api':{ //匹配所有以'/api'开头的请求路径
        target:'http://localhost:4000', //后台接口域名
        ws: true,       //如果要代理 websockets，配置这个参数
        secure: false,  //如果是https接口，需要配置这个参数
        changeOrigin:true, //是否跨域
        pathRewrite:{
          '^/api':''  //重写路径：去掉路径中开头的'/api'
        }
      }
    }
  }
}

//api='/rng'
//例如${api}/xxxx/xxx  请求地址为'/rng/xxxx/xxx'


