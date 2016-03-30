/*FishApp
	FishBox
		FishForm
		FishList
			FishCard
*/	

var React = require('react');
var FishList = require('./fishList');
var FishForm = require('./fishForm');

var FishBox = React.createClass({
	render: function(){
		console.log("found fish!", this.props.fishArray)
		return (
			<div className="my-container">
			<FishList fishArray={ this.props.fishArray } />
			<FishForm/>
			</div>
			)
	}
});


module.exports = FishBox;