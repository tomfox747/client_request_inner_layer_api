const express = require('express');
const cors = require('cors');
const app = express();

const healthcheck = require('./routes/healthcheck.js');
const data_router = require('./routes/data_router.js');
const { getError } = require('./utilities/errorHandler');

const dbManager = require('./db/init')

app.use(cors());
app.use('/healthcheck', healthcheck);
app.use('/inner/data', data_router);

module.exports = app