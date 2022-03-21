<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="headline">{{ dataView.title }}</div>
      </v-col>
      <v-col cols="2">
        <v-btn
          block
          type="submit"
          form="saveProfile"
          color="primary"
          v-text="dataView.targetButton"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <v-form
              @submit.prevent="saveProfile"
              id="saveProfile"
              autocomplete="off"
            >
              <v-row>
                <v-col xs="12" sm="12" md="4">
                  <img
                    src="/img/vuetify.png"
                    alt="Upload image"
                    width="150px"
                  />
                </v-col>
                <v-col xs="12" sm="12" md="8">
                  <v-text-field
                    v-model="profile.name"
                    id="inputName"
                    name="name"
                    label="Name"
                  />

                  <v-text-field
                    v-model="profile.description"
                    id="inputDescription"
                    name="description"
                    label="Description"
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title> Profile permissions </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="searchSelfPermission"
              placeholder="Search"
              id="inputSearchSelfPermission"
              name="profileName"
            />
          </v-card-text>
          <v-sheet
            id="scrolling-techniques-2"
            class="overflow-y-auto"
            max-height="500"
          >
            <v-list style="height: 400px">
              <v-list-item-group>
                <draggable :list="selfPermissions" group="permissions">
                  <v-list-item
                    v-for="permission in filteredSelfPermissions"
                    :key="permission._id"
                    v-text="permission._id"
                  >
                  </v-list-item>
                </draggable>
              </v-list-item-group>
            </v-list>
          </v-sheet>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title> All permissions </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="searchPermission"
              placeholder="Search"
              id="inputSearchPermission"
              name="profileName2"
            />
          </v-card-text>
          <v-sheet
            id="scrolling-techniques-3"
            class="overflow-y-auto"
            max-height="500"
          >
            <v-list style="height: 400px">
              <v-list-item-group>
                <draggable :list="allPermissions" group="permissions">
                  <v-list-item
                    v-for="permission in filterPermissions"
                    :key="permission._id"
                    v-text="permission._id"
                  >
                  </v-list-item>
                </draggable>
              </v-list-item-group>
            </v-list>
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'SaveProfile',
  components: {
    draggable,
  },
  data() {
    return {
      profile: {
        _id: '',
        name: '',
        description: '',
        permissions: [],
      },
      dataView: {
        title: '',
        targetButton: '',
      },
      searchSelfPermission: '',
      searchPermission: '',
      selfPermissions: [],
      allPermissions: [
        { _id: 'users-view' },
        { _id: 'users-create' },
        { _id: 'users-update' },
        { _id: 'users-delete' },
      ],
    };
  },
  methods: {
    saveProfile() {},
    updateTexts() {
      if (this.$router.currentRoute.name === 'ProfilesUpdate') {
        this.dataView.title = 'Update profile';
        this.dataView.targetButton = 'Update';
      } else if (this.$router.currentRoute.name === 'ProfilesCreate') {
        this.dataView.title = 'Create profile';
        this.dataView.targetButton = 'Create';
      }
    },
  },
  computed: {
    filteredSelfPermissions() {
      return this.selfPermissions.filter((permission) =>
        permission._id
          .toLowerCase()
          .includes(this.searchSelfPermission.toLowerCase())
      );
    },
    filterPermissions() {
      return this.allPermissions.filter((permission) =>
        permission._id
          .toLowerCase()
          .includes(this.searchPermission.toLowerCase())
      );
    },
  },
  created() {
    this.updateTexts();
  },
  watch: {
    '$route.name'() {
      this.updateTexts();
    },
  },
};
</script>
