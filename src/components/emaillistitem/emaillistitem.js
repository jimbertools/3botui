import moment from 'moment'

export default {
  name: 'emaillistitem',
  components: {},
  props: ['email'],
  data () {
    return {

    }
  },
  computed: {
    body () {
      var html = this.email.body
      var div = document.createElement('div')
      div.innerHTML = html
      return div.textContent || div.innerText || ''
    },
    emailDate() {
      return moment(moment.unix(this.email.date)).from(moment());
    }
  },
  mounted () {

  },
  methods: {

  }
}
