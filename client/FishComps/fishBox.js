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

var FishData = require('./fishData');
var FishFormData = require('./fishFormData');
var FishDetailsData = require('./fishDetailsData');
var Toggle = require('./toggle');




var FishBox = React.createClass({
	getInitialState: function(){
		return{
			activeComponent: 'fish',
			activeFishId: null,
		}
	},

	getId: function(id){
		return this.setState({activeFishId: id, activeComponent: 'oneFish'})
	},

	showComp: function(){
		//console.log(this.state.activeComponent);
		console.log(this.state.activeFishId);
		if(this.state.activeComponent === 'fish'){
			return <FishData getId={ this.getId } />

		} else if (this.state.activeComponent ==='form'){
			return <FishFormData toggleActiveComp={ this.toggleActiveComp }/>

		} else if (this.state.activeComponent === 'oneFish'){

			return <FishDetailsData  id={ this.state.activeFishId } />

		} else {
			throw new Error('No active Component', this.state.activeComponent);
		}
	},

	toggleActiveComp: function(name){
		this.setState({activeComponent: name})
	},

	render: function(){
		
		return (
			<div className="my-container container">
			<Toggle toggleActiveComp = { this.toggleActiveComp }/>
			{ this.showComp() }
			</div>
			)
	}
});


module.exports = FishBox;