<template>
  <v-app>
    <router-view name="allPageView" />
    <alert-message />
    <loader />
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
};
</script>

<style></style>
