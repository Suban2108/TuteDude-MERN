const express = require('express');
const cors = require('cors');
const tasksRouter = require('./routes/task.routes.js');
const { errorHandler, notFound } = require('./middlewares/error.middlwares.js');

const app = express();

// Apply CORS properly
app.use(
  cors({
    origin: [
      "https://tute-dude-mern.vercel.app",   // frontend prod
      "http://localhost:3000"                // frontend dev (optional)
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
  })
);

app.use(express.json()); // parse JSON bodies

// API routes
app.use('/api/tasks', tasksRouter);

// fallback 404 for unknown endpoints
app.use(notFound);

// centralized error handler
app.use(errorHandler);

module.exports = app;
