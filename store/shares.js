import { sharesCategoryGet, sharesListGet } from '@/api/sharesApi'
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
  }
}
