import Axios from 'axios'
import config from '../../public/config'
import moment from 'moment'
const headers = { headers: { 'Content-Type': 'application/json' } }
export default ({
  getMails () {
    return Axios.post(`${config.jsApiUrl}mail/list`)
  },
  sendMail (mail) {
    mail.date = moment(moment.utc()).format('MM/DD/YYYY HH:mm')
    mail.attachments = []
    mail.headers = ''
    mail = JSON.stringify(mail)
    console.log(mail)
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
