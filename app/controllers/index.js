import Ember from 'ember';
var shell = requireNode('shell');

export default Ember.Controller.extend({
  actions: {
    openUrl: function(url) {
      shell.openExternal(url);
    }
  }
});
