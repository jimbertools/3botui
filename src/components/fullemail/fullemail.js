import moment from 'moment'
import mailService from '../../services/mailService'
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
    deleteMailBtn () {
      this.deleteMail(this.email.id)
      this.$emit('removed')
    }
  }
}
