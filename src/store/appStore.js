import appService from '../services/appServices'
export default ({
  state: {
    apps: []
  },
  actions: {
    getApps: (context) => {
      context.dispatch('wait/start', 'getApps', { root: true })
      appService.getApps().then(response => {
        context.dispatch('wait/end', 'getApps', { root: true })
        context.commit('setApps', response.data.apps)
      })
    },
    installApp: (context, appName) => {
      context.dispatch('wait/start', 'installApp', { root: true })
      appService.installApp(appName).then(response => {
        context.dispatch('wait/end', 'installApp', { root: true })
        context.commit('updateApp', { name: appName, installed: true })
      })
    },
    uninstallApp: (context, appName) => {
      appService.uninstallApp(appName).then(response => {
        if (response.status === 200) {
          context.commit('updateApp', { name: appName, installed: false })
        }
      })
    }
  },
  mutations: {
    setApps: (state, apps) => { state.apps = apps },
    updateApp: (state, app) => {
      state.apps.find(x => x.name === app.name).installed = app.installed
    }
  },
  getters: {
    apps: (state) => state.apps,
    activeApps: (state) => (routes) => {
      var activeApps = []
      state.apps.forEach(app => {
        if (app.installed) {
          var appRoute = routes.find(x => x.meta.appName === app.appName)
          activeApps.push(appRoute)
        }
      })
      return activeApps
    }
  }
})
