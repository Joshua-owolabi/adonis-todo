<template>
  <v-app>
    <v-container>
      <v-layout>
        <v-flex xs6 offset-xs3>
          <div class="center-content">
            <h2>register view</h2>
            <v-spacer></v-spacer>
            <v-alert type="error" :value="registerError">{{ registerError }}</v-alert>
            <v-text-field label="Email" placeholder="Email"
            type="email" :value="registerEmail" @input="setRegisterEmail">
            </v-text-field>
            <v-text-field label="Password" placeholder="Password"
            type="password" :value="registerPassword" @input="setRegisterPassword">
            </v-text-field>
            <v-btn color="teal" dark @click="register">
              <v-icon class="pr-3">mdi-account-circle</v-icon>Register
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
      'registerEmail',
      'registerPassword',
      'registerError',
    ]),
  },

  methods: {
    ...mapMutations('auth', [
      'setRegisterEmail',
      'setRegisterPassword',
    ]),
    ...mapActions('auth', ['register']),
  },
};
</script>

<style lang="scss">
.center-content {
  margin: 3rem auto;
  text-align: center;
}
</style>
