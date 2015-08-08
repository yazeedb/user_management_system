var faker = require('faker'),
	dbInterface = require('./dbControllers/dbInterface.js');

function makeFakeUser () {
	var fakePerson = {
		username: faker.internet.userName(),
		password: faker.internet.password(),
		admin: randomBoolean(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		etc: [
			{position: faker.name.jobTitle()},
			{country: faker.address.country()}
		]
	};

	fakePerson.email = faker.internet.email(fakePerson.firstName, fakePerson.lastName);

	return dbInterface.postUsers(fakePerson);
}

function randomBoolean () {
	//Randomly returns true or false. I set the number higher so there's less a chance of a user being an admin
	var amIAnAdmin = Math.random() > 0.8;

	return amIAnAdmin;
}

module.exports = makeFakeUser;