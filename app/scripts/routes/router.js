/*global define*/

define([
    'jquery',
    'backbone',
    'app',
    'utils'
], function ($, Backbone, app, utils) {
    'use strict';

    var Router = Backbone.Router.extend({

      initialize: function(routes) { this.routes = routes; },

      currentView: null,

      routes: {
        "login": "login",
        "new-question": "newQuestion",
        "questions": "questions",
        "*actions": "notFound404"
      },

      isLoggedIn: function() {
        var self = this;
        if( !utils.auth.getUserSession() ) {
          this.navigate('login');
          return false;
        }
        return true;
      },

      login: function() {
        var self = this;
        if( self.currentView ) {
          self.currentView.close();
        }
        require(['views/login', 'models/login'], function( LoginView, LoginModel ) {
          self.currentView = new LoginView( { tagName: 'div', className:'currentView', model: new LoginModel() } );
          $('#main-container').html( self.currentView.$el );
        });
      },

      newQuestion: function() {
        if( !this.isLoggedIn() ) return;
        var self = this;
        if( self.currentView ) {
          self.currentView.close();
        }
        require(['views/new-question', 'models/new-question'], function( NewQuestionView, NewQuestionsModel ) {
          self.currentView = new NewQuestionView( { tagName: 'div', className:'currentView', model: new NewQuestionsModel() } );
          $('#main-container').html( self.currentView.$el );
        });
      },

      questions: function() {
        if( !this.isLoggedIn() ) return;
        var self = this;
        if( self.currentView ) {
          self.currentView.close();
        }
        require(['views/questions-collection', 'collections/questions'], function(QuestionsCollectionView, QuestionsCollection) {
          self.currentView = new QuestionsCollectionView( { tagName: 'div', className:'currentView', collection: new QuestionsCollection() } );
          $('#main-container').html( self.currentView.$el );
        });
      },

      notFound404: function() {
        if( !this.isLoggedIn() ) {
          console.log('404 not found. Redirecting to login.');
          window.location.hash = 'login';
        } else {
          window.location.hash = 'questions';
        }
        //alert('bad route');
      }

    }); // router

    return Router;
});
