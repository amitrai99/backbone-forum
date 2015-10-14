/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var BaseView = Backbone.View.extend({
        /**
         * close method to remove the view from memory
         * if a class defines a beforeClose/afterClose method, it will be called before/after the main method is executed
         * @param {function} callback callback function
         */
        close: function() {
          if( this.beforeClose ) {
            this.beforeClose();
          }
          if( this.subViews ) {
            _.each( this.subViews, function(value, key, list) {
              value.remove();
            } );
          }
          this.remove();
          if( this.afterClose ) {
            this.afterClose();
          }
        }
    });

    return BaseView;
});
