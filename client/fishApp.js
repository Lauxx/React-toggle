/*FishApp
	FishBox
		FishData
		FishForm
		FishList
			FishCard
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

	handleNewFishPost: function(fish){
		
		$.ajax({
			url: '/api/fish',
			dataType: 'json',
			type: 'POST',
			data: fish,
			success: function(data){
				this.loadFishFromServer();
				console.log(data);
			}.bind(this),
			error: function(xhr, status, err){
				console.error('/api/fish', status, err.toString())
			}.bind(this)
		})
	},

	componentDidMount: function(){
		this.loadFishFromServer();
	},

	render: function (){
		if(this.state.fishArray){
		return(
			<div>
				<div>
				<Jumbotron/>
				</div>
				<div>
				<FishBox fishArray={ this.state.fishArray } handleNewFishPost={ this.handleNewFishPost }/>
				</div>
			</div>
			)
		} else {
			return <Loader/>
		}
	}
});

module.exports = FishApp;