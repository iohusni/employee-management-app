# Employee List API

A RESTful API for managing employee information built with FastAPI and SQLite. This project provides a clean, async-based backend for employee management operations.

## 📋 Features

- ✅ Create new employees
- ✅ Get all employees
- ✅ Get employee by ID
- ✅ Update employee information
- ✅ Delete employees
- 🔄 Async/await support for better performance
- 📝 Automatic API documentation with Swagger UI
- 🗄️ SQLite database with automatic table creation

## 🛠️ Tech Stack

- **Framework**: FastAPI
- **Database**: SQLite with SQLAlchemy ORM
- **Async Support**: aiosqlite, greenlet
- **Validation**: Pydantic v2
- **Server**: Uvicorn
- **Environment**: python-dotenv

## 📁 Project Structure

```
employee-list/
├── backend/
│   ├── controller/          # API route handlers
│   │   └── employee_controller.py
│   ├── services/            # Business logic
│   │   └── employee_services.py
│   ├── model/              # Database models
│   │   └── employee_model.py
│   ├── mapper/             # Pydantic schemas
│   │   └── employee_mapper.py
│   ├── db/                 # Database configuration
│   │   └── connect_db.py
│   ├── main.py             # FastAPI application entry point
│   ├── .env                 # Environment variables
│   └── employee.db          # SQLite database (auto-generated)
└── README.md
```

## 🚀 Installation

### Prerequisites

- Python 3.9 or higher
- pip (Python package manager)

### Steps

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Activate the virtual environment:**
   ```bash
   source vn/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install fastapi uvicorn sqlalchemy python-dotenv aiosqlite greenlet
   ```

## ⚙️ Configuration

1. **Create a `.env` file in the `backend` directory:**
   ```bash
   cd backend
   touch .env
   ```

2. **Add the database URL to `.env`:**
   ```env
   DATABASE_URL=sqlite+aiosqlite:///./employee.db
   ```

   The database file (`employee.db`) will be automatically created when you first run the application.

## 🏃 Running the Application

1. **Make sure you're in the backend directory:**
   ```bash
   cd backend
   ```

2. **Activate the virtual environment:**
   ```bash
   source vn/bin/activate
   ```

3. **Start the server:**
   ```bash
   uvicorn main:app --reload
   ```

   The API will be available at: `http://127.0.0.1:8000`

4. **Access the interactive API documentation:**
   - Swagger UI: `http://127.0.0.1:8000/docs`
   - ReDoc: `http://127.0.0.1:8000/redoc`

## 📡 API Endpoints

### Base URL
```
http://127.0.0.1:8000
```

### Employee Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/employees` | Create a new employee |
| `GET` | `/employees` | Get all employees |
| `GET` | `/employees/{employee_id}` | Get employee by ID |
| `PUT` | `/employees/{employee_id}` | Update employee |
| `DELETE` | `/employees/{employee_id}` | Delete employee |

## 📝 API Examples

### Create Employee
```bash
POST http://127.0.0.1:8000/employees
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "123-456-7890",
  "address": "123 Main St",
  "city": "New York",
  "state": "NY"
}
```

### Get All Employees
```bash
GET http://127.0.0.1:8000/employees
```

### Get Employee by ID
```bash
GET http://127.0.0.1:8000/employees/1
```

### Update Employee
```bash
PUT http://127.0.0.1:8000/employees/1
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "phone": "987-654-3210",
  "address": "456 Oak Ave",
  "city": "Los Angeles",
  "state": "CA"
}
```

### Delete Employee
```bash
DELETE http://127.0.0.1:8000/employees/1
```

## 🗄️ Database Schema

### Employees Table

| Column | Type | Constraints |
|--------|------|-------------|
| `id` | Integer | Primary Key, Auto Increment |
| `name` | String | Required |
| `email` | String | Required |
| `phone` | String | Optional |
| `address` | String | Optional |
| `city` | String | Optional |
| `state` | String | Optional |

## 📦 Request/Response Models

### Create Employee Request
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (optional)",
  "address": "string (optional)",
  "city": "string (optional)",
  "state": "string (optional)"
}
```

### Employee Response
```json
{
  "id": 1,
  "name": "string",
  "email": "string",
  "phone": "string | null",
  "address": "string | null",
  "city": "string | null",
  "state": "string | null"
}
```

## 🔧 Development

### Project Architecture

This project follows a clean architecture pattern:

- **Controller Layer**: Handles HTTP requests and responses
- **Service Layer**: Contains business logic
- **Model Layer**: Database models (SQLAlchemy)
- **Mapper Layer**: Data validation and serialization (Pydantic)

### Code Style

- Type hints are used throughout the codebase
- Async/await pattern for all database operations
- Pydantic models for request/response validation

## 📄 License

This project is open source and available for personal and educational use.

## 👤 Author

Created as a full-stack employee management system project.

---

**Note**: Make sure to keep your `.env` file secure and never commit it to version control. The `.env` file is already included in `.gitignore`.

