import Ember from 'ember';
import Settings from 'electron/models/settings';
var remote = requireNode('remote');

export function initialize() {
  var mainWindow = remote.getCurrentWindow();
  var settings = Settings.create();

  // Check for window frame settings and
  if (Ember.isNone(settings.get('mainWindowBounds'))) {
    settings.set('mainWindowBounds', mainWindow.getBounds());
  } else {
    mainWindow.setBounds(settings.get('mainWindowBounds'));
  }

  // Wait to show the window until the app has loaded
  mainWindow.webContents.removeAllListeners('did-finish-load');
  mainWindow.webContents.on('did-finish-load', function() {
    mainWindow.show();
  });

  // Don't update the window title based on the <title> tag.
  mainWindow.removeAllListeners('page-title-updated');
  mainWindow.on('page-title-updated', function(e) {
    e.preventDefault();
  });

  // Save the main window bounds on move
  mainWindow.removeAllListeners('move');
  mainWindow.on('move', function(e) {
    settings.set('mainWindowBounds', e.sender.getBounds());
  });

  // Save the main window bounds on resize
  mainWindow.removeAllListeners('resize');
  mainWindow.on('resize', function(e) {
    settings.set('mainWindowBounds', e.sender.getBounds());
  });
}

export default {
  name: 'main-window',
  initialize: initialize
};
