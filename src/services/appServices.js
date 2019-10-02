import Axios from 'axios'
import config from '../../public/config'

export default ({
  getApps () {
    return Axios.post(`${config.jsApiUrl}apps/get`)
  },
  installApp (appName) {
    return Axios.post(`${config.jsApiUrl}apps/update`, {
      args: {
        name: appName,
        installed: true
      }
    })
  },
  uninstallApp (appName) {
    return Axios.post(`${config.jsApiUrl}apps/update`, {
      args: {
        name: appName,
        installed: false
      }
    })
  }
})
