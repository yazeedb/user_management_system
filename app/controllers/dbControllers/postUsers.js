var User = require('../../models/user.js');

function postUser (userData) {
	//New user
	var user = new User(),
		key;

	//Give those attributes the user
	for (key in userData) {
		user[key] = userData[key];
	}

	if (!user.admin)
		user.admin = false;

	//Return a save promise
	return user.save();
}

module.exports = postUser;