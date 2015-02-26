
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constant/Constants');
var CHANGE_EVENT = 'change';

var names = ['ralph', 'nick', 'josh', 'dennis', 'joe', 'george', 'pedram'];
var index = 0;

var NameStore = assign({}, EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getCurrentName: function () {
    return names[index];
  }
});

NameStore.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case Constants.Hello.REFRESH_NAME:
      if (++index > (names.length - 1)) {
        index = 0;
      }
      NameStore.emitChange();
      break;
    default:
      // do nothing
  }
});

module.exports = NameStore;
