import axios from './axios'
import qs from 'qs'
import { baseUrl } from '@/config/config'
import menu from '../mock/menuMock'
export const sharesCategoryGet = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/shares/category',
      method: 'get',
      params
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error.data)
    })
  })
}
export const sharesListGet = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/shares/list',
      method: 'get',
      params
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error.data)
    })
  })
}
export const sharesNewsGet = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/shares/news',
      method: 'get',
      params
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error.data)
    })
  })
}
export const sharesDetailGet = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/shares/detail',
      method: 'get',
      params
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error.data)
    })
  })
}
