import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import { routes, onAuthChange } from '../imports/routes/routes';
import '../imports/startup/simple-schema-configuration.js';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  // Calling Methods (These are in imports/api/links.js)
  // Meteor.call('greetUser', 'Jarrad', (err, res) => {
  //   console.log('Greet User Arguements', err, res);
  // });
  // Meteor.call('addNumbers', 3, 4, (err, res) => {
  //   console.log('Adding numbers', err, res);
  // });
  Session.set('showVisible', true);
  ReactDOM.render(routes, document.getElementById('app') );
});
