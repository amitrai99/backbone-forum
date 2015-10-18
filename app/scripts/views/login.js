/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'baseview',
    'app',
    'utils'
], function ($, _, Backbone, JST, BaseView, app, utils) {
    'use strict';

    var LoginView = BaseView.extend({
        template: JST['app/scripts/templates/login.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
          'click .sign-in': 'login',
          'submit form#login-form': 'login'
        },

        initialize: function () {
            this.authUtil = utils.auth;
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        },
        /**
         * logs in
         * @param  {Event} evt event
         */
        login: function(evt) {
          var $email = this.$el.find('#userEmail'),
              $pwd = this.$el.find('#password'),
              data = null,
              self = this;

          evt.preventDefault();

          if($email.val() && $pwd.val() ) {
            //set the data in model
            data = {
              email: $email.val(),
              password: $pwd.val()
            };

            //send the data to server via POST
            //Our demo api server does not support this so we will just use a GET
            // this.model.save().done( function(data, textStatus, jqXHR) {
            //     alert('logged in');
            // } );

            //Using GET is not good security practice for this scenario
            this.authUtil.login(data).done( function(data, textStatus, jqXHR) {
              if( $.isArray(data) && data.length ) {
                self.$el.trigger('logged-in-success');
                app.router.navigate('questions', {trigger: true});
              }
            }).fail( function( jqXHR, textStatus, errorThrown ) {
              alert('Login failed!')
            });
          } else {
            alert('Please enter both email and password');
          }
        }

    });

    return LoginView;
});
