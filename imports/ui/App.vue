<template>
  <v-app>
    <v-container>
      <h1>Hello world from vue</h1>
      <v-btn color="primary" @click="openAlert">Open alert</v-btn>
      <v-btn color="success" @click="openLoader">Open loader</v-btn>
      <v-btn color="error" @click="openModalRemove">Open modal</v-btn>
    </v-container>
    <alert-message ref="refAlertMessageTest"></alert-message>
    <loader ref="refLoaderTest" />
    <modal-remove
      ref="refModalRemove"
      :modal-data="modalInfo"
      @id_element="deleteUser"
    />
  </v-app>
</template>

<script>
import AlertMessage from './components/utilities/Alerts/AlertMessage.vue';
import Loader from './components/utilities/Loaders/Loader.vue';
import ModalRemove from './components/utilities/Modals/ModalRemove.vue';

export default {
  name: 'App',
  components: {
    AlertMessage,
    Loader,
    ModalRemove,
  },
  data() {
    return {
      modalInfo: {
        title: 'Remove User',
        message: 'Are you sure want to remove this user?',
        _id: null,
        element: {},
      },
    };
  },
  methods: {
    openAlert() {
      // this.$refs.refAlertMessageTest.showAlertSimple('success', 'Test title');
      this.$refs.refAlertMessageTest.showAlertFull(
        'mdi-close-circle',
        'error',
        'Wrong credentials',
        '',
        5000,
        'right',
        'bottom'
      );
    },
    openLoader() {
      this.$refs.refLoaderTest.activate();
      setTimeout(() => {
        this.$refs.refLoaderTest.deactivate();
      }, 3000);
    },
    openModalRemove() {
      const user = {
        _id: 'unique_id',
        name: 'John',
        lastname: 'Doe',
        age: 30,
        country: 'USA',
      };

      this.modalInfo = {
        ...this.modalInfo,
        _id: user._id,
        element: user,
        message: `Are you sure want to remove ${user.name}?`,
      };

      this.$refs.refModalRemove.dialog = true;
    },
    deleteUser(idUser) {
      console.log('User id', idUser);
    },
  },
};
</script>

<style>
</style>

