
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constant/Constants');
var CHANGE = 'change';

var names = [];
var index = 0;

var NameStore = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE);
  },
  addChangeListener: function (callback) {
    this.on(CHANGE, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE, callback);
  },
  getCurrentName: function () {
    if (names.length == 0) {
      return '(not yet loaded)';
    }
    return names[index];
  }
});

NameStore.dispatchToken = AppDispatcher.register(function(payload) {
  switch(payload.actionType) {
    case Constants.Name.UI_REFRESH_NAME:
      if (++index > (names.length - 1)) {
        index = 0;
      }
      NameStore.emitChange();
      break;
    case Constants.Name.API_LOAD_NAMES_SUCCESS:
      names = payload.names;
      console.log('got names');
      NameStore.emitChange();
      break;
  }
});

console.log('calling webapi');
var NameApi = require('../web-api/NameApi');
NameApi.loadFakeNames();

module.exports = NameStore;
