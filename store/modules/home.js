import {selectAllBanner, selectAllRecommendSchool, selectAllCoursePage} from '@/api/homeApi'
const home = {
    namespaced: true,
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
      // bannner
      SelectAllBanner ({state, commit, dispatch}, params) {
        return new Promise((resolve, reject) => {
          selectAllBanner(params).then(res => {
                resolve(res)
            })
        })
      },
      // 推荐学校
      SelectAllRecommendSchool ({state, commit, dispatch}, params) {
        return new Promise((resolve, reject) => {
          selectAllRecommendSchool(params).then(res => {
                resolve(res)
            })
        })
      },
      // 获取课程列表
      SelectAllCoursePage ({state, commit, dispatch}, params) {
        return new Promise((resolve, reject) => {
          selectAllCoursePage(params).then(res => {
                resolve(res)
            })
        })
      },

    }
}
export default home
