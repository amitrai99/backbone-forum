/*global define*/
/**
 * new question view
 * @param  {object} jquery object
 * @param  {underscore} 'underscore'
 * @param  {Object} 'backbone'   [description]
 * @param  {Function} 'templates' compiled templates
 * @return {Function} function
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var HomeView = Backbone.View.extend({
        template: JST['app/scripts/templates/new-question.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
          "click .btn-newqs": "postNewQuestion",
          "keyup .question-ta": "countChars",
          "change .question-ta": "countChars"
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        },

        /**
         * posts a new question
         * @param  {Event} e event
         */
        postNewQuestion: function( e ) {
          var $taQues = this.$el.find('#question-ta'),
              ques = $.trim( $taQues.val() ),
              self = this;

          e.preventDefault();
          e.stopPropagation();

          if( ques ) {
            this.model.set({
              "title": ques,
              "profileId": 1
            });

            this.model.save()
                .done( function() {
                    self.$el.find('.alert.alert-success').removeClass('hide');
                } )
                .fail( function() {
                    self.$el.find('.alert.alert-warning').removeClass('hide');
                });
          }

        },
        /**
         * counts characters
         * @param  {Evetn} e keyup event
         */
        countChars: function(e) {
          var $taQues = this.$el.find('#question-ta'),
              ques = $.trim( $taQues.val() );

          this.$el.find('.char-count').text(ques.length);
        }

    });

    return HomeView;
});
