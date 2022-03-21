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
  </v-container>
</template>

<script>
export default {
  name: 'SaveProfile',
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
