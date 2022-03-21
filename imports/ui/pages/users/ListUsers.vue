<template>
  <v-container>
    <v-row justify="center">
      <v-col xs="12" sm="12" md="10" lg="8" xl="5">
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
          <template v-slot:item.action="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon
                  color="info"
                  v-on="on"
                  small
                  class="mr-2"
                  @click="openUpdateUser(item)"
                >
                  edit
                </v-icon>
              </template>
              <span>Update</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-icon
                  color="red"
                  v-on="on"
                  small
                  class="mr-2"
                  @click="openRemoveModal(item)"
                >
                  delete
                </v-icon>
              </template>
              <span>Remove</span>
            </v-tooltip>
          </template>
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
        <modal-remove
          ref="refModalRemove"
          v-bind:modalData="userTemp"
          @id_element="deleteUser"
        />
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ModalRemove from '../../components/utilities/Modals/ModalRemove.vue';

export default {
  name: 'ListUsers',
  components: {
    ModalRemove,
  },
  data() {
    return {
      headersFilter: {
        name: '',
        username: '',
        email: '',
      },
      users: [
        {
          _id: 1,
          name: 'Peter Parker',
          username: 'Spider Man',
          email: 'peter@parker.com',
        },
        {
          _id: 2,
          name: 'Tony Stark',
          username: 'Iron Man',
          email: 'tony@stark.com',
        },
        {
          _id: 3,
          name: 'Steve Rogers',
          username: 'Capitan America',
          email: 'steve@rogers.com',
        },
      ],

      userTemp: {
        preposition: 'al',
        typeElement: 'user',
        mainNameElement: '',
        _id: '',
        element: {},
      },
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
        {
          value: 'action',
          text: 'Options',
          sortable: false,
        },
      ];
    },
  },
  methods: {
    openUpdateUser(user) {
      this.$router.push({ name: 'UsersUpdate' });
    },
    deleteUser(idUser) {},
    openRemoveModal(user) {
      this.userTemp.element = user;
      this.userTemp._id = user._id;
      this.userTemp.title = 'Remove user';
      this.userTemp.message = `Are you sure to remove ${user.name}?`;
      this.$refs.refModalRemove.dialog = true;
    },
  },
};
</script>
