import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        icon: 'fas fa-home',
        position: 'top',
        displayName: 'Mail'
      }
    }, {
      path: '/mail',
      name: 'mail',
      component: () => import(/* webpackChunkName: "mails-page" */ './views/mails'),
      meta: {
        icon: 'fas fa-envelope-open',
        position: 'top',
        displayName: 'Mail'
      }
    }, {
      path: '/calendar',
      name: 'calendar',
      component: () => import(/* webpackChunkName: "calendar-page" */ './views/calendar'),
      meta: {
        icon: 'fas fa-calendar-alt',
        position: 'top',
        displayName: 'calendar'
      }
    }, {
      path: '/contacts',
      name: 'contacts',
      component: () => import(/* webpackChunkName: "contacts-page" */ './views/contacts'),
      meta: {
        icon: 'fas fa-address-book',
        position: 'top',
        displayName: 'contacts'
      }
    }, {
      path: '/freeflowconnect',
      name: 'connect',
      component: () => import(/* webpackChunkName: "freeflowconnect-page" */ './views/freeflowconnect'),
      meta: {
        icon: 'fas fa-comments',
        position: 'top',
        displayName: 'FreeFlow Connect'
      }
    }, {
      path: '/appstore',
      name: 'dapps',
      component: () => import(/* webpackChunkName: "appstore-page" */ './views/appstore'),
      meta: {
        icon: 'fas fa-th',
        position: 'bottom',
        displayName: 'ADApps'
      }
    }
  ]
})
