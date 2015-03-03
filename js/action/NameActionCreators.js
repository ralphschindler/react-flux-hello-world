var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constant/Constants');


var NameActionCreators = {
  getNamesSuccess: function (names) {
    AppDispatcher.dispatch({actionType: Constants.Name.API_LOAD_NAMES_SUCCESS, names: names});
  },
  getNamesFailure: function () {
    // @todo
  },
  refreshName: function () {
    AppDispatcher.dispatch({actionType: Constants.Name.UI_REFRESH_NAME})
  }
};


module.exports = NameActionCreators;