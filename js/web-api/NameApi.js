
var NameActionCreators = require('../action/NameActionCreators');

var NameApi = {
  loadFakeNames: function() {
    setTimeout(function() {
      NameActionCreators.getNamesSuccess(['ralph', 'nick', 'josh', 'dennis', 'joe', 'george', 'pedram']);
    }, 1000);
  }
};

module.exports = NameApi;