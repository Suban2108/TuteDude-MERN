// src/services/tasks.service.js
const Task = require('../models/task.models.js');

const createTask = async (payload) => {
  const task = new Task(payload);
  return await task.save();
};

const getAllTasks = async (filter = {}) => {
  return await Task.find(filter).sort({ createdAt: -1 });
};

const getTaskById = async (id) => {
  return await Task.findById(id);
};

const updateTask = async (id, payload) => {
  return await Task.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
};

const deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};

const markComplete = async (id) => {
  return await Task.findByIdAndUpdate(id, { status: 'completed' }, { new: true });
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
  markComplete
};
