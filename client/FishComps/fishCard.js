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

function FishCard(props){
		return (
			<div className="col-sm-4">
				<br/>
				<div className="card">
  					<img className="card-img-top img-flex" src={ props.img } alt="Card image cap"/>
  						<div className="card-block">
    						<h4 className="card-title">{ props.name }</h4>
    						<p className="card-text">{ props.color }</p>
    						<p className="card-text">{ props.length }</p>
    						<button onClick={ props.getId.bind(null,'showOne', props.id) } className="btn btn-success">Get Fish</button><br/>
    						<button onClick={ props.getId.bind(null,'editOne', props.id) } className="btn btn-primary">Edit Fish</button><br/>
  							<button onClick={ props.deleteFish.bind(null, props.id) } className="btn btn-warning"> Delete Fish</button>
  						</div>
				</div>
			</div>
			)
	};

module.exports = FishCard;