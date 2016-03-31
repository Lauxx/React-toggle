/*FishApp
	FishBox
		FishData
			FishList
				FishCard
		FishFormData
			FishForm
*/



var React = require('react');
var FishForm = require('./fishForm');

var FishFormData = React.createClass({
	propTypes: {
		toggleActiveComp: React.PropTypes.func.isRequired
	},

	getInitialState: function(){
		return {
			name: null,
			color: null,
			people_eater: null,
			length: null,
			img: null
		}
	},

	handleNameChange: function(e){
		this.setState({name: e.target.value})
	},

	handleColorChange: function(e){
		this.setState({color: e.target.value})
	},

	handlePeopleEaterChange: function(e){
		this.setState({people_eater: e.target.value})
	},

	handleLengthChange: function(e){
		this.setState({length: e.target.value})
	},

	handleImgChange: function(e){
		this.setState({img: e.target.value})
	},

	handleSumbit: function(e){
		e.preventDefault();

		var fish = {}

		fish.name = this.state.name.trim();
		fish.color = this.state.color.trim();
		fish.people_eater = this.state.people_eater;
		fish.length = this.state.length.trim();
		fish.img = this.state.img.trim();

		console.log(fish);

		if(!fish.name && !fish.color){
			return; 
		} else {
		this.handleNewFishPost(fish);
		this.setState({ name: '', color: '', people_eater: '', length: '', img: '' });

		alert('Success! You have added a new fish.');
		}
	},

	handleNewFishPost: function(fish){
		
		$.ajax({
			url: '/api/fish',
			dataType: 'json',
			type: 'POST',
			data: fish,
			success: function(data){
				this.props.toggleActiveComp('fish');
				console.log(data);
			}.bind(this),
			error: function(xhr, status, err){
				console.error('/api/fish', status, err.toString())
			}.bind(this)
		})
	},


	render: function(){
		return (
			<div>
				<FishForm handleSumbit={ this.handleSumbit} handleNameChange={this.handleNameChange}
				 handleColorChange={this.handleColorChange} handlePeopleEaterChange={this.handlePeopleEaterChange}
				 handleLengthChange={this.handleLengthChange} handleImgChange={this.handleImgChange}
				 />
			</div>
			)
	}
});


module.exports = FishFormData;