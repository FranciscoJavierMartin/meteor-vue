<template>
  <v-container fluid>
    <header-view />
    <v-main id="main_section">
      <router-view name="sectionView" />
    </v-main>
    <footer-view />
  </v-container>
</template>

<script>
import FooterView from './shared/FooterView.vue';
import HeaderView from './shared/HeaderView.vue';

export default {
  components: { HeaderView, FooterView },
  name: 'SPALayout',
};
</script>
