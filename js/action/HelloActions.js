var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constant/Constants');

var HelloActions = {
  refreshName: function () {
    AppDispatcher.dispatch({
      actionType: Constants.Hello.REFRESH_NAME
    })
  }
};

module.exports = HelloActions;