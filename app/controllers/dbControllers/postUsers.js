var User = require('../../models/user.js');

function postUser (userData) {
	//New user
	var user = new User(userData);

	if (!user.admin)
		user.admin = false;

	//Return a save promise
	return user.save();
}

module.exports = postUser;