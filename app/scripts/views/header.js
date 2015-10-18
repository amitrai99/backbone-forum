/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'baseview',
    'utils'
], function ($, _, Backbone, JST, BaseView, utils) {
    'use strict';

    var HeaderView = BaseView.extend({
        template: JST['app/scripts/templates/header.ejs'],

        events: {},

        initialize: function () {
            //{"id":1,"name":"rob","password":"password","email":"rob@email.com"}
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            var user = utils.auth.getUserSession() || {};
            this.$el.html( this.template( {data: user } ) );
        }
    });

    return HeaderView;
});
