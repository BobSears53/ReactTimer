var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Countdown = require('Countdown');
var Timer = require('Timer');



// Load foundation
//require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App Css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="countdown" component={Countdown}/>
        <IndexRoute component={Timer}/> //Fix this
    </Route>
  </Router>,
  document.getElementById('app')
);
