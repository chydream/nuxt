import axios from './axios'
import qs from 'qs'
import {course} from '@/config/config'
// 获取搜索列表
export const selectAllCourseByconditionPage = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: course + '/platform-course-center/portal/course/selectAllCourseByconditionPage',
            method: 'post',
            data: qs.stringify(params)
        }).then(res => {
          resolve(res.data)
        })
    })
}

// 获取学校列表
export const listAllSchoolNoPage = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: course + '/platform-course-center/portal/course/listAllSchoolNoPage',
          method: 'get',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}

// 获取课程信息
export const selectCourseById = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: course + '/platform-course-center/portal/course/selectCourseById',
          method: 'post',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}

// 获取课程报名状态
export const inquireSginUpStatus = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: course + '/platform-course-center/portal/course/inquireSginUpStatus',
          method: 'post',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}

// 获取课程关联教师信息
export const selectCourseTeaccherList = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: course + '/platform-course-center/portal/course/selectCourseTeaccherList',
          method: 'post',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}

// 获取课程章节列表
export const selectChapterByCourseId = (params) => {
  return new Promise((resolve, reject) => {
      axios({
          url: course + '/platform-course-center/portal/course/selectChapterByCourseId',
          method: 'post',
          data: qs.stringify(params)
      }).then(res => {
        resolve(res.data)
      })
  })
}