/*FishApp
	FishBox
		FishForm
		FishList
			FishCard
*/


var React = require('react');
var FishCard = require('./fishCard');

var FishList = React.createClass({
	render: function(){
		//map through our data and pass it to fish card
		var fish = this.props.fishArray.map(function(item){
			return <FishCard
					name={ item.name }
					color={ item.color }
					people_eater={ item.people_eater }
					length={ item.length }
					img={ item.img } />
		})
		return (
			<div className="fish-flex">
				{ fish }
			</div>
			)
	}
});

module.exports = FishList;