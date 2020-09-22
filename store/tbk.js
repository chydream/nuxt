import { 
  tbkListGet, 
  tbkProductListGet, 
  tbkMaterialListGet, 
  tbkCouponGet, 
  tbkCouponConvertGet, 
  tbkItemWordGet,
  tbkShopSearchGet,
  tbkShopRecommendGet,
  tbkShopConvertGet,
  tbkProductConvertGet,
  tbkActivityInfoGet,
  tbkTpwdCreate,
  tbkSpread 
} from '@/api/tbkApi'
export const actions = {
  TbkListGet ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      tbkListGet(params).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  TbkProductListGet ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      tbkProductListGet(params).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  TbkMaterialListGet ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      tbkMaterialListGet(params).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  TbkCouponGet ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      tbkCouponGet(params).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  TbkCouponConvertGet ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      tbkCouponConvertGet(params).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  TbkItemWordGet ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      tbkItemWordGet(params).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  TbkShopSearchGet ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      tbkShopSearchGet(params).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  TbkShopRecommendGet ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      tbkShopRecommendGet(params).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  TbkShopConvertGet ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      tbkShopConvertGet(params).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  TbkProductConvertGet ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      tbkProductConvertGet(params).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  TbkActivityInfoGet ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      tbkActivityInfoGet(params).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  TbkTpwdCreate ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      tbkTpwdCreate(params).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },
  TbkSpread ({ state, commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
      tbkSpread(params).then(res => {
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
