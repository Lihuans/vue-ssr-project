import Vue from 'vue'
import  Vuex from 'vuex'

Vue.use(Vuex)

import defaultState from './state/state'
import mutations from './mutations/mutations'
import actions from './actions/actions'
import getters from './getters/getters'

export function createStore() {
  return new Vuex.Store({
    state: defaultState,
    actions,
    mutations,
    getters
  })
}
