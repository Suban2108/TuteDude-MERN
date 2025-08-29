// src/middlewares/error.middleware.js

const notFound = (req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
};

const errorHandler = (err, req, res, next) => {
  console.error(err);
  // if mongoose validation error
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  // default
  res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = {
  notFound,
  errorHandler
};
