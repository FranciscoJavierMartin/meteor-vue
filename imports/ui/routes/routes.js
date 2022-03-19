import loginRoutes from './loginRoutes';
import usersRoutes from './usersRoutes';
import SPALayout from '../layouts/SPALayout.vue';
import Home from '../pages/home/Home.vue';
import AccountSettings from '../pages/account/AccountSettings.vue';

export default [
  {
    path: '*',
    redirect: '/login',
  },
  loginRoutes,
  {
    path: '/',
    components: {
      allPageView: SPALayout,
    },
    children: [
      {
        name: 'Home',
        path: '',
        components: {
          sectionView: Home,
        },
      },
      {
        name: 'Account',
        path: '/account',
        components: {
          sectionView: AccountSettings,
        },
      },
      usersRoutes,
    ],
  },
];
