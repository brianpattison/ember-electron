import StorageObject from 'ember-local-storage/local/object';

export default StorageObject.extend({
  storageKey: 'ember-electron-settings',
  initialContent: {
    hello: 'world'
  }
});
