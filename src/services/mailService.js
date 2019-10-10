import Axios from 'axios'
import config from '../../public/config'
import moment from 'moment'
import { resolve } from 'url'
import { reject } from 'q'
const headers = { headers: { 'Content-Type': 'application/json' } }
export default ({
  getMails () {
    return new Promise((resolve, reject) => {
      resolve(
        { data: [
          {
            'from_email': 'ivan.coene@jimber.com',
            'to_email': 'jimber@jimber.org',
            'subject': 'Meeting',
            'folder': 'inbox',
            'mtime': 1570637730,
            'unseen': true,
            'recent': true,
            'headers': [
              {
                'key': 'Content-Type',
                'value': 'multipart/alternative; boundary="===============3306352382913990553=="'
              },
              {
                'key': 'MIME-Version',
                'value': '1.0'
              },
              {
                'key': 'from',
                'value': 'ivan.coene@jimber.com'
              },
              {
                'key': 'to',
                'value': 'jimber@jimber.org'
              },
              {
                'key': 'subject',
                'value': 'Meeting'
              },
              {
                'key': 'date',
                'value': '10/10/2019'
              }
            ],
            'attachments': [],
            'body': 'Can we have a meeting?',
            'htmlbody': '<html></html>',
            'date': 1570665600,
            'priority': false,
            'id': 4
          },
          {
            'from_email': 'tobias.chielens@jimber.com',
            'to_email': 'jimber@jimber.org',
            'subject': 'Hi Jimber',
            'folder': 'inbox',
            'mtime': 1570637793,
            'unseen': true,
            'recent': true,
            'headers': [
              {
                'key': 'Content-Type',
                'value': 'multipart/alternative; boundary="===============5314683770289150703=="'
              },
              {
                'key': 'MIME-Version',
                'value': '1.0'
              },
              {
                'key': 'from',
                'value': 'tobias.chielens@jimber.com'
              },
              {
                'key': 'to',
                'value': 'jimber@jimber.org'
              },
              {
                'key': 'subject',
                'value': 'Hi Jimber'
              },
              {
                'key': 'date',
                'value': '10/10/2019'
              }
            ],
            'attachments': [],
            'body': 'What a great company',
            'htmlbody': '<html></html>',
            'date': 1570665600,
            'priority': false,
            'id': 5
          },
          {
            'from_email': 'sdf',
            'to_email': 'sdf',
            'subject': 'sdf',
            'folder': 'Sent',
            'mtime': 1570639842,
            'unseen': true,
            'recent': true,
            'headers': [
              {
                'key': 'Content-Type',
                'value': 'text/plain; charset="us-ascii"'
              },
              {
                'key': 'MIME-Version',
                'value': '1.0'
              },
              {
                'key': 'Content-Transfer-Encoding',
                'value': '7bit'
              },
              {
                'key': 'from',
                'value': 'sdf'
              },
              {
                'key': 'to',
                'value': 'sdf'
              },
              {
                'key': 'subject',
                'value': 'sdf'
              },
              {
                'key': 'date',
                'value': '10/09/2019 16:49'
              }
            ],
            'attachments': [],
            'body': '<p><img src=x onerror=alert("Dag Ivan")></p>',
            'htmlbody': '',
            'date': 1570639740,
            'priority': false,
            'id': 6
          },
          {
            'from_email': 'sdf',
            'to_email': 'sdf',
            'subject': 'sdf',
            'folder': 'Sent',
            'mtime': 1570639857,
            'unseen': true,
            'recent': true,
            'headers': [
              {
                'key': 'Content-Type',
                'value': 'text/plain; charset="us-ascii"'
              },
              {
                'key': 'MIME-Version',
                'value': '1.0'
              },
              {
                'key': 'Content-Transfer-Encoding',
                'value': '7bit'
              },
              {
                'key': 'from',
                'value': 'sdf'
              },
              {
                'key': 'to',

                'value': 'sdf'
              },
              {
                'key': 'subject',
                'value': 'sdf'
              },
              {
                'key': 'date',
                'value': '10/09/2019 16:49'
              }
            ],
            'attachments': [],
            'body': '<p><img src=x onerror=alert("DagIvan")></p>',
            'htmlbody': '',
            'date': 1570639740,
            'priority': false,
            'id': 7
          },
          {
            'from_email': 'sdf',
            'to_email': 'sdf',
            'subject': 'sdf',
            'folder': 'Sent',
            'mtime': 1570639883,
            'unseen': true,
            'recent': true,
            'headers': [
              {
                'key': 'Content-Type',
                'value': 'text/plain; charset="us-ascii"'
              },
              {
                'key': 'MIME-Version',
                'value': '1.0'
              },
              {
                'key': 'Content-Transfer-Encoding',
                'value': '7bit'
              },
              {
                'key': 'from',
                'value': 'sdf'
              },
              {
                'key': 'to',
                'value': 'sdf'
              },
              {
                'key': 'subject',
                'value': 'sdf'
              },
              {
                'key': 'date',
                'value': '10/09/2019 16:49'
              }
            ],
            'attachments': [],
            'body': '<p><img src=x onerror=alert("Dag%20Ivan")></p>',
            'htmlbody': '',
            'date': 1570639740,
            'priority': false,
            'id': 8
          },
          {
            'from_email': 'sdf',
            'to_email': 'sdf',
            'subject': 'sdf',
            'folder': 'Sent',
            'mtime': 1570639922,
            'unseen': true,
            'recent': true,
            'headers': [
              {
                'key': 'Content-Type',
                'value': 'text/plain; charset="us-ascii"'
              },
              {
                'key': 'MIME-Version',
                'value': '1.0'
              },
              {
                'key': 'Content-Transfer-Encoding',
                'value': '7bit'
              },
              {
                'key': 'from',
                'value': 'sdf'
              },
              {
                'key': 'to',
                'value': 'sdf'
              },
              {
                'key': 'subject',
                'value': 'sdf'
              },
              {
                'key': 'date',
                'value': '10/09/2019 16:49'
              }
            ],
            'attachments': [],
            'body': '<p><img src=x onerror=alert("Dag_Ivan")></p>',
            'htmlbody': '',
            'date': 1570639740,
            'priority': false,
            'id': 9
          },
          {
            'from_email': 'test',
            'to_email': 'test',
            'subject': 'tset',
            'folder': 'Sent',
            'mtime': 1570692448,
            'unseen': true,
            'recent': true,
            'headers': [
              {
                'key': 'Content-Type',
                'value': 'text/plain; charset="us-ascii"'
              },
              {
                'key': 'MIME-Version',
                'value': '1.0'
              },
              {
                'key': 'Content-Transfer-Encoding',
                'value': '7bit'
              },
              {
                'key': 'from',
                'value': 'test'
              },
              {
                'key': 'to',
                'value': 'test'
              },
              {
                'key': 'subject',
                'value': 'tset'
              },
              {
                'key': 'date',
                'value': '10/10/2019 07:27'
              }
            ],
            'attachments': [],
            'body': '<p>test</p>',
            'htmlbody': '',
            'date': 1570692420,
            'priority': false,
            'id': 10
          }
        ] })
    })
    // return Axios.post(`${config.jsApiUrl}mail/list`)
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
