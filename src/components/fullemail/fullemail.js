import moment from 'moment'

export default {
  name: 'fullemail',
  components: {},
  props: ['email'],
  data() {
    return {

    }
  },
  computed: {
    emailDate() {
      return moment.unix(this.email.date).format("DD/MM/YYYY")
    },
    emailTime() {
      return moment.unix(this.email.date).format("hh:mm A")
    }
  },
  mounted() {

  },
  methods: {

  }
}
