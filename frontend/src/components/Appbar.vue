<template>
  <v-toolbar color="teal darken-2" dark fixed>
    <v-toolbar-title>Daily Planer</v-toolbar-title>
    <v-toolbar-items>
      <v-btn text class="ml-5" v-if="isLoggedIn">
        <v-icon class="pr-2">mdi-playlist-check</v-icon>Projects
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text class="mr-2" to="/register" v-if="!isLoggedIn">
        <v-icon class="pr-2">mdi-account-box</v-icon>Register
      </v-btn>
      <v-btn text class="mr-2" to="/login" v-if="!isLoggedIn">
        <v-icon class="pr-2">mdi-fingerprint</v-icon>Login
      </v-btn>
      <v-btn text class="mr-2" v-if="isLoggedIn" @click="logout">
        <v-icon class="pr-2">mdi-exit-to-app</v-icon>Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {

  computed: {
    ...mapGetters('auth', [
      'isLoggedIn',
    ]),
  },
  methods: {
    ...mapActions('auth', [
      'logout',
    ]),
  },
};
</script>
