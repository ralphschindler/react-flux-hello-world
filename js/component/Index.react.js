var React = require('react');

var Index = React.createClass({
  render: function () {
    return (
      <div>
        Index
        <a href="#/hello">Go to hello</a>
      </div>
    );
  }
});

module.exports = Index;