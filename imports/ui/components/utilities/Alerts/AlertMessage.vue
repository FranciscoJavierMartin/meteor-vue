<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="timeout"
    :bottom="y === 'bottom'"
    :right="x === 'right'"
    :top="y === 'top'"
    :left="x === 'left'"
    :color="color"
    :multi-line="mode === 'multi-line'"
    :vertical="mode === 'vertical'"
  >
    <v-card color="transparent" elevation="0">
      <v-card-title>
        <v-icon v-if="icon" dark left>
          {{ icon }}
        </v-icon>
        <span class="white--text">
          {{ title }}
        </span>
        <v-spacer />
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn dark text small v-on="on" @click="snackbar = false">
              <v-icon small> mdi-window-close </v-icon>
            </v-btn>
          </template>
          <span>Close</span>
        </v-tooltip>
      </v-card-title>
      <v-card-text v-if="text">
        <span class="white--text">{{ text }}</span>
      </v-card-text>
    </v-card>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      timeout: null,
      x: '',
      y: '',
      color: '',
      mode: '',
      icon: null,
      title: '',
      text: '',
    };
  },
  methods: {
    showAlertSimple(color, title) {
      this.color = color;
      this.title = title;
      this.x = 'right';
      this.y = 'bottom';
      if (color === 'success') {
        this.icon = 'check_circle';
      } else if (color === 'error') {
        this.icon = 'close';
      } else if (color === 'info') {
        this.icon = 'info';
      } else if (color === 'warning') {
        this.icon = 'warning';
      }
      this.text = '';
      this.mode = '';
      this.timeout = 6000;
      this.snackbar = true;
    },
    showAlertFull(icon, color, title, mode, timeout, x, y, text = null) {
      this.icon = icon;
      this.color = color;
      this.title = title;
      this.mode = mode;
      this.timeout = timeout;
      this.x = x;
      this.y = y;
      this.text = text;
    },
  },
};
</script>

<style scoped>
.v-snack__content {
  padding: 0 !important;
}
</style>