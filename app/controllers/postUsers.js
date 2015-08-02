var User = require('../models/user.js');

function postUser (userData) {
	//New user
	var user = new User();

	//Give that user the attributes
	user.username = userData.username;
	user.password = userData.password;
	user.firstName = userData.firstName;
	user.lastName = userData.lastName;
	user.admin = userData.admin || false;

	//Return a save promise
	return user.save();
}

module.exports = postUser;