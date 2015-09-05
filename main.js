/* global __dirname */
'use strict';

var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.

// Set app name and app version from environment variables
app.setName('Ember + Electron');

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is GCed.
var mainWindow = null;

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    'height':     600,
    'min-height': 400,
    'min-width':  600,
    'show':       false,
    'title':      app.getName(),
    'width':      800
  });

  // Wait for the page to load before showing the window
  // to avoid the flashing white background color.
  mainWindow.webContents.on('did-finish-load', function() {
    mainWindow.show();
  });

  if (process.env.ELECTRON_ENV === 'development') {
    mainWindow.loadUrl('file://' + __dirname + '/development.html');
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

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  app.quit();
});
