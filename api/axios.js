import axios from 'axios'
import store from '@/store'
axios.defaults.timeout = 10000
axios.defaults.withCredentials = true // 跨域请求，允许保存cookie
// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    config.headers.token = localStorage.getItem('token')
    return config
  },
  function(error) {
    console.log('error' + error)
    return Promise.reject(error)
  }
)
// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    console.log(error)
    return Promise.reject(new Error('服务器君开小差了，请稍后再试'))
  }
)
export default axios
