import Users from '../pages/users/Users.vue';
import SaveUser from '../pages/users/SaveUser.vue';

export default {
  name: 'Users',
  path: '/users',
  components: {
    sectionView: Users,
  },
  children: [
    {
      name: 'UsersCreate',
      path: 'create',
      components: {
        usersOptionsView: SaveUser,
      },
    },
    {
      name: 'UsersUpdate',
      path: 'update',
      components: {
        usersOptionsView: SaveUser,
      },
    },
  ],
};
