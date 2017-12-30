import Vue from 'vue'
import Vuex from 'vuex'

import Races from '@/store/modules/Races.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    caption: "Шаблоны классов для игры 'The Elder Scrolls V: Skyrim'"
  },
  modules: {
    races: Races
  },
  getters: {
    caption (state) {
      return state.caption
    },
  },
  mutations: {
    caption (state, value) {
      state.caption = value
    }
  },
  actions: {
    caption ({ state, dispatch, commit }, value) {
      setTimeout(() => {
        commit('caption', value)
      }, 1000)
    }
  }
})
