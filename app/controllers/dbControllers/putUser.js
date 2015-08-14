function putUser (user, newInfo) {
	//Update the user with the information entered
	var key;

	for (key in newInfo) {
		user[key] = newInfo[key];
	}

	//Return a save promise
	return user.save();
}

module.exports = putUser;