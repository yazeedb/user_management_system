//We only need to require() this file because all DB controllers are included with it
var dbInterface = require('../controllers/dbInterface.js');

function apiRouter (app, express) {
	//New express Router
	var apiRouter = express.Router();

	apiRouter.post('/users', function (req, res) {
		dbInterface.postUsers(req.body).addBack(function (err) {
			if (err) {
				//This means a duplicate user has been entered
				if (err.code == 11000) {
					res.json({ message: 'That username is already taken' });
				} else {
					res.send(err);
				}
			} else {
				res.json({ message: 'User added' });
			}
		});
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
				dbInterface.putUser(err, user, req, res).addBack(function (err) {
					if (err) {
						//This means a duplicate user has been entered
						if (err.code == 11000) {
							res.json({ message: 'That username is already taken' });
						} else {
							res.send(err);
						}
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

	//Once all routes are configured, return the router
	return apiRouter;
}

module.exports = apiRouter;