import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import common from './modules/common'
import shares from './modules/shares'
Vue.use(Vuex)
const store = () => {
  return new Vuex.Store({
    modules: {
      user,
      common,
      shares
    },
    getters
  })
}
export default store
