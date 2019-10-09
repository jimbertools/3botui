import emailNavigation from '../../components/emailnavigation'
import fullEmail from '../../components/fullemail'
import emailListItem from '../../components/emaillistitem'
import { mapGetters, mapActions } from 'vuex'
import { VueEditor } from 'vue2-editor'

export default {
  name: 'mails',
  components: { VueEditor, emailNavigation, fullEmail, emailListItem },
  props: [],
  data () {
    return {
      showCreateMail: false,
      showBodyOfCreateMail: true,
      openMail: null,
      selected: [],
      extraInputOptions: true,
      currentBox: 'inbox',
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
        return m.folder === this.currentBox
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
      this.currentMail = {
        From: '',
        To: '',
        subject: '',
        body: ''
      }
    },
    selectMailBox (box) {
      this.currentBox = box.name
    }
  }
}
