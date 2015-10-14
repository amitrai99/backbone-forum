/*global define*/

define([
    'underscore',
    'backbone',
    'app'
], function (_, Backbone, app) {
    'use strict';

    var QuestionsModel = Backbone.Model.extend({

        initialize: function() {},

        defaults: {},

        validate: function(attrs, options) {},

        parse: function(response, options)  {
            return response;
        },

        url: function() { return app.conf.apis.question + '/' + this.get('id') + '?_embed=likes'; }

    });

    return QuestionsModel;
});
