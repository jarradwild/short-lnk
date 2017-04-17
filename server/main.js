import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
// import moment from 'moment';

import '../imports/api/users';
import {Links} from '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  // code to run on server at startup
  // let now = new Date().getTime();
  // console.log(now);
  //
  // let momentNow = moment();
  // console.log(momentNow.format('MMM Do, YYYY'));
  // console.log(momentNow.fromNow());
  // console.log(momentNow.format('H:mma'));
  //
  // let newMoment = moment(0);
  // console.log(newMoment.fromNow());

  WebApp.connectHandlers.use((req, res, next) => {

    const _id = req.url.slice(1);
    const link = Links.findOne({_id});
    //Redirect:
    if (link) {
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
      Meteor.call('links.trackVisit', _id);
    } else {
      next();
    }
  });


  // WebApp.connectHandlers.use((req, res, next) => {
  //   console.log('This is from my custom middleware!');
  //   // console.log(req.url, req.method, req.headers, req.query);
  //
  //   // Set HTTP status code
  //   // res.statusCode = 404;
  //   // Set HTTP headers
  //   // res.setHeader('my-custom-header', 'Jarrad was here!');
  //   // Set HTTP body
  //   // res.write('<h1>This is my middleware at work!</h1>');
  //   // End HTTP request
  //   // res.end();
  //   next();
  // });
});
