const express = require('express');
const user =require('../controller/user');
var bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/users',user.register);
app.get('/users',user.allusers);

module.exports = app;
