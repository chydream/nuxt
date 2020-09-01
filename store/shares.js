import {sharesCategoryGet} from '@/api/sharesApi'
export const actions = {
  SharesCategoryGet ({state, commit, dispatch}, params) {
    return new Promise((resolve, reject) => {
      console.log(123)
      sharesCategoryGet(params).then(res => {
            resolve(res)
        })
    })
  }
}