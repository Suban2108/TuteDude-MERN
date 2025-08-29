# To-Do Backend (Node + Express + MongoDB)

## Description
Backend for a To-Do list application implemented using Node.js, Express, and MongoDB (via Mongoose). It exposes RESTful APIs for creating, reading, updating, completing and deleting tasks.

## Features
- Create task (POST /api/tasks)
- Read tasks (GET /api/tasks, GET /api/tasks/:id)
- Update task (PUT /api/tasks/:id)
- Mark task completed (PATCH /api/tasks/:id/complete)
- Delete task (DELETE /api/tasks/:id)
- Validation and centralized error handling
- Modular controllers/services/routes structure

## Requirements
- Node.js (v16+ recommended)
- MongoDB (local or Atlas)

## Setup
1. Clone the repo:
   ```bash
   git clone https://github.com/Suban2108/TuteDude-MERN.git
   cd todo-backend
