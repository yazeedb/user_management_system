var User = require('../models/user.js');

function getUsers (query, whatToSelect) {
	//If no query specified, return a promise to find all users
	if (!query)
		return User.find().select(whatToSelect);
	else
		//Otherwise, return a promise to find a single user
		return User.findOne(query).select(whatToSelect);
}

module.exports = getUsers;