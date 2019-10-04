<template>
  <v-app>
    <v-navigation-drawer mini-variant app class="primary rounded" dark>
      <v-layout column fill-height justify-end>
        <div>
          <v-toolbar color="secondary darken-2">
            <v-badge bottom right overlap color="primary">
              <template v-slot:badge>
                <v-icon size="12" dark>{{$route.meta.icon}}</v-icon>
              </template>
              <!--slot can be any component-->
              <v-avatar>
                <v-img src="./assets/logo.jpg" />
              </v-avatar>
            </v-badge>
          </v-toolbar>
        </div>
        <div>
          <v-list-item
            v-for="(route, i) in routes.filter(r => r.meta.position == 'top' && !r.meta.hide)"
            :key="i"
            @click="switchApplication(route)"
            active-class="secondary--text"
          >
            <v-list-item-icon>
              <v-icon>{{ route.meta.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="title text-capitalize">{{route.meta.displayName}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
        <v-spacer></v-spacer>
        <div>
          <v-list-item
            v-for="(route, i) in routes.filter(r => r.meta.position == 'bottom' && !r.meta.hide)"
            :key="i"
            @click="switchApplication(route)"
            active-class="secondary--text"
          >
            <v-list-item-icon>
              <v-icon>{{ route.meta.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="title text-capitalize">{{route.meta.displayName}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-layout>
    </v-navigation-drawer>
    <v-content class="content">
      <router-view></router-view>
    </v-content>
    <v-bottom-navigation
      v-if="$vuetify.breakpoint.mdAndDown"
      grow
      dark
      class="primary topround"
      app
      fixed
      shift
      :value="$route.name"
    >
      <v-btn
        :value="route.name"
        icon
        v-for="(route, i) in routes"
        :key="i"
        @click="switchApplication(route)"
      >
        <span>{{route.meta.displayName}}</span>
        <v-icon>{{route.meta.icon}}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: "App",
  components: {},
  data: () => ({
    showDialog: false,
    showBadge: true,
    menu: false
  }),
  methods: {
    ...mapActions(['setUserName']),
    switchApplication(route) {
      console.log('Going from ' + this.$router.currentRoute.name + ' to ' + route.name)

      if(this.$router.currentRoute.name === 'connect' || this.$router.currentRoute.name === 'connectWithRoom') {
        // Disconnect from room. 
        this.$socket.emit('leaveRoom', { room: this.currentRoom.name, user: this.userName })
      }

      if(this.$router.currentRoute.name !== route.name)
      this.$router.push(route)
    }
  },
  computed: {
    ...mapGetters(['currentRoom', 'userName']),
    routes() {
      return this.$router.options.routes;
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
body,
.content {
  background: #fafafa !important;
}
.topround {
  border-radius: 10px 10px 0 0 !important;
}
.full-round {
  border-radius: 10px !important;
  overflow: hidden;
}
.rounded {
  border-radius: 0 10px 10px 0 !important;
}
.v-menu__content,
.v-card {
  border-radius: 10px !important;
  overflow: hidden;
}
.v-card__title {
  font-size: 18px !important;
}
.v-navigation-drawer__border {
  display: none;
}
textarea {
  width: 100%;
  height: 100%;
}
</style>
