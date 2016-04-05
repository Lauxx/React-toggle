/*FishApp
	FishBox
		FishData
			FishList
				FishCard
		FishFormData
			FishForm
		FishDetailsData
			FishDetails
		EditFishData
			EditFishForm		
*/

var React = require('react');
var EditFishForm = require('./editFishForm');
	

var EditFishData = React.createClass({
	getInitialState: function(){
		return {
			name: null, 
			color: null, 
			length: null,
			people_eater: null,
			img: null 
		}
	},

	contextTypes: {
		sendNotification: React.PropTypes.func.isRequired
	},

	loadSingleFishFromServer: function(){
		var self = this;
		$.ajax({
			url: "/api/fish/oneFish/" + this.props.id,
			method: 'GET',
		}).done(function(data){
			//data is one single fish
			console.log("Loaded one fish from server ", data)
			self.setState({
				name: data.name,
				color: data.color, 
				length: data.length,
				people_eater: data.people_eater,
				img: data.img
			})
		});
	},

	updateFishForm: function(fish){

		$.ajax({
      	url: '/api/fish/' + this.props.id,
      	dataType: 'json',
      	type: 'PUT',
      	data: fish,
      	success: function(data){
      		this.props.toggleActiveComp('oneFish');
        	this.loadSingleFishFromServer();
        	this.context.sendNotification("Updated a fish!");
      	}.bind(this),
      	error: function(xhr, status, err){
        	console.error(status, err.toString());
      	}.bind(this)
    	});
  	},
	
	handleEditFishSubmit: function(e){
		e.preventDefault();

		var name = this.state.name.trim();
		var color = this.state.color.trim();
		var length = this.state.length.trim();
		var people_eater = this.state.people_eater;
		var img = this.state.img.trim();

		this.updateFishForm({ name: name, color: color, length: length, 
			people_eater: people_eater, img: img});
	},

	onNameChange: function(e){
		this.setState({ name: e.target.value})
	},

	onColorChange: function(e){
		this.setState({ color: e.target.value })
	},

	onLengthChange: function(e){
		this.setState({ length: e.target.value })
	},

	onPeopleEaterChange: function(e){
		this.setState({ people_eater: e.target.value })
	},

	onImgChange: function(e){
		this.setState({ img: e.target.value })
	},

	componentDidMount: function(){
		this.loadSingleFishFromServer();
	},

	render: function(){
		return (
			<div>
			<EditFishForm name={ this.state.name } color={ this.state.color }
			length={ this.state.length } people_eater={ this.state.people_eater }
			img={ this.state.img } onNameChange={ this.onNameChange }
			onColorChange={ this.onColorChange } onLengthChange={ this.onLengthChange }
			onPeopleEaterChange={ this.onPeopleEaterChange } onImgChange={ this.onImgChange }
			handleEditFishSubmit={ this.handleEditFishSubmit }/>
			</div>
			)
		
	}
})

module.exports = EditFishData;
