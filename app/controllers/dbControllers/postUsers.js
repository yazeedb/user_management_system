var User = require('../../models/user.js');

function postUser (userData) {
	//New user
	var user = new User(),
		key;

	//Give those attributes the user
	for (key in userData) {
		user[key] = userData[key];
	}

	//Return a save promise
	return user.save();
}

module.exports = postUser;