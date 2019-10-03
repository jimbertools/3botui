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
      userName: null,
      janus: null,
      muted: false,
      published: false
    }
  },
  computed: {
    ...mapGetters(['currentRoom']),
    roomNameFromRoute () {
      return this.$route.params.roomName
    },
    getUsers () {
      let myUser = this.currentRoom.users.filter((userName) => userName === this.userName)
      let otherUsers = this.currentRoom.users.filter((userName) => userName !== this.userName)
      return myUser.concat(otherUsers)
    }
  },
  mounted () {
    this.roomName = this.roomNameFromRoute

    if (this.userName === null || this.userName === undefined) {
      this.showCreateRoomDialog = true
      return
    }

    if (this.roomNameFromRoute !== undefined) {
      // join the room
      this.setCurrentRoom(this.roomNameFromRoute)
      this.$socket.emit('joinRoom', { room: this.roomNameFromRoute, user: this.userName })

      this.janus = new JanusWrapper(this.roomName)
      console.log(this.janus)
    } else {
      // don't join the room
    }
  },
  methods: {
    ...mapActions(['setCurrentRoom', 'getCurrentRoom']),

    confirmRoomName () {
      this.showCreateRoomDialog = false
      console.log('Helloooooo: ' + this.roomName)
      this.createRoom()
    },

    createRoom (events) {
      if (this.roomName !== null) {
        if (this.roomNameFromRoute === null || this.roomNameFromRoute === undefined) {
//           this.roomName = this.roomName + '-' + Math.random().toString(36).substring(2, 15).toUpperCase()
            console.log("temp!!!!!!! VUE router not in threebot yet");
          this.$router.push({
            name: 'connectWithRoom', params: { roomName: this.roomName }
          })
        } else {
          this.roomName = this.roomNameFromRoute
        }

        this.setCurrentRoom(this.roomName)
        this.$socket.emit('joinRoom', { room: this.roomName, user: this.userName })

        this.janus = new JanusWrapper(this.roomName)
        console.log(this.janus)
      }
    },
    leave: function () {
      console.log('We are going to attempt to disconnect.')
      this.janus.disconnect()
    },
    join: function () {
      console.log('We are going to attempt to connect.')
      this.janus.connect(this.roomName)
    },
    showUsers: function () {
      console.log('showUsers in room ', this.roomName)
      this.janus.showUsers(this.roomName)
    },
    toggleMute: function () {
      console.log('Toggling microphone')

      var isMuted = this.janus.toggleMute()
      this.muted = isMuted
    },
    unpublish: function () {
      console.log('Unpublishing feed')
      this.janus.unpublishOwnFeed()
      this.published = !this.published
    },
    publish: function () {
      console.log('Publishing feed')
      this.janus.publishOwnFeed(true)
      this.published = !this.published
    }
  }
}
