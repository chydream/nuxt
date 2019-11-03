import axios from './axios'
import qs from 'qs'
import { personalUrl } from '@/config/config'
export const selectGeneralPortalUser = params => {
  return new Promise((resolve, reject) => {
    axios({
      url:
        personalUrl +
        '/platform-account-center/portal/user/selectGeneralPortalUser',
      method: 'post',
      data: qs.stringify(params)
    }).then(res => {
      resolve(res.data)
    })
  })
}
export const portalLogout = params => {
  return new Promise((resolve, reject) => {
    axios({
      url: personalUrl + '/platform-account-center/portal/user/portalLogout',
      method: 'post',
      data: qs.stringify(params)
    }).then(res => {
      resolve(res.data)
    })
  })
}
export const selectPortalUserDetailByPortalUserId = params => {
  return new Promise((resolve, reject) => {
    axios({
      url:
        personalUrl +
        '/platform-account-center/portal/user/selectPortalUserDetailByPortalUserId',
      method: 'post',
      data: qs.stringify(params)
    }).then(res => {
      resolve(res.data)
    })
  })
}
export const updatePortalUserPwd = params => {
  return new Promise((resolve, reject) => {
    axios({
      url:
        personalUrl +
        '/platform-account-center/portal/user/UpdatePortalUserPwd',
      method: 'post',
      data: qs.stringify(params)
    }).then(res => {
      resolve(res.data)
    })
  })
}
export const selectSignUpAndPaidCourseNameList = params => {
  return new Promise((resolve, reject) => {
    axios({
      url:
        personalUrl +
        '/platform-course-center/portal/course/selectSignUpAndPaidCourseNameList',
      method: 'post',
      data: qs.stringify(params)
    }).then(res => {
      resolve(res.data)
    })
  })
}
