import { tbkListGet, tbkProductListGet } from '@/api/tbkApi'
export const actions = {
  TbkListGet ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      tbkListGet(params).then(res => {
        resolve(res)
      })
    })
  },
  TbkProductListGet ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      tbkProductListGet(params).then(res => {
        resolve(res)
      })
    })
  }
}
