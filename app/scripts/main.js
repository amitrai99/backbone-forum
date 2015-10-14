/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        baseview: 'views/baseview'
    }
});

require([
    'backbone', 'routes/router'
], function (Backbone, Router) {
    var router = new Router();
    Backbone.history.start( {pushState: false} );
});
