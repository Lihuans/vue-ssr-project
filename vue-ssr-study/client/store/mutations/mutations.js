export default {
  updateCount (state, num) {
    state.count = num
  },
  doLogin (state, userInfo) {
    state.user = userInfo
  },
  getCities (state, data) {
    // console.log('121312314124========',data);
    state.cities = data
    state.count = 11
  },
  getPos (state, data) {
    state.data = data
  }
}
