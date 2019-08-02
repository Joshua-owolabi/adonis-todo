<template>
  <v-app>
    <AppBar/>
    <div id="app">
     <router-view/>
    </div>
  </v-app>
</template>

<script>
import AppBar from './components/Appbar.vue';

export default {
  name: 'App',
  components: {
    AppBar,
  },
  data: () => ({
    //
  }),
};
</script>
