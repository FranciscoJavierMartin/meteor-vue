import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check, Match } from 'meteor/check';
import { ResponseMessage } from '../../startup/server/utilities/ResponseMessage';
import { Profile } from './Profile';
import ProfilesService from './ProfilesService';

new ValidatedMethod({
  name: 'profile.save',
  validate(profile) {
    try {
      check(profile, {
        _id: Match.OneOf(String, null),
        name: String,
        description: String,
        permissions: [String],
      });
    } catch (exception) {
      console.error('profile.save', exception);
      throw new Meteor.Error('403', 'Invalid info');
    }
    ProfilesService.validateName(profile.name, profile._id);
  },
  run(profile) {
    const responseMessage = new ResponseMessage();

    if (profile._id !== null) {
      try {
        const oldProfile = Profile.findOne(profile._id);
        const users = ProfilesService.getUsersbyProfile(profile._id);
        Profile.update(profile._id, {
          $set: {
            name: profile.name,
            description: profile.description,
            permissions: profile.permissions,
          },
        });

        if (oldProfile.name != profile.name) {
          Meteor.users.update(
            { 'profile.profile': oldProfile.name },
            {
              $set: {
                'profile.profile': profile.name,
              },
            },
            { multi: true }
          );
        }
        ProfilesService.updateProfileUsers(users, profile);
      } catch (exception) {
        console.error('profile.save', exception);
        throw new Meteor.Error('500', 'Error updating profile');
      }
    } else {
      try {
        Profile.insert({
          name: profile.name,
          description: profile.description,
          permissions: profile.permissions,
        });
        responseMessage.create('Profile created');
      } catch (exception) {
        console.error('profile.save', exception);
        throw new Meteor.Error('500', 'Error creating profile');
      }
    }

    return responseMessage;
  },
});

new ValidatedMethod({
  name: 'profile.delete',
  validate({ idProfile }) {
    try {
      check(idProfile, String);
    } catch (exception) {
      console.error('profile.delete', exception);
      throw new Meteor.Error('403', 'Invalid info');
    }
  },
  run({ idProfile }) {
    const responseMessage = new ResponseMessage();

    try {
      Profile.remove(idProfile);
      responseMessage.create('Profile removed');
    } catch (exception) {
      console.error('profile.delete', exception);
      throw new Meteor.Error('500', 'Error deleting profile');
    }
    return responseMessage;
  },
});
