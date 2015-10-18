/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'baseview',
    'views/header',
    'views/footer',
    'utils'
], function ($, _, Backbone, JST, BaseView, HeaderView, FooterView, utils) {
    'use strict';

    var AppviewView = BaseView.extend({
        template: JST['app/scripts/templates/appview.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
          'logged-in-success': 'loggedInSuccess',
          'logged-out-success': 'loggedOutSuccess'
        },

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
            if( utils.auth.getUserSession() ) {
              this.loggedInSuccess();
            }
        },

        render: function () {
            this.$el.html( this.template() );
            this.loggedInSuccess();
            //this.subViews['header'] = new HeaderView( { el: this.$el.find('#app-header') } );
            //this.subViews['footer'] = new FooterView( { el: this.$el.find('#app-footer') } );
        },

        setBodyView: function( view ) {
          var bodyView = this.subViews['body'];
          if( bodyView ) {
            bodyView.close();
          }
          this.subViews['body'] = view;
          this.$el.find('#app-body').append(view.$el);
        },

        //for sub views
        subViews: {},

        loggedInSuccess: function(e) {
          if( !this.subViews['header'] ) {
            this.subViews['header'] = new HeaderView( { tagName: 'div', className: 'header' } );
            this.subViews['footer'] = new FooterView( { tagName: 'div', className: 'footer' } );
            this.$el.find('#app-header').append( this.subViews['header'].$el );
            this.$el.find('#app-footer').append( this.subViews['footer'].$el );
          } else {
            this.subViews['header'].render();
            this.subViews['footer'].render();
          }
        },

        loggedOutSuccess: function(e) {
          this.subViews['header'].render();
          this.subViews['footer'].render();
        }

    });

    return AppviewView;
});
