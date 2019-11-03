import axios from './axios'
import qs from 'qs'
import {baseUrl} from '@/config/config'
export const selectDeviceType = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: baseUrl + '/schoolDevice/selectDeviceType',
            method: 'get',
            data: qs.stringify(params)
        }).then(res => {
          resolve(res.data)
        })
    })
}
export const saveSchoolDevice = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/schoolDevice/saveSchoolDevice?' + qs.stringify(params),
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const selectBySchoolId = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/schoolDevice/selectBySchoolId?' + qs.stringify(params),
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const upSchoolDevice = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/schoolDevice/upSchoolDevice?' + qs.stringify(params),
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}

export const selectById = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/schoolDevice/selectById?' + qs.stringify(params),
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const delSchoolDevice = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/schoolDevice/delSchoolDevice?' + qs.stringify(params),
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const inquireAreaListRPC = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/bdcrpc/api/v1.0/areaRPC/inquireAreaList',
          method: 'get'
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const inquireSchoolListByAreaIdRPC = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/bdcrpc/api/v1.0/schoolRPC/inquireSchoolListByAreaId?areaId=' + params.areaId + '&pageNum=' + params.pageNum + '&pageSize=' + params.pageSize,
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
export const updateSchoolDeviceState = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: baseUrl + '/schoolDevice/updateSchoolDeviceState?' + qs.stringify(params),
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
