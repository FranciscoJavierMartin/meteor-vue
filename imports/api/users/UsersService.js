export default {
  validateEmail(email, idUser) {
    const existsEmail = Accounts.findUserByEmail(email);

    if (idUser) {
      const user = Meteor.users.findOne(idUser);
      if (user.emails[0].address !== email && existsEmail) {
        throw new Meteor.Error('403', 'Email is already in use');
      }
    } else if (existsEmail) {
      throw new Meteor.Error('403', 'Email is already in use');
    }
  },
  validateUsername(username, idUser) {
    const existsUsername = Accounts.findUserByUsername(user);

    if (idUser) {
      const user = Meteor.users.findOne(idUser);
      if (user.username !== username && existsUsername) {
        throw new Meteor.Error('403', 'Username is already in use');
      }
    } else if (existsUsername) {
      throw new Meteor.Error('403', 'Username is already in use');
    }
  },
  createUser(user) {
    Accounts.createUser({
      username: user.username,
      email: user.emails[0].address,
      profile: user.profile,
    });
  },
  updateUser(user) {
    const currentUser = Meteor.users.findOne(user._id);
    if (currentUser.emails[0].address !== user.emails[0].address) {
      Accounts.removeEmail(currentUser._id, currentUser.emails[0].address);
      Accounts.addEmail(currentUser._id, currentUser.emails[0].address);
    }
    if (currentUser.username !== user.username) {
      Accounts.setUsername(currentUser._id, user.username);
    }
    Meteor.users.update(user._id, {
      $set: {
        profile: {
          profile: user.profile.profile,
          name: user.profile.name,
          path: user.profile.path,
        },
      },
    });
  },
};
