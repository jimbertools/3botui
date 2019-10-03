import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'login',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'loginUrl',
      'account'
    ]),
    isLoggingIn () {
      return !!window.location.search
    }
  },
  mounted () {
    if (this.isLoggingIn) {
      this.checkResponse(new URL(window.location.href))
    } else {
      this.generateLoginUrl()
    }
  },
  methods: {
    ...mapActions([
      'generateLoginUrl',
      'checkResponse'
    ])
  },
  watch: {
    account (val) {
      if (val) {
        this.$router.push({ name: 'home' })
      }
    },
    loginUrl (val) {
      if (val) {
        window.location.href = val
      }
    }
  }
}
