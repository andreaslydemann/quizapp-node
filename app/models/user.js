const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        require: true
    },
    hash: String,
    salt: String
});

schema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(24).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 128, 'sha512').toString('hex');
};

schema.methods.validPassword = function (password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 128, 'sha512').toString('hex');
    return this.hash === hash;
};

schema.methods.generateJwt = function () {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000)
    }, process.env.JWT_SECRET);
};

module.exports = mongoose.model('User', schema);