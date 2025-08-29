import React, { useEffect, useState } from "react";
import {
  getTasks,
  addTask,
  deleteTask,
  toggleTask,
  updateTask,
} from "../api/todoApi";
import "./TodoApp.css";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "normal",
  });
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const { data } = await getTasks();
      setTasks(data);
    } catch (err) {
      setError("Failed to load tasks.");
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    if (!form.title.trim()) return;
    try {
      const { data } = await addTask(form);
      setTasks([...tasks, data]);
      setForm({ title: "", description: "", dueDate: "", priority: "normal" });
    } catch (err) {
      setError("Failed to add task.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch {
      setError("Failed to delete task.");
    }
  };

  const handleToggle = async (id, status) => {
    try {
      await toggleTask(id, status === "completed" ? false : true);
      setTasks(
        tasks.map((t) =>
          t._id === id
            ? { ...t, status: status === "completed" ? "pending" : "completed" }
            : t
        )
      );
    } catch {
      setError("Failed to update status.");
    }
  };

  const handleEdit = (task) => {
    setEditId(task._id);
    setEditForm({
      title: task.title,
      description: task.description,
      dueDate: task.dueDate ? task.dueDate.split("T")[0] : "",
      priority: task.priority,
    });
  };

  const handleUpdate = async (id) => {
    try {
      await updateTask(id, editForm);
      setTasks(
        tasks.map((t) =>
          t._id === id ? { ...t, ...editForm } : t
        )
      );
      setEditId(null);
      setEditForm({});
    } catch {
      setError("Failed to update task.");
    }
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="todo-app-container">
      <div className="todo-card">
        <h1 className="todo-title">📝 My To-Do List</h1>

        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}

        {/* Search */}
        <div className="search-task">
          <input
            type="text"
            value={search}
            placeholder="Search tasks..."
            onChange={(e) => setSearch(e.target.value)}
            className="task-input"
          />
        </div>

        {/* Add Task Form */}
        <div className="add-task-form">
          <input
            type="text"
            name="title"
            value={form.title}
            placeholder="Task title"
            onChange={handleChange}
            className="task-input"
          />
          <textarea
            name="description"
            value={form.description}
            placeholder="Description"
            onChange={handleChange}
            className="task-input"
          />
          <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={handleChange}
            className="task-input"
          />
          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className="task-input"
          >
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
          <button onClick={handleAdd} className="add-btn">
            Add Task
          </button>
        </div>

        {/* Task List */}
        <ul className="task-list">
          {filteredTasks.map((task) => (
            <li
              key={task._id}
              className={`task-item ${task.status === "completed" ? "completed" : ""}`}
            >
              {editId === task._id ? (
                <div className="edit-form">
                  <input
                    type="text"
                    name="title"
                    value={editForm.title}
                    onChange={(e) =>
                      setEditForm({ ...editForm, title: e.target.value })
                    }
                    className="task-input"
                  />
                  <textarea
                    name="description"
                    value={editForm.description}
                    onChange={(e) =>
                      setEditForm({ ...editForm, description: e.target.value })
                    }
                    className="task-input"
                  />
                  <input
                    type="date"
                    name="dueDate"
                    value={editForm.dueDate}
                    onChange={(e) =>
                      setEditForm({ ...editForm, dueDate: e.target.value })
                    }
                    className="task-input"
                  />
                  <select
                    name="priority"
                    value={editForm.priority}
                    onChange={(e) =>
                      setEditForm({ ...editForm, priority: e.target.value })
                    }
                    className="task-input"
                  >
                    <option value="low">Low</option>
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                  </select>
                  <button
                    onClick={() => handleUpdate(task._id)}
                    className="update-btn"
                  >
                    ✅
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    className="cancel-btn"
                  >
                    ❌
                  </button>
                </div>
              ) : (
                <div className="task-details">
                  <div
                    className="task-main"
                    onClick={() => handleToggle(task._id, task.status)}
                  >
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <small>
                      📅 {task.dueDate ? new Date(task.dueDate).toDateString() : "No due date"} | 
                      ⚡ {task.priority} | 
                      {task.status === "completed" ? "✅ Done" : "⏳ Pending"}
                    </small>
                  </div>
                  <div className="task-actions">
                    <button
                      onClick={() => handleEdit(task)}
                      className="edit-btn"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="delete-btn"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Empty State */}
        {filteredTasks.length === 0 && !loading && (
          <p className="empty">No tasks found 👀</p>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
