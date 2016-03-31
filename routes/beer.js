var express = require('express');
var router = express.Router();
var Beer = require('../models/beer');

router.route('/')
	.get(function(req, res){
		Beer.find(function(err, beer){
			if(err){
				res.status(500).send(err, 'Something broke on GET-ting all BEER')
			} else {
				res.json({ message: "Getting all beer"})
			}
		});
	})

module.exports = router;