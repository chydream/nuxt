// import {getArea, getRegion, addUrlJson, delUrl, editUrl, upUrl, getUrlJson, getFeaturePack, 
//   delFeaturePack, editFeaturePack, addFeaturePack, saveFeaturePack, getChargeList, copyUrlJsonList,
//   delCharge, addCharge, editCharge, upCharge, getFeaturePackByOrder, getChargeByOrder, upChargeByOrder, upFeaturePackByOrder, getOrderTypeList} from '@/api/funcApi'
// const func = {
//     namespaced: true,
//     state: {
//     },
//     getters: {
//     },
//     mutations: {
//     },
//     actions: {
//       GetRegion ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           getRegion(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       GetArea ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           getArea(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       AddUrlJson ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           addUrlJson(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       DelUrl ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           delUrl(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       EditUrl ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           editUrl(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       UpUrl ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           upUrl(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       GetUrlJson ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           getUrlJson(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       // 功能包接口模块
//       GetFeaturePack ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           getFeaturePack(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       DelFeaturePack ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           delFeaturePack(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       EditFeaturePack ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           editFeaturePack(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       AddFeaturePack ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           addFeaturePack(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       SaveFeaturePack ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           saveFeaturePack(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       // 收费模块接口
//       GetChargeList ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           getChargeList(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       DelCharge ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           delCharge(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       AddCharge ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           addCharge(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       EditCharge ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           editCharge(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       UpCharge ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           upCharge(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       GetFeaturePackByOrder ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           getFeaturePackByOrder(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       UpChargeByOrder ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           upChargeByOrder(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       UpFeaturePackByOrder ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           upFeaturePackByOrder(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       GetOrderTypeList ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           getOrderTypeList(params).then(res => {
//                 resolve(res)
//             })
//         })
//       },
//       // 区域复制
//       CopyUrlJsonList ({state, commit, dispatch}, params) {
//         return new Promise((resolve, reject) => {
//           copyUrlJsonList(params).then(res => {
//                 resolve(res)
//             })
//         })
//       }
//     }
// }
// export default func
