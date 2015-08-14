function putUser (err, user) {
	//Update the user with the information entered
	var key;

	for (key in req.body) {
		user[key] = req.body[key];
	}

	//Return a save promise
	return user.save();
}

module.exports = putUser;