/*FishApp
	FishBox
		FishForm
		FishList
			FishCard
*/

var React = require('react');

var FishForm = React.createClass({

	render: function(){
		return(
			<div className="container col-sm-6 col-sm-offset-3">
			<form>
			<legend>Enter new Fish!</legend>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput">Name</label>
    				<input type="text" className="form-control" id="formGroupExampleInput" placeholder="Species Name"/>
  				</fieldset>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput2">Color</label>
    				<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Primary Color"/>
  				</fieldset>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput2">Length</label>
    				<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Length in Inches"/>
  				</fieldset>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput2">People Eater?</label>
    				<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="True or False"/>
  				</fieldset>
  				<fieldset className="form-group">
    				<label for="formGroupExampleInput2">Image</label>
    				<input type="text" className="form-control" id="formGroupExampleInput2" placeholder="http://example.com"/>
  				</fieldset>
  				<a href="#" className="btn btn-primary">Submit</a>
			</form>
			</div>
			)
	}
});

module.exports = FishForm;