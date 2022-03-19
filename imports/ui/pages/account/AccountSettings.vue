<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="headline">Account settings</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="5">
        <general-data />
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="6" lg="6" offset-xl="1" xl="5">
        <update-password />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GeneralData from '../../components/AccountSettings/GeneralData.vue';
import UpdatePassword from '../../components/AccountSettings/UpdatePassword.vue';

export default {
  components: { GeneralData, UpdatePassword },
  name: 'AccountSettings',
};
</script>
