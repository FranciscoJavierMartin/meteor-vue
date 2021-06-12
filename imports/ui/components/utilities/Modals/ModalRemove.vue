<template>
  <v-dialog id="modalRemove" max-width="500px" v-model="dialog">
    <v-card>
      <v-card-title class="headline">
        <div class="title">{{ modalData.title }}</div>
      </v-card-title>
      <v-card-text>
        {{ modalData.message }}
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="default" text @click="cancel"> Cancel </v-btn>
        <v-btn color="error" depressed @click="removeElement"> Remove </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    modalData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    cancel() {},
    removeElement() {
      this.$emit('id_element', this.modalData._id);
      this.dialog = false;
    },
  },
};
</script>