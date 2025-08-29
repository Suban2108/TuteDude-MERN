const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory task storage (just for demo, normally use DB)
let tasks = [];

/**
 * 1. Add Task (POST /api/tasks)
 */
app.post("/api/tasks", (req, res) => {
  const { title, description, dueDate, priority } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = {
    id: tasks.length + 1, // simple ID
    title,
    description: description || "",
    dueDate: dueDate || null,
    priority: priority || "normal",
    status: "pending",
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

/**
 * 2. Get All Tasks (GET /api/tasks)
 */
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

/**
 * 3. Get Task by ID (GET /api/tasks/:id)
 */
app.get("/api/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id == req.params.id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
});

/**
 * 4. Update Task (PUT /api/tasks/:id)
 */
app.put("/api/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id == req.params.id);
  if (!task) return res.status(404).json({ error: "Task not found" });

  const { title, description, dueDate, priority } = req.body;
  if (title) task.title = title;
  if (description) task.description = description;
  if (dueDate) task.dueDate = dueDate;
  if (priority) task.priority = priority;

  res.json(task);
});

/**
 * 5. Mark Task as Completed (PATCH /api/tasks/:id/complete)
 */
app.patch("/api/tasks/:id/complete", (req, res) => {
  const task = tasks.find((t) => t.id == req.params.id);
  if (!task) return res.status(404).json({ error: "Task not found" });

  task.status = "completed";
  res.json(task);
});

/**
 * 6. Delete Task (DELETE /api/tasks/:id)
 */
app.delete("/api/tasks/:id", (req, res) => {
  const index = tasks.findIndex((t) => t.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Task not found" });

  tasks.splice(index, 1);
  res.json({ message: "Task deleted successfully" });
});

/**
 * Default 404 handler
 */
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
