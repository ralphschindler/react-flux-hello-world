var React = require('react');

var HelloActions = require('../action/HelloActions');

var NameStore = require('../store/NameStore');

function getCurrentName() {
  return {
    name: NameStore.getCurrentName()
  }
}

var Hello = React.createClass({

  getInitialState: function() {
    return getCurrentName()
  },

  componentDidMount: function() {
    NameStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    NameStore.removeChangeListener(this._onChange);
  },

  render: function () {
    console.log('rendering');
    return (
      <div>
        Hello {this.state.name}
        <button onClick={this._onRefreshNameClick}>Refresh Name</button>
        <br />
        <a href="#/">Go to index</a>
      </div>
    );
  },

  _onRefreshNameClick: function() {
    HelloActions.refreshName();
  },

  _onChange: function(/*object*/ event) {
    this.setState(getCurrentName());
  }
});



module.exports = Hello;