import { Profile } from './Profile';
import { StaticProfiles } from './ProfileSeeder';

export default {
  validateName(name, idProfile) {
    const existsName = Profile.findOne({ name });

    if (idUser) {
      const oldProfile = Profile.findOne(idProfile);
      if (oldProfile.name !== name && existsName) {
        throw new Meteor.Error('403', 'Name is already in use');
      }
    } else if (existsName) {
      throw new Meteor.Error('403', 'Name is already in use');
    }
  },
  getUsersbyProfile(idProfile) {
    const profile = Profile.findOne(idProfile);
    return Meteor.users.find({ 'profile.profile': profile.name }).fetch();
  },
  setUserRoles(idUser, profileName) {
    const permissions = Profile.findOne({ name: profileName }).permissions;
    Meteor.roleAssignment.remove({ 'user._id': idUser });
    Roles.setUserRoles(idUser, permissions, profileName);
  },
  updateProfileUsers(users, profile) {
    users.forEach((user) => {
      this.setUserRoles(user._id, profile.name);
    });
  },
  getStaticProfileNames() {
    Object.keys(StaticProfiles).map(
      (staticProfileName) => StaticProfiles[staticProfileName].name
    );
  },
};
