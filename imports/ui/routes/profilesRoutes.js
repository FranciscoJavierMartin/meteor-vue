import ListProfiles from '../pages/profiles/ListProfiles.vue';
import SaveProfile from '../pages/profiles/SaveProfile.vue';

export default {
  path: 'profiles',
  components: {
    sectionView: {
      render: (c) => c('router-view'),
    },
  },
  children: [
    {
      name: 'Profiles',
      path: '',
      component: ListProfiles,
    },
    {
      name: 'ProfilesCreate',
      path: 'create',
      component: SaveProfile,
    },
    {
      name: 'ProfilesUpdate',
      path: 'update',
      component: SaveProfile,
    },
  ],
};
