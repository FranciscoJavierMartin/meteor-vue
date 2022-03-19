<template>
  <v-form @submit.prevent="updatePassword">
    <v-card>
      <v-card-title>
        <div class="subtitle-2">Change password</div>
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="password.old"
          id="inputPassword"
          :append-icon="showPassword.old ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword.old ? 'text' : 'password'"
          name="current_password"
          label="Current password"
          @click:append="showPassword.old = !showPassword.old"
          autocomplete="off"
        />
        <v-text-field
          v-model="password.new"
          id="inputNewPassword"
          :append-icon="showPassword.new ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword.new ? 'text' : 'password'"
          name="new_password"
          label="New password"
          @click:append="showPassword.new = !showPassword.new"
          autocomplete="off"
        />
        <v-text-field
          v-model="password.confirm"
          id="inputConfirmPassword"
          :append-icon="showPassword.confirm ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword.confirm ? 'text' : 'password'"
          name="confirm_password"
          label="Confirm password"
          @click:append="showPassword.confirm = !showPassword.confirm"
          autocomplete="off"
        />
        <v-card-actions>
          <v-row justify="center">
            <v-btn type="submit" color="primary" rounded depressed>
              Update password
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-form>
</template>

<script>
export default {
  name: 'UpdatePassword',
  data() {
    return {
      password: {
        old: '',
        new: '',
        confirm: '',
      },
      showPassword: {
        old: false,
        new: false,
        confirm: false,
      },
    };
  },
  methods: {
    updatePassword() {},
  },
};
</script>
