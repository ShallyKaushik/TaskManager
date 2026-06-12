# Task Manager API Dashboard

A full-stack MERN application developed as part of a Backend Developer Internship Assignment. The project demonstrates secure authentication, role-based authorization, CRUD operations, RESTful API design, frontend integration, and scalable backend architecture.

---

## Project Overview

This application allows users to:

* Register and authenticate securely
* Access protected resources using JWT authentication
* Manage personal tasks through CRUD operations
* Access role-based dashboards (User/Admin)
* Interact with APIs through a React frontend
* Test APIs using Postman

The project follows REST principles and a modular backend architecture for maintainability and future scalability.

---

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* Express Middleware
* Morgan Logger

### Frontend

* React.js
* React Router DOM
* Axios
* Vite

### API Testing & Documentation

* Postman Collection
* Swagger Integration

---

## Features

### Authentication

* User Registration
* User Login
* Password Hashing using bcrypt
* JWT Token Generation
* Protected Routes

### Authorization

Two roles are supported:

#### User

* Access personal dashboard
* Create tasks
* View tasks
* Update tasks
* Delete tasks

#### Admin

* Access admin dashboard
* View admin-protected routes

### Task Management

* Create Task
* Retrieve Tasks
* Update Task Status
* Delete Task

### API Versioning

All APIs are versioned:

```text
/api/v1
```

This allows future API versions without affecting existing clients.

---

## Security Features

### Password Hashing

Passwords are never stored in plain text.

```text
bcryptjs
```

is used to hash user passwords before storage.

### JWT Authentication

After login, a JWT token is issued.

Protected routes require:

```http
Authorization: Bearer <token>
```

### Input Validation

Request payloads are validated before processing.

### Role-Based Access Control

Protected middleware ensures only authorized roles can access specific endpoints.

---

## Project Structure

```text
AUTH_DASH/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   │
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── Postman/
│   └── taskmanager_postman_collection.json
│
├── SCALABILITY.md
└── README.md
```

---

## Database Schema

### User

```javascript
{
  name: String,
  email: String,
  password: String,
  role: String
}
```

### Task

```javascript
{
  title: String,
  description: String,
  status: String,
  createdBy: ObjectId
}
```

---

## API Endpoints

### Authentication

#### Register User

```http
POST /api/v1/auth/register
```

#### Login User

```http
POST /api/v1/auth/login
```

---

### User Routes

#### User Profile

```http
GET /api/v1/users/profile
```

---

### Admin Routes

#### Admin Dashboard

```http
GET /api/v1/admin/dashboard
```

---

### Task Routes

#### Create Task

```http
POST /api/v1/tasks
```

#### Get Tasks

```http
GET /api/v1/tasks
```

#### Update Task

```http
PUT /api/v1/tasks/:id
```

#### Delete Task

```http
DELETE /api/v1/tasks/:id
```

---

## Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
JWT_SECRET=your_jwt_secret
```

---

## Installation & Setup

### Clone Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend will run on:

```text
http://localhost:5000
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

## API Testing

A Postman Collection is included in:

```text
Postman/taskmanager_postman_collection.json
```

Import the collection into Postman to test all APIs.

---

## Scalability Considerations

The application has been designed with scalability in mind:

* Modular architecture
* API versioning
* Stateless JWT authentication
* MongoDB indexing support
* Redis caching integration (future enhancement)
* Load balancer compatibility
* Microservice migration readiness

Additional details are available in:

```text
SCALABILITY.md
```

---

## Future Enhancements

* Redis Caching
* Docker Deployment
* Refresh Token Authentication
* Role Management Panel
* Pagination & Filtering
* CI/CD Integration
* Cloud Deployment (AWS/Render)

---

## Author

Shelly Kaushik

Built using the MERN Stack.
