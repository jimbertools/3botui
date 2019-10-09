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
    ])
  },
  mounted () {
    this.getMails()
  },
  methods: {
    ...mapActions([
      'getMails',
      'sendMail',
      'deleteMail'
    ]),
    openTheMail (mail) {
      this.openMail = mail
    },
    sendMailBtn () {
      this.sendMail(this.currentMail)
    },
    removeMail () {
      this.openMail = null
    }
  }
}
