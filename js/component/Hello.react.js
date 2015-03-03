var React = require('react');
var NameActionCreators = require('../action/NameActionCreators');
var NameStore = require('../store/NameStore');

var Hello = React.createClass({

  getInitialState: function() {
    return {
      name: NameStore.getCurrentName()
    }
  },

  componentDidMount: function() {
    NameStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    NameStore.removeChangeListener(this._onChange);
  },

  render: function () {
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
    NameActionCreators.refreshName();
  },

  _onChange: function(event) {
    this.setState({name: NameStore.getCurrentName()});
  }

});

module.exports = Hello;
