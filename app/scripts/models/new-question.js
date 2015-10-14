/*global define*/

define([
    'underscore',
    'backbone',
    'app'
], function (_, Backbone, app) {
    'use strict';

    var NewQuestionModel = Backbone.Model.extend({

        url: function() {
          return app.conf.apis.question;
        },

        initialize: function() {},

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return NewQuestionModel;
});
