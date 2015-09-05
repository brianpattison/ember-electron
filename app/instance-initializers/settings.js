import Settings from 'electron/models/settings';

export function initialize(instance) {
  instance.registry.register('service:settings', Settings, { singleton: true });
  instance.application.inject('controller', 'settings', 'service:settings');
  instance.application.inject('route', 'settings', 'service:settings');
}

export default {
  name: 'ember-electron-settings',
  initialize: initialize
};
