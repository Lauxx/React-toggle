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
var FishDetails = require('./fishDetails');

var FishDetailsData = React.createClass({
	getInitialState: function(){
		return {
			oneFish: null
		}
	},

	loadOneFishFromServer: function(){
		var self = this;
		$.ajax({
			url: '/api/fish/oneFish/' + this.props.id,
			method: 'GET'
		}).done(function(data){
			self.setState({oneFish: data})
		})
	},

	componentDidMount: function(){
		this.loadOneFishFromServer();
	},

	render: function(){
		//console.log("fish details data here!")
		return this.state.oneFish ? <FishDetails oneFish={ this.state.oneFish } /> : null;
			
	}
});


module.exports = FishDetailsData;