import Vue from 'vue'

const state = {}

const getters = {
  getControllValue: (state) => () => {
    return state['controllValue'] || {
      dnd: false,
      bluetooth: true,
      network: true,
      home: false,
      bright: 0,
      volume: 0
    }
  }
}

const mutations = {
  setValue (state, data) {
    Vue.set(state, 'controllValue', data)
  }
}

const actions = {
  updateStatus ({state, commit}, {name, value}) {
    const controllValue = state['controllValue'] || {
      dnd: false,
      bluetooth: true,
      network: true,
      home: false,
      bright: 0,
      volume: 0
    }
    const data = {...controllValue}
    data[name] = value
    commit('setValue', data)
  }
}

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
}
