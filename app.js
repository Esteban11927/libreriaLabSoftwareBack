const userManagement = require('./controllers/userManagement/userManagement');
const bookManagement = require('./controllers/bookManagement/bookManagement');
//const authenticationModule = require
const mongoose = require('mongoose');

const express = require('express');
app = express();
app.listen(3001);

//user = estebantest - password = rpcywWTg9eHm2STz - database = librosdb
url = 'mongodb+srv://estebantest:rpcywWTg9eHm2STz@cluster0.z4njh.mongodb.net/librosdb?retryWrites=true&w=majority';
options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, options);

app.use('/userManagement', userManagement);
app.use('/bookManagement', bookManagement);