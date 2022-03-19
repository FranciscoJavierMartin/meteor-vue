<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn color="default" dark text v-on="on" class="mr-5">
        John
        <v-icon>keyboard_arrow_down</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item href="#" :to="{ name: 'Account' }">Account</v-list-item>
      <v-list-item href="#">Logout</v-list-item>
    </v-list>
  </v-menu>
</template>
