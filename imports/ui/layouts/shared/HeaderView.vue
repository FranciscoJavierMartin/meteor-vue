<template>
  <v-app-bar
    app
    dark
    dense
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-toolbar-title>Scaffold Meteor + Vue</v-toolbar-title>
    <v-spacer></v-spacer>
    <UserLogged />
    <template v-slot:extension>
      <v-tabs v-model="optionSelected" align-with-title>
        <v-tab
          v-for="option in options"
          :key="option.title"
          v-text="option.title"
          :to="{ name: option.nameRoute }"
        >
          <h1>Hello</h1>
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import UserLogged from '../../components/UserLogged/UserLogged.vue';

export default {
  name: 'HeaderView',
  components: {
    UserLogged,
  },
  data() {
    return {
      optionSelected: 0,
      options: [
        {
          icon: 'home',
          title: 'Home',
          nameRoute: 'Home',
        },
        {
          icon: 'person',
          title: 'Users',
          nameRoute: 'ListUsers',
        },
        {
          icon: 'user-tag',
          title: 'Profiles',
          nameRoute: 'Profiles',
        },
      ],
    };
  },
};
</script>
