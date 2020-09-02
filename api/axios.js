import axios from 'axios'
// import {state} from '@/store/user'
// import { Message } from 'element-ui'

/* eslint-disable */

axios.defaults.timeout = 20000
axios.defaults.withCredentials = true // 跨域请求，允许保存cookie
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  if (process.client && $nuxt.$store.getters.token && sessionStorage.getItem('token')) {
    config.headers['Authorization'] = $nuxt.$store.getters.token
  }
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
