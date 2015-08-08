var User = require('../../models/user.js');

function deleteUser (selector) {
	//Return a query to delete a single user
	return User.findOneAndRemove(selector);
}

module.exports = deleteUser;