const mongoose = require('mongoose');

//User schema
let user = mongoose.Schema({
    name: String,
    lastName: String,
    id: String,
    birthDate: String,
    gender: String,
    email: String,
    username: String,
    password: String
});

//User model for documents in collection "Users" (it's automatically pluralized) based on schema user
module.exports = mongoose.model('User', user);