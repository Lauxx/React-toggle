

var React = require('react');


var Toggle = React.createClass({
	render: function(){
		return(
			<div className="container toggler">
				<div className="btn-group" data-toggle="buttons">
  					<a href="#" className="btn btn-primary" onClick={ this.props.toggleActiveComp.bind(null, 'fish') }>Fish List</a>
  					<a href="#" className="btn btn-primary" onClick={ this.props.toggleActiveComp.bind(null, 'form') }>Enter Fish</a>
				</div>
			</div>

			)
	}
});

module.exports = Toggle;