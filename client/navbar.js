


var React = require('react');
var links = ['welcome', 'cookies', 'fish', 'bears', 'beer'];


var NavBar = React.createClass({
	render: function () {
		return(
			<div>
				<nav className="navbar navbar-light bg-faded">
  					<div className="nav navbar-nav">
    					<a className="nav-item nav-link active" href="#">Practice<span className="sr-only">(current)</span></a>
    					<a className="nav-item nav-link" href="#">Features</a>
    					<a className="nav-item nav-link" href="#">Pricing</a>
    					<a className="nav-item nav-link" href="#">About</a>
  					</div>
				</nav>
			</div>
			)
	}
});

module.exports = NavBar;