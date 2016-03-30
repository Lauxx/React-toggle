/*FishApp
	FishBox
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

var Toggle = React.createClass({
	render: function(){
		return(
			<div className="btn-group" data-toggle="buttons">
  				<label className="btn btn-primary active">
    				<input type="radio"/> Fish List
  				</label>
  				<label className="btn btn-primary">
    				<input type="radio"/> Enter Fish
  				</label>
  				
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
				<Toggle/>
				</div>
				<div>
				<FishBox fishArray={ this.state.fishArray }/>
				</div>
			</div>
			)
		} else {
			return <Loader/>
		}
	}
});

module.exports = FishApp;