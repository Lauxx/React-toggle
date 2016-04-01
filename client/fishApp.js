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
var FishBox = require('./FishComps/fishBox');


var Jumbotron = React.createClass({
	render: function(){
		return(
			<div className="jumbotron">
			<h1>Fishy Fishy Fishy</h1>
			</div>

			)
	}
});

var Loader = React.createClass({
	render: function(){
		return(
			<div>
			   <i className="fa-spin fa fa-spinner fa-6"></i>
			</div>
			)
	}
});

var FishApp = React.createClass({


	render: function (){
		return(
			<div>
				<div>
				<Jumbotron/>
				</div>
				<div>
				<FishBox />
				</div>
			</div>
			)
		
	}
});

module.exports = FishApp;