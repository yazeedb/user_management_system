var mongoose = require('mongoose'),
	//bcrypt for password hashing
	bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
	//username must be unique–no duplicates allowed
	username: { type: String, required: true, index: { unique: true }},
	password: { type: String, required: true, select: false },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	admin: { type: Boolean }
});

//Before saving the user, run this function
UserSchema.pre('save', function (next) {
	var user = this;

	//If the password hasn't been modified, we can skip this function
	if (!user.isModified('password'))
		return next();

	//Hash the password
	bcrypt.hash(user.password, null, null, function (err, hash) {
		if (err)
			return next(err);

		//Set password equal to bcrypt's hash
		user.password = hash;
		next();
	});
});

UserSchema.methods.comparePassword = function (password) {
	//Returns true if passwords match, false otherwise
	return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model('User', UserSchema);