import AuthLayout from '../layouts/AuthLayout.vue';
import Login from '../pages/auth/Login.vue';
import ForgotPassword from '../pages/auth/ForgotPassword.vue';

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
    {
      path: '/forgot-password',
      name: 'forgotPassword',
      components: {
        sectionView: ForgotPassword,
      },
    },
  ],
};
