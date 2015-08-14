//Secret key for creating JWTs
var secret = require('../../config.js').secret,
	jwt = require('jsonwebtoken');

//We only need to require() this file because all DB controllers are included with it
var dbInterface = require('../controllers/dbControllers/dbInterface.js');

function apiRouter (app, express) {
	//New express Router
	var apiRouter = express.Router();

	apiRouter.post('/authenticate', function (req, res) {
		//Query for the database
		var query = { username: req.body.username };
		//Tell DB controller to grab these fields from the user
		var whatToSelect = 'username password admin firstName lastName';

		dbInterface.getUsers(query, whatToSelect)
		.exec(function (err, user) {
			if (err)
				return res.send(err);

			if (user) {
				//if the password entered is invalid
				if (!user.comparePassword(req.body.password)) {
					return res.status(403).send({ message: 'Incorrect username/password' });
				} else {
					var payload = {
						//User info to give the JWT payload
						username: user.username,
						admin: user.admin,
						firstName: user.firstName,
						lastName: user.lastName
					};
					//Token will expire in 24 hours
					var options = {	expiresInMinutes: 1440 };

					var token = jwt.sign(payload, secret, options);

					res.json({
						token: token
					});
				}

			} else {
				return res.status(403).send({ message: 'Incorrect username/password' });
			}
		})
	});

	apiRouter.post('/users', function (req, res) {
			dbInterface.postUsers(req.body).addBack(function (err) {
				if (err) {
					console.log(err);
					res.send(err);
				} else {
					res.json({ message: 'User added' });
				}
			});
		});

	apiRouter.get('/fake', function (req, res) {
		var makeFakeUser = require('../controllers/makeFakeUser.js');

		makeFakeUser().addBack(function (err, user) {
			if (err) {
				res.send(err);						
			} else {
				res.json({
					message: 'User added',
					user: user
				});
			}
		});
	});

	apiRouter.use(function (req, res, next) {
		var token = req.params.token || req.body.token || req.headers['x-access-token'] || req.query.token; 

		if (token) {
			jwt.verify(token, secret, function (err, decoded) {
				if (err) {
					return res.status(401).json({
						message: 'Failed to authenticate token'
					});
				} else {
					//If all is well, save to req object to be used in other routes
					req.decoded = decoded;
					next();
				}
			});
		} else {
			return res.status(401).send({
				message: 'No token provided'
			});
		}
	});

	apiRouter.get('/users', function (req, res) {
		dbInterface.getUsers().exec(function (err, users) {
			if (err)
				res.send(err);

			res.json(users);
		})
	});

	//Route for a single user via URL params
	apiRouter.route('/users/:username')
		.get(function (req, res) {			
			dbInterface.getUsers(req.params).exec(function (err, user) {
				if (err)
					res.send(err);

				res.json(user);
			});
		})
		.put(function (req, res) {
			dbInterface.getUsers(req.params).exec(function (err, user) {
				dbInterface.putUser(user, req.body).addBack(function (err) {
					if (err) {
						console.log(err);
						res.send(err);
					}

					res.json({ message: 'User saved' });
				});
			});
		})
		.delete(function (req, res) {
			dbInterface.deleteUser(req.params).exec(function (err) {
				if (err)
					res.send(err);

				res.json({ message: 'User successfully deleted' });
			});
		});

	//Route to return user's JWT, containing their username, first name, and last name
	apiRouter.get('/me', function (req, res) {
		res.send(req.decoded);
	});	

	//Once all routes are configured, return the router
	return apiRouter;
}

module.exports = apiRouter;