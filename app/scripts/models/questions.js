/*global define*/

define([
    'underscore',
    'backbone',
    'conf'
], function (_, Backbone, conf) {
    'use strict';

    var QuestionsModel = Backbone.Model.extend({

        initialize: function() {},

        defaults: {},

        validate: function(attrs, options) {},

        parse: function(response, options)  {
            return response;
        },

        url: function() { return conf.apis.question + '/' + this.get('id') + '?_embed=likes'; }

    });

    return QuestionsModel;
});
