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

	contextTypes: {
		sendNotification: React.PropTypes.func.isRequired
	},

	deleteFish: function(id){
		var self = this;
		if (confirm("Are you sure?") ){
		$.ajax({
			url: '/api/fish/' + id,
			method: 'DELETE'
		}).done(function(){
			self.context.sendNotification("Fish Deleted");
			self.loadFishFromServer();
		})
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
		return this.state.fishArray ? <FishList getId={ this.props.getId } fishArray={ this.state.fishArray } deleteFish={ this.deleteFish }/> : null;
	}
});

module.exports = FishData;
