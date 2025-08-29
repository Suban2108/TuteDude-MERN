// src/middlewares/validate.middleware.js
const { createTaskSchema, updateTaskSchema } = require('../validators/task.validator.js');

const validate = (schemaFn) => (req, res, next) => {
  const errors = schemaFn(req.body);
  if (errors && errors.length) {
    return res.status(400).json({ errors });
  }
  next();
};

module.exports = validate;
