import { tbkListGet } from '@/api/tbkApi'
export const actions = {
  TbkListGet ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      tbkListGet(params).then(res => {
        resolve(res)
      })
    })
  }
}
