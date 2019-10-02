import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'appstore',
  components: {},
  props: [],
  data () {
    return {
      showDialog: false,
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
    ])
  }
}
