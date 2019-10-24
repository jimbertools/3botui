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
    mail.attachments = []
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
  },
  updateFolder (id, folder) {
    return Axios.post(`${config.jsApiUrl}mail/move_message`, {
      args: {
        mail_id: id,
        folder_name: folder
      }
    })
  },
  updatePriority (id, priority) {
    return Axios.post(`${config.jsApiUrl}mail/update_priority`, {
      args: {
        mail_id: id,
        priority: priority
      }
    })
  }
})
