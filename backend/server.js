const http = require('http');
const express = require('express');

var bodyParser = require("body-parser");
const rideRouter = require('./router/app');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use('/rides', rideRouter);

app.use('/', function(req, res) {
    res.send('Ride my way API');
});

const server = http.createServer(app);

const port = 3000;

server.listen(port);

console.debug('Server listening on port ' + port);