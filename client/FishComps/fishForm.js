/*FishApp
	FishBox
		FishForm
		FishList
			FishCard
*/

var React = require('react');

var FishForm = React.createClass({
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
		this.props.handleNewFishPost(fish);
		this.setState({ name: '', color: '', length: '', img: '' });

		alert('Success! You have added a new fish.');
		}
	},

	

	render: function(){
		return(
			<div className="container">
			<form className="col-sm-6" onSubmit={ this.handleSumbit }>
			<legend>Enter new Fish!</legend>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput">Name</label>
    				<input type="text" className="form-control" onChange={ this.handleNameChange } 
    				value={ this.state.name }
    				id="formGroupExampleInput" placeholder="Species Name"/>
  				</fieldset>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput2">Color</label>
    				<input type="text" className="form-control" onChange={ this.handleColorChange }
    				value={ this.state.color }
    				id="formGroupExampleInput2" placeholder="Primary Color"/>
  				</fieldset>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput2">Length</label>
    				<input type="text" className="form-control" onChange={ this.handleLengthChange }
    				value={ this.state.length }
    				id="formGroupExampleInput2" placeholder="Length in Inches"/>
  				</fieldset>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput2">People Eater</label>
    				<select onChange={ this.handlePeopleEaterChange } className="form-control">
    					<option value={ true }>yes</option>
    					<option value={ false }>no</option>
    				</select>	
    			</fieldset>	
  				 <fieldset className="form-group">
    				<label for="formGroupExampleInput2">Image</label>
    				<input type="text" className="form-control" onChange={ this.handleImgChange }
    				value={ this.state.img }
    				id="formGroupExampleInput2" placeholder="http://example.com"/>
  				</fieldset>
  				<button className="btn btn-primary" type="submit">Submit</button>
			</form>
			</div>
			)
	}
});

module.exports = FishForm;