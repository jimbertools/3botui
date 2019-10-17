import Vue from 'vue'
import Vuex from 'vuex'
import appStore from './appStore'
import contactStore from './contactStore'
import ffcStore from './ffcStore'
import authStore from './authStore'
import mailStore from './mailStore'
import calendarStore from './calendarStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appStore,
    contactStore,
    ffcStore,
    authStore,
    mailStore,
    calendarStore
  }
})
