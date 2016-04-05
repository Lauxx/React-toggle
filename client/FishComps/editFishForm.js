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

var EditFishForm = React.createClass({
	render: function(){
		return (
			<div>
			<div className="container">
			<form className="col-sm-6" onSubmit={ this.props.handleEditFishSubmit }>
			<legend>Update a fish</legend>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput">Name</label>
    				<input type="text" className="form-control" onChange={ this.props.onNameChange } 
    				value={ this.props.name }
    				id="formGroupExampleInput" placeholder="Species Name"/>
  				</fieldset>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput2">Color</label>
    				<input type="text" className="form-control" onChange={ this.props.onColorChange }
    				value={ this.props.color }
    				id="formGroupExampleInput2" placeholder="Primary Color"/>
  				</fieldset>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput2">Length</label>
    				<input type="text" className="form-control" onChange={ this.props.onLengthChange }
    				value={ this.props.length }
    				id="formGroupExampleInput2" placeholder="Length in Inches"/>
  				</fieldset>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput2">People Eater</label>
    				<select onChange={ this.props.onPeopleEaterChange } value={ this.props.people_eater }className="form-control">
    					<option disabled selected value> Select One </option>
    					<option value={ true }>yes</option>
    					<option value={ false }>no</option>
    				</select>	
    			</fieldset>	
  				 <fieldset className="form-group">
    				<label for="formGroupExampleInput2">Image</label>
    				<input type="text" className="form-control" onChange={ this.props.onImgChange }
    				value={ this.props.img }
    				id="formGroupExampleInput2" placeholder="http://example.com"/>
  				</fieldset>
  				<button className="btn btn-primary" type="submit">Submit</button>
			</form>
			</div>
			</div>
			)
	}
})

module.exports = EditFishForm;