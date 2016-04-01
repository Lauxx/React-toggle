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
var FishList = require('./fishList');

var FishData = React.createClass({
	//null makes it easier to manage state
	getInitialState: function(){
		return {
			fishArray: null
		}
	},

	loadFishFromServer: function(){
		//go get all fish from the server, set fisharray state
		var self = this;
		$.ajax({
			url: '/api/fish',
			method: 'GET'
		}).done(function(data){
		//update fish state with data
		//console.log(data);
			self.setState({ fishArray: data });
		})
	},

	componentDidMount: function(){
		this.loadFishFromServer();
	},

	render: function(){
		return this.state.fishArray ? <FishList getId={ this.props.getId } fishArray={ this.state.fishArray }/> : null;
	}
});

module.exports = FishData;
