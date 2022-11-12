import { PublishEndpoint } from 'meteor/peerlibrary:middleware';
import PermissionMiddleware from '../../middlewares/PermissionMiddleware';
import Permissions from '../../startup/server/Permissions';

// Meteor.publish('user.list', () => {
//   return Meteor.users.find();
// });

const usersPublication = new PublishEndpoint('user.list', () =>
  Meteor.users.find()
);

usersPublication.use(new PermissionMiddleware([Permissions.USERS.LIST]));
