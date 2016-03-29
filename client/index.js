/*
Index
	NavBar

*/



var React = require('react');
var ReactDom = require('react-dom');
var NavBar = require('./navbar');
var Footer = require('./footer');
var Welcome = require('./welcome');
var Cookies = require('./cookies');

require('./stylesheets/main.scss')


var App = React.createClass({
	getInitialState: function (){
		return{
		activeComponent: 'Welcome'
		}
	},	
	//will set active state
	setActiveComponent: function(componentName){
		console.log("found comp: ", componentName);
		this.setState({
			activeComponent: componentName
		})
	},


  	showWhichComponent: function(){
  		if(this.state.activeComponent && this.state.activeComponent === 'welcome'){
  			return <Welcome/>
  		} else {
  			return <Cookies/>
  		};

  	}, 


  render: function() {
    return (
      <div className = "container">
      <NavBar setActiveComponent = { this.setActiveComponent }/>
        { this.showWhichComponent() }
       <Footer />        
      </div>
      )
  }
})

React.render(
  <App />, document.getElementById('app')
);
