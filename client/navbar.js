


var React = require('react');
var links = ['Welcome', 'Cookies', 'Fish', 'Bears', 'Beer'];


var NavBar = React.createClass({
	
	render: function () {
		var link = links.map(function(item){
		return (
			<a className="nav-item nav-link" href="#">{ item }</a>	
			)
	})


		return(
			<div>
				<nav className="navbar navbar-light bg-faded">
  					<div className="nav navbar-nav">
    					{ link }
  					</div>
				</nav>
			</div>
			)
	}
});

module.exports = NavBar;