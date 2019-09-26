export default {
  name: 'appstore',
  components: {},
  props: [],
  data () {
    return {
      showDialog: false,
      apps: [{
        name: 'Mail'
      }, {
        name: 'Contacts'
      }, {
        name: 'Calendar'
      }, {
        name: 'Wallet'
      }, {
        name: 'Browser'
      }, {
        name: 'FF Connect'
      }],
      services: [{
        name: '3Bot'
      }, {
        name: 'Wordpress'
      }, {
        name: 'Ubuntu'
      }]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
