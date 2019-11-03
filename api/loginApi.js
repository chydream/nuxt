import axios from './axios'
import qs from 'qs'
import { loginUrl } from '@/config/config'
export const portalLogin = params => {
  return new Promise((resolve, reject) => {
    axios({
      url: loginUrl + '/platform-account-center/portal/user/portalLogin',
      method: 'post',
      data: qs.stringify(params)
    }).then(res => {
      resolve(res.data)
    })
  })
}
export const selectGeneralPortalUser = params => {
  return new Promise((resolve, reject) => {
    axios({
      url:
        loginUrl +
        '/platform-account-center/portal/user/selectGeneralPortalUser',
      method: 'post',
      data: qs.stringify(params)
    }).then(res => {
      resolve(res.data)
    })
  })
}
