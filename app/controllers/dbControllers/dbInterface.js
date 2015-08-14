//A single file where all DB controllers are brought together
//This is to avoid too many require() in the API file

var postUser = require('./postUsers.js'),
	getUsers = require('./getUsers.js'),
	putUser = require('./putUser.js'),
	deleteUser = require('./deleteUser.js');

module.exports = {
	postUser: postUser,
	getUsers: getUsers,
	putUser: putUser,
	deleteUser: deleteUser
}