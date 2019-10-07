import Vue from 'vue'
import Vuex from 'vuex'
import appStore from './appStore'
import contactStore from './contactStore'
import ffcStore from './ffcStore'
import authStore from './authStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appStore,
    contactStore,
    ffcStore,
    authStore
  }
})
