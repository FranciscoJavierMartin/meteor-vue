import { PublishEndpoint } from 'meteor/peerlibrary:middleware';

// Meteor.publish('user.list', () => {
//   return Meteor.users.find();
// });

new PublishEndpoint('user.list', () => Meteor.users.find());
