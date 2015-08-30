import IndexedDBAdapter from 'ember-indexeddb-adapter/adapters/indexeddb';
var remote = requireNode('remote');
var app = remote.require('app');

export default IndexedDBAdapter.extend({
  /**
   * Name of your IndexedDB
   * @type {string}
   */
  dbName: 'com.company-name.app-name',

  /**
   * Version of your IndexedDB.
   * If you have an existing IDB and you want to update it's schema, the value
   * of this variable should be higher than the version of your existing IDB.
   * @type {number}
   */
  version: app.getVersion(),

  /**
   * Array containing the name of your models.
   * @type {Array.<string>}
   */
  models: []
});
