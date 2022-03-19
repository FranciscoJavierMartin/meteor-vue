import AuthLayout from '../layouts/AuthLayout.vue';
import Login from '../pages/auth/Login.vue';
import ForgotPassword from '../pages/auth/ForgotPassword.vue';
import ResetPassword from '../pages/auth/ResetPassword.vue';
import SetInitialPassword from '../pages/auth/SetInitialPassword.vue';

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
    {
      path: '/reset-password/:token',
      name: 'resetPassword',
      components: {
        sectionView: ResetPassword,
      },
    },
    {
      path: '/enroll-account/:token',
      name: 'setInitialPassword',
      components: {
        sectionView: SetInitialPassword,
      },
    },
  ],
};
