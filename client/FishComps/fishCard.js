/*FishApp
	FishBox
		FishData
		FishForm
		FishList
			FishCard
*/


var React = require('react');

var FishCard = React.createClass({
	render: function(){
		return (
			<div className="col-sm-4">
			<br/>
				<div className="card">
  					<img className="card-img-top img-flex" src={ this.props.img } alt="Card image cap"/>
  						<div className="card-block">
    						<h4 className="card-title">{ this.props.name }</h4>
    						<p className="card-text">{ this.props.color }</p>
    						<p className="card-text">{ this.props.length }</p>
    						<a href="#" className="btn btn-primary">Button</a>
  						</div>
				</div>
			</div>
			)
	}
});

module.exports = FishCard;