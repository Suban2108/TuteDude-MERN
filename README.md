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

<img width="708" height="768" alt="Screenshot 2025-08-29 at 1 58 55 PM" src="https://github.com/user-attachments/assets/0654edd5-c6f1-4e26-afa8-76b92edc53c5" />
<img width="708" height="768" alt="Screenshot 2025-08-29 at 1 59 29 PM" src="https://github.com/user-attachments/assets/cb3c05ae-1899-422b-8026-7bbe2ce1173e" />
<img width="708" height="768" alt="Screenshot 2025-08-29 at 2 00 02 PM" src="https://github.com/user-attachments/assets/5cb85544-987f-453e-8661-cd4fb58176b0" />
<img width="708" height="768" alt="Screenshot 2025-08-29 at 2 00 38 PM" src="https://github.com/user-attachments/assets/1b31bff0-93c3-45cd-87b5-a268d4ec5725" />
<img width="708" height="768" alt="Screenshot 2025-08-29 at 2 02 56 PM" src="https://github.com/user-attachments/assets/92fc5f62-af50-4664-bd1a-8afa48aae9cd" />
<img width="708" height="768" alt="Screenshot 2025-08-29 at 2 03 14 PM" src="https://github.com/user-attachments/assets/f39ac7dd-493b-40ff-b7c9-d6ef956c54a7" />





