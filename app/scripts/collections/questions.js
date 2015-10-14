/*global define*/

define([
    'underscore',
    'backbone',
    'models/questions',
    'app'
], function (_, Backbone, QuestionsModel, app) {
    'use strict';

    var QuestionsCollection = Backbone.Collection.extend({
        model: QuestionsModel,
        url: function() { return app.conf.apis.question + '?_embed=likes'; }
    });

    return QuestionsCollection;
});
