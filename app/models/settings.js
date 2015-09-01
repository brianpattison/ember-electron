import StorageObject from 'ember-local-storage/local/object';

export default StorageObject.extend({
  storageKey: 'bucketeer-settings',
  initialContent: {
    hello: 'world2'
  }
});
