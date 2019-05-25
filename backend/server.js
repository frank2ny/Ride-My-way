const http = require('http');
const express = require('express');

var bodyParser = require("body-parser");
const itemsRouter = require('./router/app');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.json());

app.use('/rides', itemsRouter);

app.use('/', function(req, res) {
    res.send('Ride my way API');
});

const server = http.createServer(app);

const port = 3000;

server.listen(port);

console.debug('Server listening on port ' + port);