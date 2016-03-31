/*FishApp
	FishBox
		FishData
			FishList
				FishCard
		FishFormData
			FishForm
*/

var React = require('react');

function FishForm(props){
		return(
			<div className="container">
			<form className="col-sm-6" onSubmit={ props.handleSumbit }>
			<legend>Enter new Fish!</legend>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput">Name</label>
    				<input type="text" className="form-control" onChange={ props.handleNameChange } 
    				value={ props.name }
    				id="formGroupExampleInput" placeholder="Species Name"/>
  				</fieldset>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput2">Color</label>
    				<input type="text" className="form-control" onChange={ props.handleColorChange }
    				value={ props.color }
    				id="formGroupExampleInput2" placeholder="Primary Color"/>
  				</fieldset>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput2">Length</label>
    				<input type="text" className="form-control" onChange={ props.handleLengthChange }
    				value={ props.length }
    				id="formGroupExampleInput2" placeholder="Length in Inches"/>
  				</fieldset>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput2">People Eater</label>
    				<select onChange={ props.handlePeopleEaterChange } className="form-control">
    					<option disabled selected value>Choose One</option>
    					<option value={ true }>yes</option>
    					<option value={ false }>no</option>
    				</select>	
    			</fieldset>	
  				 <fieldset className="form-group">
    				<label for="formGroupExampleInput2">Image</label>
    				<input type="text" className="form-control" onChange={ props.handleImgChange }
    				value={ props.img }
    				id="formGroupExampleInput2" placeholder="http://example.com"/>
  				</fieldset>
  				<button className="btn btn-primary" type="submit">Submit</button>
			</form>
			</div>
			)
	};

module.exports = FishForm;


