import { sharesCategoryGet, sharesListGet, sharesNewsGet, sharesDetailGet } from '@/api/sharesApi'
export const actions = {
  SharesCategoryGet ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      sharesCategoryGet(params).then(res => {
        resolve(res)
      })
    })
  },
  SharesListGet ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      sharesListGet(params).then(res => {
        resolve(res)
      })
    })
  },
  SharesNewsGet ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      sharesNewsGet(params).then(res => {
        resolve(res)
      })
    })
  },
  SharesDetailGet ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      sharesDetailGet(params).then(res => {
        resolve(res)
      })
    })
  }
}
