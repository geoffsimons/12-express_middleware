'use strict';

const morgan = require('morgan');
const express = require('express');
const debug = require('debug')('mnp:server');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(morgan('dev'));
app.use(require('./lib/cors-middleware.js'));
app.use(require('./route/player-router.js'));
app.use(require('./lib/error-middleware.js'));

app.listen(PORT, () => {
  debug('Server up:', PORT);
});
