import appService from '../services/appServices'
export default ({
  state: {
    apps: []
  },
  actions: {
    getApps: (context) => {
      appService.getApps().then(response => {
        context.commit('setApps', response.data.apps)
      })
    },
    installApp: (context, appName) => {
      appService.installApp(appName).then(response => {
        if (response.status === 200) {
          context.commit('updateApp', { name: appName, installed: true })
        }
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
    apps: (state) => state.apps
  }
})
