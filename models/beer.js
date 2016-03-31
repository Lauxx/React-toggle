var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BeerSchema = new Schema({
	name: String,
	style: String,
	alcohol_percent: String,
	distributor: String
});

module.exports = mongoose.model('Beer', BeerSchema);