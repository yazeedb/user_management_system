var User = require('../models/user.js');

function getUsers (selector) {
	//If no selector specified, return a query to find all users
	if (!selector)
		return User.find();
	else
		//Otherwise, return a query to find a select user
		return User.findOne(selector);
}

module.exports = getUsers;