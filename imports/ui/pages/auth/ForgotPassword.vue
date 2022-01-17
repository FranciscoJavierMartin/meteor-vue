<template>
  <div>
    <div class="d-flex flex-row justify-start">
      <v-btn color="primary" icon :to="{ name: 'login' }">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <div class="title">Back to login</div>
    </div>
    <v-form @submit.prevent="forgotPassword">
      <v-text-field
        v-model="user.email"
        id="inputEmail"
        name="email"
        type="email"
        label="Email"
      />
      <v-btn type="submit" color="primary" rounded> Send </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'ForgotPassword',
  data() {
    return {
      user: {
        email: '',
      },
    };
  },
  methods: {
    forgotPassword() {},
  },
};
</script>