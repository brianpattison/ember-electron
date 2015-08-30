# Ember + Electron

An experiment with [Ember CLI](http://www.ember-cli.com/) and [Electron](http://electron.atom.io).

## OS X

![Screenshot](screenshot-osx.png)

## Windows

![Screenshot](screenshot-windows.png)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [Electron](http://electron.atom.io)

## Installation

```bash
git clone https://github.com/brianpattison/ember-electron.git
cd ember-electron
npm install && bower install
```

## Running / Development

```bash
npm start
```

You may need to reload the page in the Electron app if the Ember server doesn't start up fast enough.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

## Distribution

```bash
npm run dist
```

Apps for each platform and architecture will be built and saved to the `/dist` directory.

## Further Reading / Useful Links

* [electron](http://electron.atom.io)
* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* [ember inspector](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
* [bourbon](http://bourbon.io)
* [neat](http://neat.bourbon.io)
