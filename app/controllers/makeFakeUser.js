var faker = require('faker'),
	dbInterface = require('./dbControllers/dbInterface.js');

function makeFakeUser () {
	var fakePerson = {
		username: faker.internet.userName(),
		password: faker.internet.password(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		admin: randomBoolean(),
		position: faker.name.jobTitle()
	};

	return dbInterface.postUsers(fakePerson);
}

function randomBoolean () {
	//Randomly returns true or false. This will be used to determine a fake user's admin status. I set the number higher so there's less a chance of a user being an admin
	return Math.random() > 0.7;
}

module.exports = makeFakeUser;