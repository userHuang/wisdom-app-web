import Vue from 'vue'
import Service from '@/services/contract'

const state = {}

const getters = {
  getVoiceprompt: (state) => () => {
    return state['voiceprompt'] || {}
  }
}

const mutations = {
  setHistory (state, voiceprompt) {
    Vue.set(state, 'voiceprompt', [
      voiceprompt
    ])
  }
}

const actions = {
  async getList ({commit}, data) {
    const res = await Service.getDetail(data)
    commit('setHistory', {voiceprompt: res.data})
  }
}

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
}
