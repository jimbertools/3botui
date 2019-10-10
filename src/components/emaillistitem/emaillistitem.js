import moment from 'moment'
import { VueContext } from 'vue-context'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'emaillistitem',
  components: { VueContext },
  props: ['email'],
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'boxes'
    ]),
    body () {
      var html = this.email.body
      var div = document.createElement('div')
      div.innerHTML = html
      return div.textContent || div.innerText || ''
    },
    emailDate () {
      return moment(moment.unix(this.email.date)).from(moment())
    }
  },
  mounted () {

  },
  methods: {
    ...mapActions([
      'updateFolder'
    ]),
    moveMail (id, folder) {
      this.updateFolder(id, folder)
    }
  }
}
