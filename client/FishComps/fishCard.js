/*FishApp
	FishBox
		FishData
			FishList
				FishCard
		FishFormData
			FishForm
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
    						<a href="#" className="btn btn-primary">Button</a>
  						</div>
				</div>
			</div>
			)
	};

module.exports = FishCard;