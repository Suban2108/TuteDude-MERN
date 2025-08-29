# The Working of the API described here 

1. The To-Do List APIs are built to perform CRUD operations (Create, Read, Update, Delete) on tasks.

2. Each API endpoint has a specific purpose and uses the correct HTTP method (POST, GET, PUT, PATCH, DELETE).

3. Add Task (POST /api/tasks): Creates a new task with details like title, description, and due date. The server generates a unique ID and returns the created task.

4. Get All Tasks (GET /api/tasks): Returns a list of all tasks so the client can display them.

5. Get Task by ID (GET /api/tasks/:id): Returns details of a single task using its unique ID. If not found, it responds with 404.

6. Update Task (PUT /api/tasks/:id): Updates the details of an existing task (e.g., change description or due date).

7. Mark Task as Completed (PATCH /api/tasks/:id/complete): Special endpoint to mark a task as done without editing other details.

8. Delete Task (DELETE /api/tasks/:id): Permanently removes a task by ID.

9. Error Handling: If a user tries an invalid route, the server returns a JSON error message (404 Not Found).

      Together, these APIs allow users to add, view, update, complete, and delete tasks, forming the backend of a To-Do List application.
