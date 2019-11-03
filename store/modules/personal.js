import {
  selectGeneralPortalUser,
  portalLogout,
  selectPortalUserDetailByPortalUserId,
  updatePortalUserPwd,
  selectSignUpAndPaidCourseNameList
} from '@/api/personalApi'
const personal = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    SelectGeneralPortalUser({ state, commit, dispatch }, params) {
      return new Promise((resolve, reject) => {
        selectGeneralPortalUser(params).then(res => {
          resolve(res)
        })
      })
    },
    PortalLogout({ state, commit, dispatch }, params) {
      return new Promise((resolve, reject) => {
        portalLogout(params).then(res => {
          resolve(res)
        })
      })
    },
    SelectPortalUserDetailByPortalUserId({ state, commit, dispatch }, params) {
      return new Promise((resolve, reject) => {
        selectPortalUserDetailByPortalUserId(params).then(res => {
          resolve(res)
        })
      })
    },
    UpdatePortalUserPwd({ state, commit, dispatch }, params) {
      return new Promise((resolve, reject) => {
        updatePortalUserPwd(params).then(res => {
          resolve(res)
        })
      })
    },
    SelectSignUpAndPaidCourseNameList({ state, commit, dispatch }, params) {
      return new Promise((resolve, reject) => {
        selectSignUpAndPaidCourseNameList(params).then(res => {
          resolve(res)
        })
      })
    }
  }
}
export default personal
