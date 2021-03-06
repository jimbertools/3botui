import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import Config from '../../../public/config'
import store from '../../store'
import { mapActions, mapGetters } from 'vuex'
import JanusWrapper from '../../plugins/janus.videoroom'

export default {
  name: 'freeflowconnect',
  components: {},
  props: [],
  data () {
    return {
      message: null,
      expanded: false,
      showCreateRoomDialog: false,
      roomName: null,
      janus: null,
      muted: false,
      published: false
    }
  },
  computed: {
    ...mapGetters(['currentRoom', 'account']),
    roomNameFromRoute () {
      return this.$route.params.roomName
    },
    getUsers () {
      let myUser = this.currentRoom.users.filter((userName) => userName === this.account)
      let otherUsers = this.currentRoom.users.filter((userName) => userName !== this.account)
      return myUser.concat(otherUsers)
    }
  },
  mounted () {
    Vue.use(new VueSocketIO({
      debug: true,
      connection: Config.apiUrl + '/rooms-ws',
      vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
      }
    }))

    console.log('mounted !!!!!!!!!!!!!!!!!!!')
    console.log(this.account)
    console.log(this.roomName)
    console.log(this.roomNameFromRoute)

    this.roomName = this.roomNameFromRoute

    if (this.account === null || this.account === undefined) {
      console.log('this.userName: ' + this.account)
      this.showCreateRoomDialog = true
      return
    }

    if (this.roomName === null || this.roomName === undefined) {
      console.log('this.userName: ' + this.account)
      this.showCreateRoomDialog = true
      return
    }

    if (this.roomNameFromRoute !== undefined) {
      // join the room
      this.setCurrentRoom(this.roomNameFromRoute)
      this.$socket.emit('joinRoom', { room: this.roomNameFromRoute, user: this.account })

      this.janus = new JanusWrapper(this.roomName)
      console.log(this.janus)
    } else {
      // don't join the room
    }
  },
  methods: {
    ...mapActions(['setCurrentRoom', 'getCurrentRoom', 'clearCurrentRoom']),
    confirmRoomName () {
      this.showCreateRoomDialog = false
      console.log('Helloooooo: ' + this.roomName)
      this.createRoom()
    },
    createRoom (events) {
      console.log('Creating room')
      if (this.roomName !== null) {
        if (this.roomNameFromRoute === null || this.roomNameFromRoute === undefined) {
          //           this.roomName = this.roomName + '-' + Math.random().toString(36).substring(2, 15).toUpperCase()
          console.log('temp!!!!!!! VUE router not in threebot yet')
          this.$router.push({
            name: 'connectWithRoom', params: { roomName: this.roomName }
          })
        } else {
          this.roomName = this.roomNameFromRoute
        }

        console.log('Setting current roomName: ' + this.roomName)

        this.setCurrentRoom(this.roomName)
        this.$socket.emit('joinRoom', { room: this.roomName, user: this.account })

        this.janus = new JanusWrapper(this.roomName)
        console.log(this.janus)
      }
    },
    leave () {
      console.log('We are going to attempt to disconnect.')
      this.janus.disconnect()
    },
    join () {
      console.log('We are going to attempt to connect.')
      this.janus.connect(this.roomName)
    },
    showUsers () {
      console.log('showUsers in room ', this.roomName)
      this.janus.showUsers(this.roomName)
    },
    toggleMute () {
      console.log('Toggling microphone')

      var isMuted = this.janus.toggleMute()
      this.muted = isMuted
    },
    unpublish () {
      console.log('Unpublishing feed')
      this.janus.unpublishOwnFeed()
      this.published = !this.published
    },
    publish () {
      console.log('Publishing feed')
      this.janus.publishOwnFeed(true)
      this.published = !this.published
    }
  },
  destroyed: function () {
    console.log('Destroyed lifecycle .... ')
    this.message = null
    this.expanded = false
    this.showCreateRoomDialog = false
    this.roomName = null
    this.janus = null
    this.muted = false
    this.published = false

    this.clearCurrentRoom()
  }
}
