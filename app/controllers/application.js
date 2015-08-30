import Ember from 'ember';
var remote = requireNode('remote');
var Menu = remote.require('menu');
var MenuItem = remote.require('menu-item');

var menu = new Menu();
menu.append(new MenuItem({
  label: 'Menu item #1',
  click: function() {
    alert('Menu item #1');
  }
}));
menu.append(new MenuItem({
  label: 'Menu item #2',
  click: function() {
    alert('Menu item #2');
  }
}));
menu.append(new MenuItem({ type: 'separator' }));
menu.append(new MenuItem({
  label: 'Menu item #3',
  click: function() {
    alert('Menu item #3');
  }
}));

export default Ember.Controller.extend({
  actions: {
    showSettingsMenu: function() {
      menu.popup(remote.getCurrentWindow());
    }
  }
});
