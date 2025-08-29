// src/app.js
const express = require('express');
const cors = require('cors');
const tasksRouter = require('./routes/task.routes.js');
const { errorHandler, notFound } = require('./middlewares/error.middlwares.js');

const app = express();

app.use(cors());
app.use(express.json()); // parse JSON bodies

// API routes
app.use('/api/tasks', tasksRouter);

// fallback 404 for unknown endpoints
app.use(notFound);

// centralized error handler
app.use(errorHandler);

module.exports = app;
