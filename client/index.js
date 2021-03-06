/*
Index
	NavBar
	Footer
*/



var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./navbar');
var Footer = require('./footer');
var Welcome = require('./welcome');
var Cookies = require('./cookies');
var FishApp = require('./fishApp');
var Beer = require('./beerApp');
var Bears = require('./bear');
var Notifier = require('./notifier');

require('./stylesheets/main.scss');


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

	// shorthand if statements 
  	showWhichComponent: function(){
  		switch(this.state.activeComponent) {
    		case 'Welcome':
        		return <Welcome/>
        		break;
    		case 'Cookies':
        		return <Cookies/>
        		break;
        	case 'Fish':
        		return <FishApp/>
        		break;
        	case 'Beer':
        		return <Beer/>
        		break;
        	case 'Bears':
        		return <Bears/>
        		break;			
    		default:
        	 return <Welcome/>
		}

  	}, 


  render: function() {
    return (
      <div className = "container">
      <Notifier>
        <NavBar setActiveComponent = { this.setActiveComponent }/>
         { this.showWhichComponent() }
        <Footer />
      </Notifier>         
      </div>
      )
  }
});

ReactDOM.render(
  <App />, document.getElementById('app')
);
