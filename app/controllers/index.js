import Ember from 'ember';
var shell = requireNode('shell');
var remote = requireNode('remote');
var app = remote.require('app');

export default Ember.Controller.extend({
  actions: {
    getVersion: function() {
      var info = 'App Name: ' + app.getName();
      info += '\n\nApp Version: ' + app.getVersion();
      info += '\n\nEnvironment: ' + process.env.ELECTRON_ENV;
      info += '\n\nApp Path: ' + app.getAppPath();
      info += '\n\nData Path: ' + app.getDataPath();
      alert(info);
    },

    openUrl: function(url) {
      shell.openExternal(url);
    },

    showInFinder: function() {
      shell.showItemInFolder(app.getAppPath());
    }
  }
});
