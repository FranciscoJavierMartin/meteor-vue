<template>
  <div class="login-wrapper">
    <div class="title secondary--text">Wellcome</div>
    <div class="display-1 mb-0 secondary--text">Login</div>
    <v-form @submit.prevent="login" autocomplete="nope">
      <v-text-field
        id="inputUser"
        v-model="user.userOrEmail"
        label="Username"
        name="email"
        prepend-icon="person"
        color="primary"
        type="text"
      />
      <v-text-field
        id="inputPassword"
        v-model="user.password"
        label="Password"
        name="passwordl"
        prepend-icon="lock"
        type="password"
      />
      <div class="d-flex justify-end">
        <v-btn color="primary" text small>Forgot password?</v-btn>
      </div>
      <div class="d-flex justify-start">
        <v-btn type="submit" rounded color="primary" transition="fade">
          Login
        </v-btn>
      </div>
    </v-form>
    <alert-message ref="refAlertMessage" />
  </div>
</template>

<script>
import AlertMessage from '../../components/utilities/Alerts/AlertMessage.vue';

export default {
  name: 'Login',
  components: {
    AlertMessage,
  },
  data() {
    return {
      user: {
        userOrEmail: '',
        password: '',
      },
    };
  },
  methods: {
    login() {},
  },
};
</script>

<style scoped>
.login-wrapper {
  margin-top: 45px;
}
</style>