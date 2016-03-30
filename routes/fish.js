var express = require('express');
var router = express.Router();
var Fish = require('../models/fish');


// should go to /api/fish/ and be able to get all
router.route('/')
//get all the fish!
	.get(function(req, res){
		Fish.find(function(err, fish){
			if (err){
				res.status(500).send(err, "Something broke on GET-ting all fish!")
			} else {
				res.json(fish)
			}
		});
	})
//create a new fish!
	.post(function(req, res){
		var fish = new Fish();

		fish.name = req.body.name;  
		fish.color = req.body.color;
		fish.people_eater = req.body.people_eater;
		fish.length = req.body.length;
		fish.img = req.body.img;
		//save fish with a node style callback function(req, res)
		// if err, Handle Error effectively
		fish.save(function(err, fish){
			if (err){
				res.status(500).send(err, "Something broke on new POST save!")
			} else {
				res.json(fish)
			}
		});
	})

//without oneFish next route would conflict
router.route('/oneFish/:_id')
//get one fish by id!
	.get(function(req, res){
		Fish.findById({_id: req.params._id}, function(err, fish){
			if(err){
				res.status(500).send(err, "Something broke on GET-ting one fish!")
			} else {
				res.json(fish)
			}
		});
	})


//going to return all people_eating fish! passing in people_eater 
//as a params - super cool!
router.route('/man_eater')
	.get(function(req, res){
		Fish.find({people_eater: true}, function(err, fish){
			if (err){
				res.status(500).send(err, 'Something broke on getting people_eating fish!')
			} else {
				res.json(fish)
			}
		})
	})


router.route('/:_id')
//edit/update one fish by id!
	.put(function(req, res){
		Fish.findById({_id: req.params._id}, function(err, fish){
			if(err){
				res.status(500).send(err, "Something broke finding fish for a PUT!")
			} else {
				fish.name = req.body.name ? req.body.name : fish.name;
				fish.color = req.body.color ? req.body.color : fish.color;
				fish.people_eater = req.body.people_eater ? req.body.people_eater : fish.people_eater;
				fish.length = req.body.length ? req.body.length : fish.length;
				fish.img = req.body.img	? req.body.img : fish.img;

				//save your updated fish
				fish.save(function(err, fish){
					if(err){
						res.status(500).send(err, "Something broke on PUT save!")
					} else {
						res.json({message: "fish updated"})
					}
				})
			}
		});
	})

//delete one fish by id!
	.delete(function(req, res){
		Fish.remove({_id: req.params._id}, function(err, post){
			if(err){
				res.status(500).send(err, "Something broke on DELETE fish!")
			} else {
				res.json ({message: "post deleted!"})
			}
		});
	})

module.exports = router;