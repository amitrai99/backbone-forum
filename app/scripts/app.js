/**
 * This is the application object that is shared across the entire application
 */
define(['backbone'], function( Backbone ) {
  'use strict';

  var app = {
    appView: null,
    init: function() {
      require(['routes/router', 'conf/conf'], function( Router, conf ) {
        app.conf = conf;
        if( !app.appView ) {
          require(['views/appview'], function( AppView ) {
            app.appView = new AppView( { el: '#app-view' } );
            app.router = new Router();
            Backbone.history.start( {pushState: true} );
          });
        }
      });

      //this is needed to makre sure the pushState works properly
      //http://artsy.github.io/blog/2012/06/25/replacing-hashbang-routes-with-pushstate/
      $(document).on("click", "a[href^='/']", function(e)
      {
          e.preventDefault(); // This is important

          var href = $(e.currentTarget).attr('href');

          app.router.navigate(href, true); // <- this part will pass the path to your router

      });

    }
  };//app

  return app;
});
