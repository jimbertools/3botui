import Axios from 'axios'
import config from '../../public/config'
import moment from 'moment'
import { resolve } from 'url'
import { reject } from 'q'
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
    return Axios.post(`${config.jsApiUrl}mail/send`, {
      args: {
        mail
      }
    }, headers)
  },
  deleteMail (id) {
    return Axios.post(`${config.jsApiUrl}mail/delete`, {
      args: {
        mail_id: id
      }
    }, headers)
  }
})
