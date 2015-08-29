'use strict';

var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  app.quit();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    'height':       600,
    'min-height':   350,
    'min-width':    500,
    'title':        process.env.APP_NAME,
    'width':        800
  });

  if (process.env.ELECTRON_ENV === 'development') {
    setTimeout(function() {
      mainWindow.loadUrl('http://localhost:5000/');
    }, 4000);
    // mainWindow.openDevTools();
  } else {
    mainWindow.loadUrl('file://' + __dirname + '/dist/index.html');
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
