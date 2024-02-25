const express = require('express');

const app = express();

// register api routes
app.use('/api', require('./routes/api'));

module.exports = app;