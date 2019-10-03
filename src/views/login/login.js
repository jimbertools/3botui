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
    console.log(this.isLoggingIn)
    if (this.isLoggingIn) {
      console.log(this.checkResponse)
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
