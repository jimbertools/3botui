import apiService from '../../services/apiServices'

export default {
  name: 'appstore',
  components: {},
  props: [],
  data () {
    return {
      showDialog: false,
      apps: []
      // services: [{
      //   name: '3Bot',
      //   installed: false
      // }, {
      //   name: 'Wordpress',
      //   installed: false
      // }, {
      //   name: 'Ubuntu',
      //   installed: false
      // }]
    }
  },
  computed: {

  },
  mutations: {
    
  },
  mounted () {
    apiService.getApps().then(response => {
      console.log(response.data)
      console.log("yay")
      this.apps = response.data
    })
  },
  methods: {
    installApp (app) {
      apiService.installApp(app.appname).then(response => {
        console.log(response.data)
        console.log("Install or uninstall")
        if(response.status == 200) {
          app.installed = true
        }
      })
    },
    uninstallApp (app) {
      apiService.uninstallApp(app.appname).then(response => {
        console.log(response.data)
        console.log("Install or uninstall")
        if(response.status == 200) {
          app.installed = false
        }
      })
    }
  }
}
