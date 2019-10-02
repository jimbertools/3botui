import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins'
import VueWait from 'vue-wait'
import config from '../public/config' // add VueWait as Vue plugin

import VueSocketIO from 'vue-socket.io'
Vue.use(VueWait)

Vue.use(new VueSocketIO({
  debug: true,
  connection: `${config.apiUrl}/rooms-ws`,
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  wait: new VueWait({
    useVuex: true
  }),
  render: h => h(App)
}).$mount('#app')
