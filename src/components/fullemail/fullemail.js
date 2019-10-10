import moment from 'moment'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'fullemail',
  components: {},
  props: ['email'],
  data () {
    return {

    }
  },
  computed: {
    emailDate () {
      return moment.unix(this.email.date).format("DD/MM/YYYY")
    },
    emailTime () {
      return moment.unix(this.email.date).format("hh:mm A")
    }
  },
  mounted () {

  },
  methods: {
    ...mapActions([
      'deleteMail'
    ]),
    deleteThisMail () {
      this.deleteMail(this.email.id)
      this.$emit('removed')
    },
    replyToMail () {
      this.$emit('replyToMail', this.email)
    },
    forwardMail () {
      this.$emit('forwardMail', this.email)
    }
  }
}
