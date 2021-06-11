<template>
  <v-app>
    <v-container>
      <h1>Hello world from vue</h1>
      <v-btn color="primary" @click="openAlert">Open alert</v-btn>
      <v-btn color="success" @click="openLoader">Open loader</v-btn>
    </v-container>
    <alert-message ref="refAlertMessageTest"></alert-message>
    <loader ref="refLoaderTest" />
  </v-app>
</template>

<script>
import AlertMessage from './components/utilities/Alerts/AlertMessage.vue';
import Loader from './components/utilities/Loaders/Loader.vue';

export default {
  name: 'App',
  components: {
    AlertMessage,
    Loader,
  },
  methods: {
    openAlert() {
      // this.$refs.refAlertMessageTest.showAlertSimple('success', 'Test title');
      this.$refs.refAlertMessageTest.showAlertFull(
        'mdi-close-circle',
        'error',
        'Wrong credentials',
        '',
        5000,
        'right',
        'bottom'
      );
    },
    openLoader() {
      this.$refs.refLoaderTest.activate();
      setTimeout(() => {
        this.$refs.refLoaderTest.deactivate();
      }, 3000);
    },
  },
};
</script>

<style>
</style>

