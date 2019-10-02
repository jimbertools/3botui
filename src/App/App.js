import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {},
  props: [],
  data () {
    return {
      showDialog: false,
      showBadge: true,
      menu: false
    }
  },
  computed: {
    ...mapGetters([
      'apps',
      'activeApps'
    ]),
    routes () {
      return this.$router.options.routes
    },
    topRoutes () {
      var routes = this.routes.filter(r => r.meta.position === 'top' && !r.meta.hidden && !r.meta.appName)
      var activeApps = this.activeApps(this.$router.options.routes)

      return routes.concat(activeApps)
    },
    bottomRoutes () {
      return this.routes.filter(r => r.meta.position == 'bottom' && !r.meta.hidden)
    },
    showOverlay () {
      var hasApps = this.apps && !!this.apps.length
      var isLoading = this.$wait.is('getApps')
      return !hasApps && isLoading
    }
  },
  mounted () {
    this.getApps()
  },
  methods: {
    ...mapActions([
      'getApps'
    ])
  }
}
