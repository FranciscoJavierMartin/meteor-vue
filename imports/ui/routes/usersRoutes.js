import ListUsers from '../pages/users/ListUsers.vue';
import SaveUser from '../pages/users/SaveUser.vue';

export default {
  path: '/users',
  components: {
    sectionView: {
      render: (c) => c('router-view'),
    },
  },
  children: [
    {
      name: 'ListUsers',
      path: '',
      component: ListUsers,
    },
    {
      name: 'UsersCreate',
      path: 'create',
      component: SaveUser,
    },
    {
      name: 'UsersUpdate',
      path: 'update',
      component: SaveUser,
    },
  ],
};
