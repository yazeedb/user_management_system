//A single file where all DB controllers are brought together
//This is to avoid too many require() in the API file

var postUsers = require('../controllers/postUsers.js'),
	getUsers = require('../controllers/getUsers.js'),
	putUser = require('../controllers/putUser.js'),
	deleteUser = require('../controllers/deleteUser.js');

module.exports = {
	postUsers: postUsers,
	getUsers: getUsers,
	putUser: putUser,
	deleteUser: deleteUser
}