// src/validators/task.validator.js
const isValidDate = (value) => {
  if (!value) return true;
  const d = new Date(value);
  return !Number.isNaN(d.valueOf());
};

const createTaskSchema = (body) => {
  const { title, description, dueDate, priority } = body || {};
  const errors = [];
  if (!title || typeof title !== 'string' || title.trim() === '') {
    errors.push('title is required and must be a non-empty string');
  }
  if (dueDate && !isValidDate(dueDate)) errors.push('dueDate must be a valid date string');
  if (priority && !['low', 'normal', 'high'].includes(priority)) errors.push('priority must be low, normal or high');
  return errors;
};

const updateTaskSchema = (body) => {
  // allow partial updates, but validate fields if present
  const { title, dueDate, priority } = body || {};
  const errors = [];
  if (title !== undefined && (typeof title !== 'string' || title.trim() === '')) {
    errors.push('title must be a non-empty string');
  }
  if (dueDate !== undefined && !isValidDate(dueDate)) errors.push('dueDate must be a valid date string');
  if (priority !== undefined && !['low', 'normal', 'high'].includes(priority)) errors.push('priority must be low, normal or high');
  return errors;
};

module.exports = {
  createTaskSchema,
  updateTaskSchema
};
