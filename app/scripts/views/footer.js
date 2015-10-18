/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'baseview'
], function ($, _, Backbone, JST, BaseView) {
    'use strict';

    var FooterView = BaseView.extend({
        template: JST['app/scripts/templates/footer.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        }
    });

    return FooterView;
});
