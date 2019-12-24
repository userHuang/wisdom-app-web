export const SET_CONFIG = function (state, cfg) {
  state.Config = cfg
}

export const SET_USER = function (state, user) {
  state.app.userInfo = user
}

export const SET_CURRENT_DEVICE = function (state, device) {
  console.log(device, 'SET_CURRENT_DEVICE')
  state.app.currentDevice = device
}
