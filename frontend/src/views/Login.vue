<template>
  <v-app>
    <v-container>
      <v-layout>
        <v-flex xs6 offset-xs3>
          <div class="center-content">
            <h2>Login With Credencials</h2>
            <v-spacer></v-spacer>
            <v-alert type="error" :value="loginError">{{ loginError }}</v-alert>
            <v-text-field label="email" placeholder="Email"
            type="email" :value="loginEmail" @input="setLoginEmail">
            </v-text-field>
            <v-text-field label="Password" placeholder="Password"
            type="password" :value="loginPassword" @input="setLoginPassword">
            </v-text-field>
            <v-btn color="teal" dark @click="login">
              <v-icon class="pr-3">mdi-fingerprint</v-icon>Login
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('auth', [
      'loginEmail',
      'loginPassword',
      'loginError',
    ]),
  },

  methods: {
    ...mapMutations('auth', [
      'setLoginEmail',
      'setLoginPassword',
    ]),
    ...mapActions('auth', ['login']),
  },
};
</script>

<style lang="scss">
.center-content {
  margin: 3rem auto;
  text-align: center;
}
</style>
