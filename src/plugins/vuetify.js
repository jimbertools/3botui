import '@fortawesome/fontawesome-pro/css/all.min.css'
import '@fortawesome/fontawesome-pro/css/duotone.min.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/src/styles/main.sass'
Vue.use(Vuetify)

export default new Vuetify({
  iconfont: 'fa',
  theme: {
    themes: {
      light: {
        primary: '#2d4052',
        secondary: '#57be8e'
      }
    }
  }
})
