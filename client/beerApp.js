/*Beer
	BeerBox
		BeerForm
		BeerList
			BeerCard
*/




var React = require('react');

var Beer = React.createClass({
	render: function(){
		return(
			<div className="jumbotron">
			<h1> Beer Beer Beer</h1>
			<button className="secondary-beer-button">Button</button>
			</div>


			)
	}
});

module.exports = Beer;