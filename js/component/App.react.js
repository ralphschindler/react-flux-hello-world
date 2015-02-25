var React = require('react');
var Router = require('react-router');

var Header = require('./Header.react');
var Navigation = require('./Navigation.react');
var Footer = require('./Footer.react');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header></Header>
        <Navigation></Navigation>
        <Router.RouteHandler />
        <Footer></Footer>
      </div>
    );
  }
});

module.exports = App;