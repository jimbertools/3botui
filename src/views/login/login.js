import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'login',
  components: {},
  props: ['takeMeTo'],
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
      return !!this.$route.query.username
    }
  },
  mounted () {
    if (this.isLoggingIn) {
      this.checkResponse(new URL(window.location.href))
    } else {
      console.log(this.$route)
      console.log(this.$route.takeMeTo)
      this.generateLoginUrl(this.$route.query.takeMeTo)
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
        let to = 'home'
        if (this.$route.query.takeMeTo) {
          to = decodeURIComponent(this.$route.query.takeMeTo)
          console.log(`/${to}`)
          window.location.href = `/${to}`
        } else {
          this.$router.push({ name: to })
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
