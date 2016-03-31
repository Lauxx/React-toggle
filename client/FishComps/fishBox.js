/*FishApp
	FishBox
		FishData
			FishList
				FishCard
		FishFormData
			FishForm
*/

var React = require('react');

var FishData = require('./fishData');
var FishFormData = require('./fishFormData');



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
			console.log(this.state.activeComponent);
			return <FishData/>
		} else if (this.state.activeComponent ==='form'){
			return <FishFormData toggleActiveComp={ this.toggleActiveComp }/>
		} else {
			throw new Error('No active Component', this.state.activeComponent);
		}
	},

	toggleActiveComp: function(name){
		this.setState({activeComponent: name})
	},

	render: function(){
		
		return (
			<div className="my-container">
			<Toggle toggleActiveComp = { this.toggleActiveComp }/>
			{ this.showComp() }
			</div>
			)
	}
});


module.exports = FishBox;