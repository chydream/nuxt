import axios from './axios'
import qs from 'qs'
import { baseUrl } from '@/config/config'
import menu from '../mock/menuMock'
export const login = (params) => {
  return new Promise((resolve, reject) => {
    if (params.username == 'admin' && params.password == '123456') {
      resolve({ data: { token: '123456789' }, message: '登录成功', success: true })
    } else {
      resolve({ data: {}, message: '登录失败', success: false })
    }
  })
}
export const logout = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/user/login',
      method: 'post',
      data: qs.stringify(params)
    }).then(res => {
      resolve({ message: '登出成功', success: true })
    })
  })
}
/**
 * 刷新token
 * @param {refreshToken} params
 */
export const refreshToken = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/api/sysuser/refresh',
      method: 'get',
      headers: {
        'refresh_token': params.refreshToken
      }
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error)
    })
  })
}
export const chanPwd = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/user/chanPwd',
      method: 'post',
      data: qs.stringify(params)
    }).then(res => {
      var data = res.data
      console.log(res)
      if (data.pwd.password == params.oldPwd) {
        resolve({ message: '成功', success: true })
      } else {
        resolve({ message: '失败', success: false })
      }
    })
  })
}

export const getUserInfo = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/user/userInfo',
      method: 'post',
      data: qs.stringify(params)
    }).then(res => {
      if (params == '123456789') {
        resolve({ data: res.data.userInfo, message: '获取用户信息成功', success: true })
      } else {
        res.data.userInfo.role = ['admin']
        resolve({ data: res.data.userInfo, message: '获取用户信息成功', success: true })
      }
    })
  })
}

export const getMenu = (params) => {
  return new Promise((resolve, reject) => {
    resolve({ data: menu[params], message: '获取成功', success: true })
  })
}

/**
 * 获取系统权限集合
 * @param {} params
 */
export const getAuthority = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/api/authority',
      method: 'get'
    }).then(res => {
      resolve(res.data)
    })
  })
}
