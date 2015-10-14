/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var UserModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
          "id": null,
          "name": '',
          "password": '',
          "email": ''
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }

    });

    return UserModel;
});
