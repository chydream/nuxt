import axios from './axios'
import qs from 'qs'
import { baseUrl } from '@/config/config'
export const tbkListGet = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/tbk/list',
      method: 'get',
      params
    }).then(res => {
      resolve(res.data)
    })
  })
}
export const tbkProductListGet = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/tbk/product/list',
      method: 'get',
      params
    }).then(res => {
      resolve(res.data)
    })
  })
}
export const tbkMaterialListGet = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/tbk/material/list',
      method: 'get',
      params
    }).then(res => {
      resolve(res.data)
    })
  })
}
