/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/questions',
    'models/like',
    'conf'
], function ($, _, Backbone, JST, QuestionsView, LikeModel, conf) {
    'use strict';

    var QuestionsCollectionView = Backbone.View.extend({
        template: JST['app/scripts/templates/questions-collection.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},
        //for sub views
        subViews: {},

        initialize: function (options) {
            this.user = conf.auth.getUser();
            this.render();
            //this.listenTo(this.collection, 'sync', this.render);
            this.listenTo(this.collection, 'add', this.add);
            this.collection.fetch();
        },

        render: function () {
          //alert(1);
          var data = this.collection.toJSON();
          //console.log( data );
          this.$el.html(this.template( {data: data} ));
          return this;
        },

        add: function(m) {
          var $ql = this.$el.find('.questions-list');
          var qv = new QuestionsView({
              model: m
          });

          // cache the view
          this.subViews[ m.get('id') ] = qv;

          // single model rendering
          // like appending <tr> or <li> elements
          qv.render();
          $ql.append(qv.el);
        }

    });

    return QuestionsCollectionView;
});
