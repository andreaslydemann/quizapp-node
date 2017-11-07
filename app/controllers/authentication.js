const User = require('../models/user');

const timeout = process.env.API_DELAY;

function login(req, res) {
    if (!req.body.email || !req.body.password) {
        res.status(400).json({
            "message": "Email and password are required"
        });
        return;
    }

    setTimeout(() => {
        User.findOne({'email': req.body.email}).exec(function (err, user) {
            if (!user) {
                res.status(404).json({
                    "message": "Incorrect email"
                });
                return;
            }
            var valid = user.validPassword(req.body.password);
            if (!valid) {
                res.status(404).json({
                    "message": "Incorrect password"
                });
            } else {
                var token = user.generateJwt();
                res.status(200).json({
                    "token": token
                });
            }
        });

    }, timeout)
};

function register(req, res) {
    if (!req.body.name || !req.body.email || !req.body.password) {
        res.status(400).json({
            "message": "All fields required"
        });
        return;
    }

    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    setTimeout(() => {
        user.save(function (err) {
            var token;
            if (err) {
                res.status(404).json({
                    "message": err
                });
            } else {
                token = user.generateJwt();
                res.status(200).json({
                    "token": token
                });
            }
        });

    }, timeout)
};

module.exports = {
    login,
    register
};