/*global define*/

define([
    'jquery',
    'backbone',
    'app',
    'utils'
], function ($, Backbone, app, utils) {
    'use strict';

    var Router = Backbone.Router.extend({

      initialize: function(routes) {
        this.routes = routes;
      },

      routes: {
        "login": "login",
        "new-question": "newQuestion",
        "questions": "questions",
        "logout": "logout",
        "*actions": "notFound404"
      },

      isLoggedIn: function() {
        var self = this;
        if( !utils.auth.getUserSession() ) {
          this.navigate('login', {trigger: true});
          return false;
        }
        return true;
      },

      login: function() {
        require(['views/login', 'models/login'], function( LoginView, LoginModel ) {
          var currentView = new LoginView( { tagName: 'div', className:'currentView', model: new LoginModel() } );
          app.appView.setBodyView( currentView );
        });
      },

      newQuestion: function() {
        if( !this.isLoggedIn() ) return;
        require(['views/new-question', 'models/new-question'], function( NewQuestionView, NewQuestionsModel ) {
          var currentView = new NewQuestionView( { tagName: 'div', className:'currentView', model: new NewQuestionsModel() } );
          app.appView.setBodyView( currentView );
        });
      },

      questions: function() {
        if( !this.isLoggedIn() ) return;
        require(['views/questions-collection', 'collections/questions'], function(QuestionsCollectionView, QuestionsCollection) {
          var currentView = new QuestionsCollectionView( { tagName: 'div', className:'currentView', collection: new QuestionsCollection() } );
          app.appView.setBodyView( currentView );
        });
      },

      logout: function() {
        if( !this.isLoggedIn() ) return;
        require(['views/logout'], function(LogoutView) {
          var currentView = new LogoutView( { tagName: 'div', className:'currentView' } );
          app.appView.setBodyView( currentView );
        });
      },

      notFound404: function() {
        if( !this.isLoggedIn() ) {
          console.log('404 not found. Redirecting to login.');
          window.location.href = '/login';
        } else {
          window.location.href = '/questions';
        }
        //alert('bad route');
      }

    }); // router

    return Router;
});
