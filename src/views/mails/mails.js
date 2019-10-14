import emailNavigation from '../../components/emailnavigation'
import fullEmail from '../../components/fullemail'
import emailListItem from '../../components/emaillistitem'
import { mapGetters, mapActions } from 'vuex'
import { VueEditor } from 'vue2-editor'
import { timingSafeEqual } from 'crypto'

import { Drag, Drop } from 'vue-drag-drop'

export default {
  name: 'mails',
  components: { VueEditor, emailNavigation, fullEmail, emailListItem, Drag, Drop },
  props: [],
  data () {
    return {
      showCreateMail: false,
      showBodyOfCreateMail: true,
      openMail: null,
      selected: [],
      extraInputOptions: true,
      currentBox: 'Inbox',
      sortingSelection: [
        'Date',
        'From',
        'Subject'
      ],
      currentMail: {
        From: '',
        To: '',
        subject: '',
        body: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'mails'
    ]),
    filterMailbox: function () {
      return this.mails.filter((m) => {
        return m.folder.toLowerCase() === this.currentBox.toLowerCase()
      })
    }
  },
  mounted () {
    this.getMails()
  },
  methods: {
    ...mapActions([
      'getMails',
      'sendMail'
    ]),
    openTheMail (mail) {
      this.openMail = mail
    },
    sendMailBtn () {
      this.sendMail(this.currentMail)
      this.clearNewMail()
    },
    removeMail () {
      this.openMail = null
    },
    clearNewMail () {
      this.showCreateMail = false
      this.changeCurrentMail('', '', '', '')
    },
    selectMailBox (box) {
      this.currentBox = box.name
    },
    replyToMail (originalMail) {
      this.changeCurrentMail(
        originalMail.to_email,
        originalMail.from_email,
        'Re: ' + originalMail.subject,
        '<p></p><p>--------- Original mail ----------</p>' + originalMail.body
      )
      this.showCreateMail = true
    },
    forwardMail (originalMail) {
      this.changeCurrentMail(
        originalMail.to_email,
        '',
        'Fwd: ' + originalMail.subject,
        '<p></p><p>--------- Forwarded mail ----------</p>' + originalMail.body
      )
      this.showCreateMail = true
    },
    changeCurrentMail (from, to, subject, body) {
      this.currentMail = {
        From: from,
        To: to,
        subject: subject,
        body: body
      }
    }
  }
}
