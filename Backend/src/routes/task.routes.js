// src/routes/tasks.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/task.controllers.js');
const validate = require('../middlewares/validate.middlewares.js');
const { createTaskSchema, updateTaskSchema } = require('../validators/task.validator.js');

// POST /api/tasks
router.post('/', validate(createTaskSchema), controller.createTask);

// GET /api/tasks
router.get('/', controller.getAllTasks);

// GET /api/tasks/:id
router.get('/:id', controller.getTask);

// PUT /api/tasks/:id
router.put('/:id', validate(updateTaskSchema), controller.updateTask);

// PATCH /api/tasks/:id/complete
router.patch('/:id/complete', controller.completeTask);

// DELETE /api/tasks/:id
router.delete('/:id', controller.deleteTask);

module.exports = router;
