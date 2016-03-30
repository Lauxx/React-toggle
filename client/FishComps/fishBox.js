/*FishApp
	FishBox
		FishList
			FishCard
*/	

var React = require('react');
var FishList = require('./fishList');

var FishBox = React.createClass({
	render: function(){
		console.log("found fish!", this.props.fishArray)
		return (
			<div>
			<FishList fishArray={ this.props.fishArray } />
			</div>
			)
	}
});


module.exports = FishBox;