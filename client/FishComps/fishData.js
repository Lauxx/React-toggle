/*FishApp
	FishBox
		FishData
			FishList
				FishCard
		FishFormData
			FishForm
*/


var React = require('react');
var FishList = require('./fishList');

var FishData = React.createClass({
	//null makes it easier to manage state
	getInitialState: function(){
		return{
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
			setTimeout(function(){self.setState({
				fishArray: data})
			}, 1000);
		})
	},

	componentDidMount: function(){
		this.loadFishFromServer();
	},

	render: function(){
		return this.state.fishArray ? <FishList fishArray={ this.state.fishArray }/> : null;
	}
});

module.exports = FishData;
