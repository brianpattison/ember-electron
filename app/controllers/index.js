import Ember from 'ember';
var shell = requireNode('shell');
var remote = requireNode('remote');
var app = remote.require('app');
var dialog = remote.require('dialog');

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

    openFile: function() {
      // Note for OS X: If you want to present dialogs as sheets,
      // the only thing you have to do is provide a BrowserWindow
      // reference in the browserWindow parameter.
      //
      // dialog.showOpenDialog(remote.getCurrentWindow(), {
      //   properties: ['openFile', 'openDirectory', 'multiSelections']
      // });
      //
      var filePaths = dialog.showOpenDialog({
        properties: ['openFile', 'openDirectory', 'multiSelections']
      });
      alert('You selected: ' + filePaths.join(', '));
    },

    openUrl: function(url) {
      shell.openExternal(url);
    },

    showInFinder: function() {
      shell.showItemInFolder(app.getAppPath());
    }
  }
});
