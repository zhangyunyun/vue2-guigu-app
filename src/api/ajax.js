/*
* ajax请求函数模块
*     返回值promise对象
* */
//向外默认暴露一个函数ajax
/*
*  url 请求地址
*  data 请求参数,默认值空对象{}
*  type GET 默认，GET请求居多
*      POST
* */
import axios from 'axios'
export default function ajax(url, data={}, type='GET'){
  return new Promise(function(resolve, reject){
    //执行异步ajax请求
    let promise
    if(type === 'GET'){
      //准备url query参数数据
      let dataStr = ''  //数据拼接字符串
      Object.keys(data).forEach(function(key){
        dataStr += key +'='+ data[key] + '&'
      })
      if(dataStr !== ''){
        dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //发送get请求
      promise = axios.get(url)
    }else{
      //发送post请求
      promise = axios.post(url, data)
    }
    promise.then(function(response){
      //成功了调用resolve()
      resolve(response.data)
    }).catch(function(error){
      //失败了调用reject()
      reject(error)
    })
  })
  //return promise
}

/*
* const response = await ajax()
  const result = response.data

  const result = await ajax()
* */
