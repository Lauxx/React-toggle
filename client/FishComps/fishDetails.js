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

function FishDetails(props){
	console.log(props);
		return (
			<div className="col-sm-4">
			<br/><br/>
				<div className="card">
  					<img className="card-img-top img-flex" src={ props.oneFish.img } alt="Card image cap"/>
  						<div className="card-block">
    						<h4 className="card-title">{ props.oneFish.name }</h4>
    						<p className="card-text">{ props.oneFish.color }</p>
    						<p className="card-text">{ props.oneFish.length }</p>
    						<p className="card-text">People eater: { props.oneFish.people_eater.toString() }</p>
  						</div>
				</div>
			</div>
			)
	};

module.exports = FishDetails;



