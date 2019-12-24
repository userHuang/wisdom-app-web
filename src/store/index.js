import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

import ceshi from './modules/home/ceshi'

const debug = process.env.NODE_ENV !== 'production'

if (debug) Vue.use(Vuex)

const state = {
  app: {
    userInfo: {},
    currentDevice: {}
  }
}

export default new Vuex.Store({
  strict: debug,
  state,
  actions,
  getters,
  mutations,
  modules: {
    ceshi
  }
})
