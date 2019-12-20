import Vue from 'vue'
import Vuex from 'vuex'
import Config from '@/extend/config'
import Metadata from './metadata'
import ceshi from './modules/home/ceshi'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const debug = process.env.NODE_ENV !== 'production'

if (debug) Vue.use(Vuex)

const state = {
  app: {
    userInfo: {},
  },
  Config,
  Metadata
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
