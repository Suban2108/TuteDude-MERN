# Todo-List Backend

## Description
Node.js + Express + MongoDB backend for the To-Do List app. Provides REST APIs:
- POST /api/tasks
- GET /api/tasks
- GET /api/tasks/:id
- PUT /api/tasks/:id
- PATCH /api/tasks/:id/complete
- DELETE /api/tasks/:id

## Requirements
- Node.js (v16+)
- MongoDB Atlas or local MongoDB

## Setup (local)
1. Copy example env:
   ```bash
   cp .env.example .env
   
Fill .env:

MONGO_URI=mongodb+srv://<user>:<password>@.../todo?retryWrites=true&w=majority
PORT=5000


Install and run:

npm install
npm run dev   # or: npm start


## Frontend README (`frontend/README.md`) — **copy & paste**
```md
# Todo Frontend

## Description
React frontend for the To-Do List app. Connects to deployed backend and supports:
- Create, Read, Update, Delete tasks
- Toggle status, search, edit description, due date and priority

## Setup (local)
1. Install
   ```bash
   npm install

Create .env in frontend root:

REACT_APP_API_BASE_URL=https://<your-backend-url>/api/tasks

```
---

# Deployment

Deployed URL (Netlify): https://<your-frontend-url>

Make sure frontend uses the deployed backend URL.

Notes / Challenges

Handled CORS on backend.

Implemented validation and error messages.


---

# Deploy backend (short recap)
You already have backend deployed on Render/Vercel — double-check:

- Render: root directory = backend folder; add `MONGO_URI` env var.
- Vercel: set Environment Variables in project settings (`MONGO_URI`) and use `api/index.js` or `vercel.json` approach for serverless.

Test endpoints after deploy (Postman / browser):


GET https://<your-backend-url>/api/tasks
POST https://<your-backend-url>/api/tasks


If they return JSON — backend is OK.

---

# 5) Deploy frontend to Netlify
If you haven’t deployed frontend yet, steps:

1. In `frontend/.env`:


REACT_APP_API_BASE_URL=https://<your-backend-url>/api/tasks
