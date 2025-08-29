import axios from "axios";

const API = axios.create({
  baseURL: "https://tute-dude-mern-2fb2.vercel.app/api/tasks"
});

// Get all tasks
export const getTasks = () => API.get("/");

// Add a task
export const addTask = (taskData) => API.post("/", taskData);

// Update task
export const updateTask = (id, taskData) => API.put(`/${id}`, taskData);

// Delete task
export const deleteTask = (id) => API.delete(`/${id}`);

// Update status only
export const toggleTask = (id, completed) =>
  API.patch(`/${id}`, { completed });
