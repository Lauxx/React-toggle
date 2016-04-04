/*FishApp
	FishBox
		FishData
			FishList
				FishCard
		FishFormData
			FishForm
		FishDetailsData
			FishDetails	
*/


var React = require('react');
var FishCard = require('./fishCard');

function FishList(props){
		//map through our data and pass it to fish card
		var fish = props.fishArray.map(function(item){
			return <FishCard
					deleteFish = { props.deleteFish }
					getId={ props.getId }
					id={ item._id }
					key={ item._id }
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
	};

FishList.propTypes = {
	fishArray: React.PropTypes.array.isRequired
};

module.exports = FishList;