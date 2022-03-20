<template>
  <v-container>
    <v-row justify="center">
      <v-col xs="12" sm="12" md="10" lg="8" xl="5">
        <div v-if="activeMainView">
          <div class="d-flex flex-row-reverse mb-5">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  color="success"
                  v-on="on"
                  fab
                  dark
                  :to="{ name: 'UsersCreate' }"
                >
                  <v-icon>add</v-icon>
                </v-btn>
              </template>
              <span>Add user</span>
            </v-tooltip>
          </div>
          <v-data-table
            :headers="headers"
            :items="users"
            sort-by="name"
            class="elevation-1"
          >
            <template v-slot:body.append="{ isMobile }">
              <tr v-if="!isMobile">
                <td>
                  <v-text-field
                    v-model="headersFilter.name"
                    type="text"
                    label="Name"
                  />
                </td>
                <td>
                  <v-text-field
                    v-model="headersFilter.username"
                    type="text"
                    label="Username"
                  />
                </td>
                <td>
                  <v-text-field
                    v-model="headersFilter.email"
                    type="text"
                    label="Email"
                  />
                </td>
              </tr>
            </template>
          </v-data-table>
        </div>
        <router-view name="usersOptionsView" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
      headersFilter: {
        name: '',
        username: '',
        email: '',
      },
      users: [
        {
          name: 'Peter Parker',
          username: 'Spider Man',
          email: 'peter@parker.com',
        },
        {
          name: 'Tony Stark',
          username: 'Iron Man',
          email: 'tony@stark.com',
        },
        {
          name: 'Steve Rogers',
          username: 'Capitan America',
          email: 'steve@rogers.com',
        },
      ],
      activeMainView: true,
    };
  },
  computed: {
    headers() {
      return [
        {
          value: 'name',
          text: 'Name',
          sortable: true,
          filter: (value) => {
            return (
              value &&
              value
                .toLocaleLowerCase()
                .includes(this.headersFilter.name.toLocaleLowerCase())
            );
          },
        },
        {
          value: 'username',
          text: 'Username',
          sortable: true,
          filter: (value) => {
            return (
              value &&
              value
                .toLocaleLowerCase()
                .includes(this.headersFilter.username.toLocaleLowerCase())
            );
          },
        },
        {
          value: 'email',
          text: 'Email',
          sortable: true,
          filter: (value) => {
            return (
              value &&
              value
                .toLocaleLowerCase()
                .includes(this.headersFilter.email.toLocaleLowerCase())
            );
          },
        },
      ];
    },
  },
  methods: {
    updateMainView() {
      const currentRoute = this.$router.currentRoute.name;
      this.activeMainView = currentRoute === 'Users';
    },
  },
  watch: {
    $route() {
      this.updateMainView();
    },
  },
  mounted() {
    this.updateMainView();
  },
};
</script>
