import Vuex from 'vuex'
import TestModule from './modules/TestModule'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    test: TestModule
  }
})

export default store
