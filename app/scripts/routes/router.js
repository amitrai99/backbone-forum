/*global define*/

define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var Router = Backbone.Router.extend({

      initialize: function(routes) { this.routes = routes; },

      currentView: null,

      routes: {
        "new-question": "newQuestion",
        "questions": "questions",
        "*actions": "notFound404"
      },

      newQuestion: function() {
        var self = this;
        if( self.currentView ) {
          self.currentView.remove();
        }
        require(['views/new-question', 'models/new-question'], function( NewQuestion, NewQuestionsModel ) {
          self.currentView = new NewQuestion( { tagName: 'div', className:'currentView', model: new NewQuestionsModel() } );
          $('#main-container').html( self.currentView.$el );
        });
      },

      questions: function() {
        var self = this;
        if( self.currentView ) {
          self.currentView.remove();
        }
        require(['views/questions-collection', 'collections/questions'], function(QuestionsCollectionView, QuestionsCollection) {
          self.currentView = new QuestionsCollectionView( { tagName: 'div', className:'currentView', collection: new QuestionsCollection() } );
          $('#main-container').html( self.currentView.$el );
        });
      },

      notFound404: function() {
        console.log('404 not found');
        window.location.hash = 'questions';
        //alert('bad route');
      }

    }); // router

    return Router;
});
