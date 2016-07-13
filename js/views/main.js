var Backbone = require('backbone');
var _ = require('lodash');

/**
 * Main view displayed on entering the app
 */
MainView = Backbone.View.extend({
  className: 'js-main-view',

  events: {
    'click .js-search': '_onSearch'
  },

  initialize: function() {
    this.model.on('change', this.render, this);
    _.bindAll(this, 'render', '_onSearch');
  },

  render: function() {
    var data = this.model.toJSON();
    return this;
  },

  _onSearch: function() {

    return false;
  }
});


module.exports = MainView;
