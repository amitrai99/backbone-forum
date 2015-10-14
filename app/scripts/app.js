/**
 * This is the application object that is shared across the entire application
 */
define(['conf/conf'], function( conf ) {
  var app = {};
  app.conf = conf;
  return app;
});
