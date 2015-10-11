/*global define*/

define([
    'underscore',
    'backbone',
    'models/questions',
    'conf'
], function (_, Backbone, QuestionsModel, conf) {
    'use strict';

    var QuestionsCollection = Backbone.Collection.extend({
        model: QuestionsModel,
        url: function() { return conf.apis.question + '?_embed=likes'; }
    });

    return QuestionsCollection;
});
