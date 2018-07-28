/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = ''
let imgBaseUrl = ''
const appId = '2'
const appVersion = '1.0'

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://127.0.0.1:7001'
  imgBaseUrl = 'http://192.168.0.143/'
} else if (process.env.NODE_ENV === 'production') {
  // baseUrl = 'http://192.168.0.143'
  // imgBaseUrl = 'http://192.168.0.143/'
  baseUrl = 'http://47.101.18.103'
  imgBaseUrl = 'http://47.101.18.103:90/'
}

export {
  baseUrl,
  imgBaseUrl,
  appId,
  appVersion
}
