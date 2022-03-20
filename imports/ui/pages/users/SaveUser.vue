<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="headline">Create user</div>
      </v-col>
      <v-col cols="2">
        <v-btn block type="submit" form="saveUser" color="primary">
          Create
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <v-form @submit.prevent="saveUser" id="saveUser" autocomplete="off">
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
                    v-model="user.name"
                    id="inputName"
                    name="name"
                    label="Name"
                  />
                  <v-select
                    v-model="user.profile"
                    id="selectProfile"
                    :items="profiles"
                    item-text="description"
                    item-value="name"
                    name="profile"
                    label="Profile"
                  />
                  <v-text-field
                    v-model="user.username"
                    id="inputUsername"
                    name="username"
                    label="Username"
                  />
                  <v-text-field
                    v-model="user.email"
                    id="inputEmail"
                    type="email"
                    name="email"
                    label="Email"
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
  name: 'SaveUser',
  data() {
    return {
      user: {
        _id: '',
        name: '',
        username: '',
        email: '',
        profile: '',
      },
      profiles: [
        {
          name: 'admin',
          description: 'Admin',
        },
        {
          name: 'chat',
          description: 'User',
        },
      ],
    };
  },
  methods: {
    saveUser() {},
  },
};
</script>
