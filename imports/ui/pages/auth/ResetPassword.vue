<template>
  <div>
    <div class="title">Reset Password</div>
    <v-form @submit.prevent="resetPassword">
      <v-text-field
        v-model="user.password"
        id="inputPassword"
        :append-icon="showPassword.new ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword.new ? 'text' : 'password'"
        label="New Password"
        @click:append="showPassword.new = !showPassword.new"
        autocomplete="off"
      />
      <v-text-field
        v-model="user.confirmPassword"
        id="inputConfirmPassword"
        :append-icon="showPassword.confirm ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword.confirm ? 'text' : 'password'"
        label="Confirm Password"
        @click:append="showPassword.confirm = !showPassword.confirm"
        autocomplete="off"
      />
      <div class="d-flex start">
        <v-btn type="submit" color="primary" rounded>Reset</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'ResetPassword',
  data() {
    return {
      user: {
        password: '',
        confirmPassword: '',
      },
      showPassword: {
        new: false,
        confirm: false,
      },
    };
  },
  methods: {
    resetPassword() {},
  },
};
</script>
