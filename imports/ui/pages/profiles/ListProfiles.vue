<template>
  <v-container>
    <v-row justify="center">
      <v-col xs="12" sm="8" md="6" lg="5" xl="5">
        <div class="d-flex flex-row-reverse mb-5">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                color="success"
                v-on="on"
                fab
                dark
                :to="{ name: 'ProfilesCreate' }"
              >
                <v-icon>add</v-icon>
              </v-btn>
            </template>
            <span>Add profile</span>
          </v-tooltip>
        </div>
        <v-data-table
          :headers="headers"
          :items="profiles"
          sort-by="name"
          class="elevation-1"
        >
          <template v-slot:item.action="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon
                  color="info"
                  v-on="on"
                  small
                  class="mr-2"
                  @click="openUpdateProfile(item)"
                >
                  edit
                </v-icon>
              </template>
              <span>Update</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon color="red" v-on="on" small class="mr-2">
                  delete
                </v-icon>
              </template>
              <span>Remove</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ListProfiles',
  data() {
    return {
      headers: [
        { value: 'description', text: 'Profile', sortable: true },
        { value: 'action', text: 'Options', sortable: false },
      ],
      profiles: [
        {
          _id: 1,
          name: 'admin',
          description: 'Admin',
        },
        {
          _id: 2,
          name: 'chat',
          description: 'Chat',
        },
      ],
    };
  },
  methods: {
    openUpdateProfile(profile) {
      this.$router.push({ name: 'ProfilesUpdate' });
    },
  },
};
</script>
