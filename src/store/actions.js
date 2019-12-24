export const setConfig = ({
  commit
}, cfg) => {
  commit('SET_CONFIG', cfg)
}

export const setUser = ({
  commit
}, user) => {
  commit('SET_USER', user)
}

export const setCurrentDevice = ({
  commit
}, device) => {
  commit('SET_CURRENT_DEVICE', device)
}
