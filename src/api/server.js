#!/usr/bin/env node

import debug from 'debug';
import http from 'http';
import app from './app';

const logger = debug('technologic.as:server');

const normalizePort = (val) => {
    const port = parseInt(val, 10);

    if (isNaN(port)) { return val; }
    if (port >= 0) { return port; }

    return false;
};

const onError = (error) => {
    if (error.syscall !== 'listen') { throw error; }

    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

    switch (error.code) {
        case 'EACCES':
            logger(`ERROR: ${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            logger(`ERROR: ${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const address = server.address();
    const bind = typeof address === 'string' ? `pipe ${address}` : `port ${address.port}`;
    logger(`Listening on ${bind}`);
};

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
