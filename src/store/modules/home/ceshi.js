import Vue from 'vue'
import Service from '@/services/contract'

const state = {}

const getters = {
  getVoiceprompt: (state) => () => {
    return state['voiceprompt'] || {
      name: 'HomeCard'
    }
  }
}

const mutations = {
  setPrompt (state, data) {
    console.log(data, 'voiceprompt')
    Vue.set(state, 'voiceprompt', [
      data.voiceprompt
    ])
  }
}

const actions = {
  async getList ({commit}, data) {
    const res = await Service.getDetail(data)
    commit('setPrompt', {voiceprompt: res.data})
  }
}

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
}
