// src/controllers/tasks.controller.js
const tasksService = require('../services/task.services.js');

// Create
const createTask = async (req, res, next) => {
  try {
    const created = await tasksService.createTask(req.body);
    return res.status(201).json(created);
  } catch (err) {
    next(err);
  }
};

// Read all (supports optional query params: status, priority)
const getAllTasks = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    if (req.query.priority) filter.priority = req.query.priority;
    const tasks = await tasksService.getAllTasks(filter);
    return res.json(tasks);
  } catch (err) {
    next(err);
  }
};

// Read one
const getTask = async (req, res, next) => {
  try {
    const task = await tasksService.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    return res.json(task);
  } catch (err) {
    next(err);
  }
};

// Update
const updateTask = async (req, res, next) => {
  try {
    const updated = await tasksService.updateTask(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Task not found' });
    return res.json(updated);
  } catch (err) {
    next(err);
  }
};

// Mark complete
const completeTask = async (req, res, next) => {
  try {
    const updated = await tasksService.markComplete(req.params.id);
    if (!updated) return res.status(404).json({ error: 'Task not found' });
    return res.json(updated);
  } catch (err) {
    next(err);
  }
};

// Delete
const deleteTask = async (req, res, next) => {
  try {
    const deleted = await tasksService.deleteTask(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Task not found' });
    return res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTask,
  updateTask,
  completeTask,
  deleteTask
};
