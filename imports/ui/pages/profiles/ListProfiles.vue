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
        </v-data-table>
        <modal-remove
          ref="refModalRemove"
          v-bind:modalData="profileTemp"
          @id_element="deleteProfile"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ModalRemove from '../../components/utilities/Modals/ModalRemove.vue';

export default {
  name: 'ListProfiles',
  components: {
    ModalRemove,
  },
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
      profileTemp: {
        preposition: 'al',
        typeElement: 'profile',
        mainNameElement: '',
        _id: '',
        element: {},
      },
    };
  },
  methods: {
    openUpdateProfile(profile) {
      this.$router.push({ name: 'ProfilesUpdate' });
    },
    deleteProfile(idProfile) {},
    openRemoveModal(profile) {
      this.profileTemp.element = profile;
      this.profileTemp._id = profile._id;
      this.profileTemp.title = 'Remove profile';
      this.profileTemp.message = `Are you sure to remove ${profile.name}?`;
      this.$refs.refModalRemove.dialog = true;
    },
  },
};
</script>
