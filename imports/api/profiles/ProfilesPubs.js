import { PublishEndpoint } from 'meteor/peerlibrary:middleware';
import { Profile } from './Profile';
import ProfilesService from './ProfilesService';

new PublishEndpoint('profile.list', () =>
  Profile.find({ name: { $nin: ProfilesService.getStaticProfileNames() } })
);
