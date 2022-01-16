import AuthLayout from '../layouts/AuthLayout.vue';
import Login from '../pages/auth/Login.vue';

export default {
  path: '/login',
  components: {
    allPageView: AuthLayout,
  },
  children: [
    {
      path: '',
      name: 'login',
      components: {
        sectionView: Login,
      },
    },
  ],
};
