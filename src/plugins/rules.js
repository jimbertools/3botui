import Vue from 'vue'

Vue.prototype.$rules = {
  required: v => !!v || 'This is required',
  email: v => (/.+@.+\..+/.test(v) || !v) || 'E-mail must be valid',
  noLongerThan100: v => (v && v.length <= 100) || 'This must be less than 100 characters'
}
