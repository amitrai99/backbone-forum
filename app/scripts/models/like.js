/*global define*/

define([
    'underscore',
    'backbone',
    'app'
], function (_, Backbone, app) {
    'use strict';

    var LikeModel = Backbone.Model.extend({

        urlRoot: app.conf.apis.like,

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

    return LikeModel;
});
