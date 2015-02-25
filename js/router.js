var React = require('react');
var Router = require('react-router');

var App = require('./component/App.react');
var Index = require('./component/Index.react');
var Hello = require('./component/Hello.react');

var {
  create: createRouter,
  HistoryLocation,
  HashLocation,
  Route,
  DefaultRoute,
  NotFoundRoute,
  RouteHandler,
  Link
} = Router;

var router = createRouter({
  location: HashLocation,
  routes: (
    <Route name='explore' path='/' handler={App}>
      <DefaultRoute handler={Index} />
      <Route name="hello" path="/hello" handler={Hello} />
    </Route>)
});

module.exports = router;
