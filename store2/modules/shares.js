import {sharesCategoryGet} from '@/api/sharesApi'
const shares = {
    namespaced: true,
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
      SharesCategoryGet ({state, commit, dispatch}, params) {
        return new Promise((resolve, reject) => {
          sharesCategoryGet(params).then(res => {
                resolve(res)
            })
        })
      }
    }
}
export default shares
