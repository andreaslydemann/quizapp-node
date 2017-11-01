#!/usr/bin/env node
require('dotenv').config();
require('./app/db/mongoose');
const bodyParser = require('body-parser');
const api = require('./app/routes');
const express = require('express');
const app = express();
const http = require('http');
const port = (process.env.PORT || 3000);
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/dist'));

app.use('/api', api);
app.all('*', function(req, res) {
    res.status(200).sendFile(__dirname + '/dist/index.html');
});

server.on('error', function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
});
server.listen(port);

module.exports = app;