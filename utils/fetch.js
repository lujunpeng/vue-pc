import axios from 'axios'
import {
  baseUrl
} from './env'

//  创建axios实例
const service = axios.create({
  baseURL: baseUrl, //  api的base_url
  timeout: 20000 //  请求超时时间
})
//  request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    //  Do something with request error
    console.log(error) //  for debug
    Promise.reject(error)
  }
)

//  respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非1是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== '1') {
      return Promise.reject(response)
    } else {
      return response
    }
  },
  error => {
    console.log('err' + error) //  for debug
    return Promise.reject(error)
  }
)

export default service
