import axios from 'axios'
// import store from '@/store'
import { Message } from 'element-ui'
axios.defaults.timeout = 20000
axios.defaults.withCredentials = true // 跨域请求，允许保存cookie
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // console.log(config)
	if (store.getters.token && process.client && sessionStorage.getItem('token')) {
    config.headers['Authorization'] = 'Bearer' + ' ' + store.getters.token
	}
	return config
}, function (error) {
	console.log('error' + error)
	return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
	return response
}, function (error) {
	if (error.response.status == 401) {
    Message({message: '服务器请求超时，请重新登录', type: 'error'})
    this.$store.commit('user/SET_TOKEN', '')
    this.$store.commit('common/CLEAR_TAG')
    // router.push('/login')
  }
  return Promise.reject(error.response)
})
export default axios
