import Axios from 'axios'
import config from '../../public/config'

export default ({
  getApps () {
    return Axios.post(`${config.jsApiUrl}apps/get`)
  },
  installApp (appname) {
    return Axios.post(`${config.jsApiUrl}apps/update`, {
      args: {
        name: appname,
        installed: true
      }
    })
  },
  uninstallApp (appname) {
    return Axios.post(`${config.jsApiUrl}apps/update`, {
      args: {
        name: appname,
        installed: false
      }
    })
  }
})
