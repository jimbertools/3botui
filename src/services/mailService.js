import Axios from 'axios'
import config from '../../public/config'
const headers = { headers: { 'Content-Type': 'application/json' } }
export default ({
  getMails () {
    return Axios.post(`${config.jsApiUrl}mail/list`)
  },
  sendMail (mail) {
    return Axios.post(`${config.jsApiUrl}mail/send`, {
      args: {
        mail
      }
    }, headers)
  }/*,
  deleteContact (id) {
    return Axios.post(`${config.jsApiUrl}mail/remove`, {
      args: {
        contact_id: id
      }
    }, headers)
  }*/
})
