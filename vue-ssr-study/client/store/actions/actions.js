// import api from '../../api'
import api from 'model'
// import createDb from '../../../server/db/db'
//
// const db = createDb()

export default {
  login ({ commit }, pramas) {
    return new Promise((resolve, reject ) => {
      api.gaLogin(pramas).then(response => {
        const data = response.msg;
        console.log(data);
        commit('doLogin', data)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },
  getUserInfo({ commit }) {
    return new Promise((resolve, reject ) => {
      api.getUserInfo({bulid_time:new Date().getTime()}).then(response => {
        const data = response.msg;
        commit('doLogin', data)
      })
    })
  },
  getCities({ commit }) {
    return new Promise((resolve, reject ) => {
      api.getCities().then(resp => {
        // console.log('resp', resp);
        const data = resp.msg;
        commit('getCities', data)
        resolve()
      })
      .catch(err => {
        // handleError(err)
        console.log(err);
        reject(err)
      })
    })
  },
  getPos({ commit }, pramas) {
    return new Promise((resolve, reject ) => {
      api.getAdPos(pramas).then(response => {
        const data = response.msg;
        commit('getPos', data)
        // resolve(response)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  }
}
