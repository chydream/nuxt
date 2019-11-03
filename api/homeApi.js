import axios from './axios'
import qs from 'qs'
import {home} from '@/config/config'
// 获取banner
export const selectAllBanner = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: home + '/platform-system-center/portal/banner/selectAllBanner',
            method: 'post',
            data: qs.stringify(params)
        }).then(res => {
          resolve(res.data)
        })
    })
}
// 获取推荐学校
export const selectAllRecommendSchool = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: home + '/platform-system-center/portal/school/selectAllRecommendSchool',
          method: 'post',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
// 获取课程列表
export const selectAllCoursePage = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: home + '/platform-course-center/portal/course/selectAllCoursePage',
          method: 'post',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}
