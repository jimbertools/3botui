import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'appstore',
  components: {},
  props: [],
  data () {
    return {
      selectedApp: null
    }
  },
  computed: {
    ...mapGetters([
      'apps'
    ])
  },
  mutations: {

  },
  mounted () {
    this.getApps()
  },
  methods: {
    ...mapActions([
      'installApp',
      'getApps',
      'uninstallApp'
    ]),
    closeDialog (save) {
      if (save) {
        if (this.selectedApp.installed) {
          this.uninstallApp(this.selectedApp)
        } else {
          this.installApp(this.selectedApp)
        }
      }
      this.selectedApp = null
    }
  }
}
