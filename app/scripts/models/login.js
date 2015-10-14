/*global define*/

define([
    'underscore',
    'backbone',
    'app'
], function (_, Backbone, app) {
    'use strict';

    var LoginModel = Backbone.Model.extend({
        url: function() {
          return app.conf.apis.login + '?email=' + this.get('email') + '&password=' + this.get('password');
        },

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return LoginModel;
});
