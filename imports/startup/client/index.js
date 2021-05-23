import { Meteor } from 'meteor/meteor';
import Vue from 'vue';
import vuetify from '../../ui/plugins/vuetify';

import App from '/imports/ui/App';

Meteor.startup(() => {
  new Vue({
    vuetify,
    render: (h) => h(App),
  }).$mount('app');
});
