import emailNavigation from '../../components/emailnavigation'
import fullEmail from '../../components/fullemail'
import emailListItem from '../../components/emaillistitem'
import richInput from '../../components/richinput'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'mails',
  components: { emailNavigation, fullEmail, emailListItem, richInput },
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
        to:"",
        subject:"",
        body:"",
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
      "sendMail"
    ]),
    openTheMail (mail) {
      this.openMail = mail
    }
  }
}
