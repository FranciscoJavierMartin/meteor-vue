import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { check, Match } from 'meteor/check';
import { ResponseMessage } from '../../startup/server/utilities/ResponseMessage';
import UsersService from './UsersService';

new ValidatedMethod({
  name: 'user.save',
  validate(user) {
    try {
      check(user, {
        _id: Match.OneOf(String, null),
        username: String,
        emails: [{ address: String, verified: Boolean }],
        profile: {
          profile: String,
          name: String,
          path: Match.OneOf(String, null),
        },
      });
    } catch (exception) {
      console.error('user.save', exception);
      throw new Meteor.Error('403', 'Invalid info');
    }

    UsersService.validateEmail(user.emails[0].address, user._id);
    UsersService.validateUsername(user.username, user._id);
  },
  run(user) {
    const responseMessage = ResponseMessage();

    if (user_id !== null) {
      try {
        UsersService.updateUser(user);
        responseMessage.create('User updated');
      } catch (exception) {
        console.error('user.save', exception);
        throw new Meteor.Error('500', 'Error updating user');
      }
    } else {
      try {
        UsersService.createUser(user);
        responseMessage.create('User created');
      } catch (exception) {
        console.error('user.save', exception);
        throw new Meteor.Error('500', 'Error creating user');
      }
    }

    return responseMessage;
  },
});

new ValidatedMethod({
  name: 'user.delete',
  validate({ idUser }) {
    try {
      check(idUser, String);
    } catch (exception) {
      console.error('user.delete', exception);
      throw new Meteor.Error('403', 'Invalid info');
    }
  },
  run({ idUser }) {
    const responseMessage = new ResponseMessage();

    try {
      Meteor.users.remove(idUser);
    } catch (exception) {
      console.error('user.delete', exception);
      throw new Meteor.Error('500', 'Error removing user');
    }
    return responseMessage;
  },
});
