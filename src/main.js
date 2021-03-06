import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins'
import VueWait from 'vue-wait'

Vue.use(VueWait)

router.beforeEach((to, from, next) => {
  if ((to.name !== 'login' && to.name !== 'error') && !store.state.authStore.account) {
    localStorage.setItem('loginRedirectUrl', window.location.href)
    next({
      name: 'login'
    })
  } else {
    next()
  }
})

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
