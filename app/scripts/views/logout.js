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

    var LogoutView = BaseView.extend({
        template: JST['app/scripts/templates/logout.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
            setTimeout( $.proxy( this.raiseEvent, this ), 500 );
        },

        raiseEvent: function() {
          this.$el.trigger('logged-out-success');
        },

        render: function () {
          utils.auth.removeUserSession();
          //this.$el.html(this.template(this.model.toJSON()));
          this.$el.html(this.template());
        }
    });

    return LogoutView;
});
