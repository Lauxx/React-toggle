/*
Index
	NavBar

*/



var React = require('react');
var ReactDom = require('react-dom');
var NavBar = require('./navbar');
var Footer = require('./footer');
var Welcome = require('./welcome');

require('./stylesheets/main.scss')


var App = React.createClass({
  render: function() {
    return (
      <div className = "container">
      <NavBar />
        <Welcome />
       <Footer />        
      </div>
      )
  }
})

React.render(
  <App />, document.getElementById('app')
);
