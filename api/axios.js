import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
axios.defaults.timeout = 20000
axios.defaults.withCredentials = true // 跨域请求，允许保存cookie
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // console.log(config)
  if(process.client){
    console.log(store.getters)
  }
 
	// if (process.client && getters.token  && sessionStorage.getItem('token')) {
  //   config.headers['Authorization'] = getters.token
	// }
	return config
}, function (error) {
	console.log('error' + error)
	return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // console.log(response)
	return response
}, function (error) {
	console.log(error)
  return Promise.reject(error)
})
export default axios
