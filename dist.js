var exec = require('child_process').exec;
var fs = require('fs');
var packagejson = require('./package.json');
var packager = require('electron-packager');

var commands = [];

// Clean up build and temp files
commands.push('mkdir -p ./dist');
commands.push('rm -rf ./dist');
commands.push('mkdir -p ./dist');
commands.push('mkdir -p ./tmp');
commands.push('rm -rf ./tmp');
commands.push('mkdir -p ./tmp');
commands.push('mkdir -p ./tmp/dist');

// Make sure node modules and bower components are installed
commands.push('npm install');
commands.push('bower install');

// Command for building the Ember app
commands.push('ember build --output-path=./tmp/dist/');

// Copy Electron files
commands.push('cp ./main.js ./tmp/dist/main.js');
commands.push('cp ./package.json ./tmp/dist/package.json');

// Copy the directories for each node module required by the app
commands.push('mkdir -p ./tmp/dist/node_modules');
var dependencies = packagejson['dependencies'];
if (dependencies === null || dependencies === undefined) {
  dependencies = {};
}
Object.keys(dependencies).forEach(function(module) {
  commands.push('cp -r ./node_modules/' + module + ' ./tmp/dist/node_modules/' + module);
});

// Build the Ember app
exec(commands.join(' && '), function() {
  // Build the Electron app
  var electronVersion = packagejson['devDependencies']['electron-prebuilt'].replace(/[^\d.]/g, '')
  packager({
    all: true,
    asar: true,
    dir: './tmp/dist',
    name: 'Ember + Electron',
    out: './dist',
    overwrite: true,
    version: electronVersion
  }, function(error, appPath) {
    console.log('error:', error);
    console.log('appPath:', appPath);
  });
});
