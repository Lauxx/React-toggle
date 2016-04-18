var faker = require('faker');
var Fish = require('./models/fish');

module.exports = {

	createFish: function(){
		for (var i = 0; i < 20 ; i++){
			var fish = new Fish({
				name: faker.name.findName(),
				color: faker.commerce.color(),
				people_eater: faker.random.boolean(),
				length: faker.random.word(),
				img: faker.image.animals()
			})
			fish.save();
		};

		console.log('there are now ' + Fish.count() + ' fish in the database');
	}
};


/* 
if we had users do this to fake some data:
within the module.exports include the following:

createUsers = function(){
	for (var i = 0; i < 20; i++){
	var user = new User({
		local: {
			email: faker.internet.email(),
			username: faker.internet.userName(),
			password: faker.internet.password()
		}
	})
	user.save();

	};
}



*/




