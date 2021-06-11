<template>
  <v-app>
    <v-container>
      <h1>Hello world from vue</h1>
      <v-btn color="primary" @click="openAlert">Open</v-btn>
    </v-container>
    <alert-message ref="refAlertMessageTest"></alert-message>
  </v-app>
</template>

<script>
import AlertMessage from './components/utilities/AlertMessage.vue';

export default {
  name: 'App',
  components: {
    AlertMessage,
  },
  methods: {
    openAlert() {
      this.$refs.refAlertMessageTest.showAlertSimple('success', 'Test title');
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
  },
};
</script>

<style>
</style>

