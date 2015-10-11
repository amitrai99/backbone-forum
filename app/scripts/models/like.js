/*global define*/

define([
    'underscore',
    'backbone',
    'conf'
], function (_, Backbone, conf) {
    'use strict';

    var LikeModel = Backbone.Model.extend({

        urlRoot: conf.apis.like,

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
