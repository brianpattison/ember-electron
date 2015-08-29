import IndexedDBAdapter from 'ember-indexeddb-adapter/adapters/indexeddb';

export default IndexedDBAdapter.extend({
  /**
   * Name of your IndexedDB
   * @type {string}
   */
  dbName: process.env.APP_BUNDLE_ID,

  /**
   * Version of your IndexedDB.
   * If you have an existing IDB and you want to update it's schema, the value
   * of this variable should be higher than the version of your existing IDB.
   * @type {number}
   */
  version: process.env.APP_VERSION,

  /**
   * Array containing the name of your models.
   * @type {Array.<string>}
   */
  models: []
});
