/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/like',
    'conf'
], function ($, _, Backbone, JST, LikeModel, conf) {
    'use strict';

    var QuestionsView = Backbone.View.extend({
        template: JST['app/scripts/templates/questions.ejs'],

        tagName: 'li',

        id: '',

        className: '',

        events: {
          'click .like-post,.unlike-post': 'likePost'
        },

        initialize: function (options) {
            this.likeModel = new LikeModel;
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.likeModel, 'destroy', this.likeModel.reset);
            this.profileId = conf.auth.getUser().profileId;
        },

        /**
         * checks if the post has been already liked
         * @param  {Number} profileId
         * @param  {Object} likes
         */
        checkLiked: function( likes, profileId ) {
          var liked = _.find( likes, function( item ) {
                        return item.profileId === profileId;
                      } );
          return liked;
        },

        render: function () {
          var data = this.model.toJSON();
          var likedData = this.checkLiked( data.likes, this.profileId );
          data.isLiked = false;
          console.log( likedData );
          if( likedData ) {
            this.likeModel.set( likedData, {silent:true} );
            data.isLiked = true;
          } else {
            //this.likeModel.reset();
          }
          this.$el.html(this.template( {data: data} ));
          this.$el.attr('data-id', data.id );
          this.$el.attr('data-authorid', data.profileId );
        },

        likePost: function( e ) {
          var $ele = $(e.target),
              postId = $ele.data('postid'),
              self = this,
              isLiked = $ele.hasClass('like-post');

          e.preventDefault();
          e.stopPropagation();

          if( isLiked ) {
            this.likeModel.save({
                "postId": postId,
                "profileId": this.profileId
            }).done( function() {
              self.model.fetch();
            });
          } else {
            this.likeModel.destroy().done( function() {
              self.likeModel.clear();
              self.model.fetch();
            });
          }
        }
    });

    return QuestionsView;
});
