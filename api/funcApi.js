import axios from './axios'
import qs from 'qs'
import {baseUrl, baseUrl2} from '@/config/config'
// 功能接口模块
export const getRegion = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: baseUrl + '/api/Admin/GetRegion',
            method: 'get',
            data: qs.stringify(params)
        }).then(res => {
          resolve(res.data)
        })
    })
}
export const getArea = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/GetArea',
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const addUrlJson = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/AddUrlJson',
          method: 'post',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const delUrl = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/DelUrl?' + qs.stringify(params),
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const editUrl = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/EditUrl?' + qs.stringify(params),
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const upUrl = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/UpUrl',
          method: 'post',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const getUrlJson = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/GetUrlJsonList?' + qs.stringify(params),
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
// 功能包接口模块
export const getFeaturePack = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/GetFeaturePackList?' + qs.stringify(params),
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const delFeaturePack = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/DelFeaturePack?' + qs.stringify(params),
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const editFeaturePack = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/EditFeaturePack?' + qs.stringify(params),
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const addFeaturePack = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/AddFeaturePack?' + qs.stringify(params),
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const saveFeaturePack = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/SaveFeaturePack?' + qs.stringify(params),
          method: 'post',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
// 收费模块接口
export const getChargeList = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/GetChargeList?' + qs.stringify(params),
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const delCharge = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/DelCharge?' + qs.stringify(params),
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const addCharge = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/AddCharge?' + qs.stringify(params),
          method: 'post',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const editCharge = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/EditCharge/{Id}?' + qs.stringify(params),
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const upCharge = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/UpCharge?' + qs.stringify(params),
          method: 'post',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const getFeaturePackByOrder = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/GetFeaturePackByOrder?' + qs.stringify(params),
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const getChargeByOrder = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/GetChargeByOrder?' + qs.stringify(params),
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const upChargeByOrder = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/UpChargeByOrder/' + params.Id,
          method: 'post',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const upFeaturePackByOrder = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/UpFeaturePackByOrder/' + params.Id,
          method: 'post',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const getOrderTypeList = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl2 + '/api/Admin/GetOrderTypeList',
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
// 区域复制黏贴
export const copyUrlJsonList = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/api/Admin/CopyUrlJsonList',
          method: 'post',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
