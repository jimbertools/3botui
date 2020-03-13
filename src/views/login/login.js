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
    isLoggingIn() {
      try {
        const signedAttempt = JSON.parse(this.$route.query.signedAttempt);
        return signedAttempt.doubleName;
      } catch (err) {
        return false
      }
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
        let to = localStorage.getItem('loginRedirectUrl')
        if (to && to !== 'null' && to !== 'undefined') {
          localStorage.removeItem('loginRedirectUrl')
          window.location.href = to
        } else {
          this.$router.push({ name: 'home' })
        }
      }
    },
    loginUrl (val) {
      if (val) {
        window.location.href = val
      }
    }
  }
}
