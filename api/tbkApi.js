import axios from './axios'
import qs from 'qs'
import { baseUrl } from '@/config/config'
export const tbkListGet = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/tbk/item/info',
      method: 'get',
      params
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error.data)
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
    }).catch(error => {
      reject(error.data)
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
    }).catch(error => {
      reject(error.data)
    })
  })
}
export const tbkCouponGet = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/tbk/coupon',
      method: 'get',
      params
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error.data)
    })
  })
}
export const tbkCouponConvertGet = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/tbk/coupon/convert',
      method: 'get',
      params
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error.data)
    })
  })
}
export const tbkItemWordGet = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/tbk/item/word',
      method: 'get',
      params
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error.data)
    })
  })
}
export const tbkShopSearchGet = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/tbk/shop/search',
      method: 'get',
      params
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error.data)
    })
  })
}
export const tbkShopRecommendGet = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/tbk/shop/recommend',
      method: 'get',
      params
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error.data)
    })
  })
}
export const tbkShopConvertGet = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/tbk/shop/convert',
      method: 'get',
      params
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error.data)
    })
  })
}
export const tbkProductConvertGet = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/tbk/product/convert',
      method: 'get',
      params
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error.data)
    })
  })
}
export const tbkActivityInfoGet = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/tbk/activity/info',
      method: 'get',
      params
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error.data)
    })
  })
}
export const tbkTpwdCreate = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/tbk/tpwd/create',
      method: 'get',
      params
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error.data)
    })
  })
}
export const tbkSpread = (params) => {
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl + '/tbk/spread',
      method: 'get',
      params
    }).then(res => {
      resolve(res.data)
    }).catch(error => {
      reject(error.data)
    })
  })
}
