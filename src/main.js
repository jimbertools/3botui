import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins'
import VueWait from 'vue-wait'
Vue.use(VueWait) // add VueWait as Vue plugin

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
