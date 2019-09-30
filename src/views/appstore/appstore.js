import apiService from '../../services/apiServices'

export default {
  name: 'appstore',
  components: {},
  props: [],
  data () {
    return {
      showDialog: false,
      apps: []
     
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
      console.log(app)
      apiService.installApp(app.name).then(response => {
        console.log(app.name)
        console.log(response.data)
        console.log("Install")
        if(response.status == 200) {
          app.installed = true
        }
      })
    },
    uninstallApp (app) {
      console.log(app)
      apiService.uninstallApp(app.name).then(response => {
        console.log(app.name)
        console.log(response.data)
        console.log("uninstall")
        if(response.status == 200) {
          app.installed = false
        }
      })
    }
  }
}
