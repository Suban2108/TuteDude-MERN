// src/models/task.model.js
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: '', trim: true },
    dueDate: { type: Date, default: null },
    priority: { type: String, enum: ['low', 'normal', 'high'], default: 'normal' },
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', TaskSchema);
