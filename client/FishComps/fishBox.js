/*FishApp
	FishBox
		FishForm
		FishList
			FishCard
*/	

var React = require('react');
var FishList = require('./fishList');
var FishForm = require('./fishForm');



var Toggle = React.createClass({
	render: function(){
		return(
			<div className="btn-group" data-toggle="buttons">
  				<a href="#" className="btn btn-primary" onClick={ this.props.toggleActiveComp.bind(null, 'fish') }>Fish List</a>
  				<a href="#" className="btn btn-primary" onClick={ this.props.toggleActiveComp.bind(null, 'form') }>Enter Fish</a>
			</div>

			)
	}
});

var FishBox = React.createClass({
	getInitialState: function(){
		return{
			activeComponent: 'fish'
		}
	},

	showComp: function(){
		if(this.state.activeComponent === 'fish'){
			return <FishList fishArray={ this.props.fishArray } />
		} else if (this.state.activeComponent ==='form'){
			return <FishForm handleNewFishPost={ this.props.handleNewFishPost }/>
		} else {
			return <FishList fishArray={ this.props.fishArray } />
		}
	},

	toggleActiveComp: function(name){
		this.setState({activeComponent: name})
	},

	render: function(){
		console.log("found fish!", this.props.fishArray)
		return (
			<div className="my-container">
			<Toggle toggleActiveComp = { this.toggleActiveComp }/>
			{ this.showComp() }
			</div>
			)
	}
});


module.exports = FishBox;