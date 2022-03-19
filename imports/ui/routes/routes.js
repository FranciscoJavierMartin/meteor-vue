import loginRoutes from './loginRoutes';
import SPALayout from '../layouts/SPALayout.vue';
import Home from '../pages/home/Home.vue';

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
    ],
  },
];
