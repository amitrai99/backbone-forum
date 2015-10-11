/*global define*/

define([
    'underscore',
    'backbone',
    'conf'
], function (_, Backbone, conf) {
    'use strict';

    var NewQuestionModel = Backbone.Model.extend({

        url: function() {
          return conf.apis.question;
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
