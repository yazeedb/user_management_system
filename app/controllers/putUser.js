function putUser (err, user, req, res) {
	//Update the user with the information entered
	if (req.body.username)
		user.username = req.body.username;

	if (req.body.password)
		user.password = req.body.password;

	if (req.body.firstName)
		user.firstName = req.body.firstName;

	if (req.body.lastName)
		user.lastName = req.body.lastName;

	//Return a save promise
	return user.save();
}

module.exports = putUser;