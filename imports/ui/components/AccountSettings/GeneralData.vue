<template>
  <v-form>
    <v-card>
      <v-card-title>
        <div class="subtitle-2">General data</div>
      </v-card-title>
      <v-col>
        <v-card-text>
          <v-text-field
            v-model="user.name"
            id="inputName"
            name="name"
            disabled
            label="Name"
          />
          <v-text-field
            v-model="user.username"
            id="inputUsername"
            name="username"
            disabled
            label="Username"
          />
          <v-text-field
            v-model="user.email"
            id="inputEmail"
            name="email"
            disabled
            label="Email"
            type="email"
          />
          <v-text-field
            v-model="user.profile"
            id="inputProfile"
            name="profile"
            disabled
            label="Profile"
          />
        </v-card-text>
      </v-col>
    </v-card>
  </v-form>
</template>

<script>
export default {
  name: 'GeneralData',
  data() {
    return {
      user: {
        _id: '',
        name: '',
        username: '',
        email: '',
        profile: '',
      },
    };
  },
};
</script>
