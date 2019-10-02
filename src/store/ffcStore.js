import apiServices from '../services/apiServices'

export default ({
  state: {
    currentRoom: {
      name: null,
      users: []
    },
    userName: null
  },
  actions: {
    setCurrentRoom: (context, room) => {
      if (room != null) {
        // socketService.emit('joinRoom', { room, user: "alex" })
        apiServices.getRoom(room).then(response => {
          context.commit('setCurrentRoom', {
            name: room,
            ...response.data
          })
        })
      } else {
        context.commit('setCurrentRoom', room)
      }
    },
    setRooms: (context, rooms) => {
      context.commit('setRooms', rooms)
    },
    setUserName: (context, userName) => {
      context.commit('setUserName', userName)
    },
    sendMessage: (context, message) => {
      context.commit('sendMessage', message)
    },
    SOCKET_userJoined: (context, data) => {
      context.commit('addUserToCurrentRoom', data.user)
    },
    SOCKET_userLeft: (context, data) => {
      context.commit('removeUserFromCurrentRoom', data.user)
    }
  },
  mutations: {
    setCurrentRoom (state, room) {
      if (room == null) {
        state.currentRoom = {
          name: null,
          users: []
        }
        return
      }
      state.currentRoom = room
    },
    setRooms (state, rooms) {
      state.rooms = rooms
    },
    addUserToCurrentRoom (state, user) {
      if (state.currentRoom != null) {
        state.currentRoom.users.push(user)
      }
    },
    removeUserFromCurrentRoom (state, user) {
      if (state.currentRoom != null) {
        console.log('Removing user from current room', JSON.stringify(state.currentRoom), user)
        state.currentRoom.users.splice(state.currentRoom.users.indexOf(user), 1)
        delete state.currentRoom.users.indexOf(user)

        console.log('Done removing user from current room', JSON.stringify(state.currentRoom))
      }
    },
    setUserName (state, userName) {
      state.userName = userName
    }
  },
  getters: {
    currentRoom: state => state.currentRoom,
    rooms: state => state.rooms,
    currentPeers: state => state.currentPeers, // Doesn't exist?
    userName: state => state.userName,
    messages: state => state.messages
  }
})
