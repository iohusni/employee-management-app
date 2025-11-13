# Employee List - Full Stack Application

A full-stack employee management system with a React frontend and FastAPI backend. This project provides a modern, responsive web interface for managing employee information with a clean, async-based REST API.

## 📋 Features

### Backend

- ✅ RESTful API for employee management
- ✅ Create, read, update, and delete employees
- 🔄 Async/await support for better performance
- 📝 Automatic API documentation with Swagger UI
- 🗄️ SQLite database with automatic table creation

### Frontend

- ✅ Modern React UI with TypeScript
- ✅ Responsive data table with sorting and filtering
- ✅ Form validation with React Hook Form and Zod
- ✅ Dialog-based employee creation/editing
- ✅ Real-time data fetching with React Query
- 🎨 Beautiful UI built with Tailwind CSS and Radix UI
- 📱 Mobile-friendly responsive design

## 🛠️ Tech Stack

### Backend

- **Framework**: FastAPI
- **Database**: SQLite with SQLAlchemy ORM
- **Async Support**: aiosqlite, greenlet
- **Validation**: Pydantic v2
- **Server**: Uvicorn
- **Environment**: python-dotenv

### Frontend

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Form Management**: React Hook Form with Zod validation
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **HTTP Client**: Axios
- **Table**: TanStack Table

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
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── ui/          # Reusable UI components
│   │   │   ├── create-employee.tsx
│   │   │   ├── list-all-employees.tsx
│   │   │   ├── data-table.tsx
│   │   │   └── form-field.tsx
│   │   ├── services/        # API service functions
│   │   │   ├── api.ts
│   │   │   └── queries.ts
│   │   ├── store/          # State management (Zustand)
│   │   │   └── employee-store.ts
│   │   ├── schema/         # Zod validation schemas
│   │   │   └── employee-schema.ts
│   │   ├── App.tsx         # Main application component
│   │   └── main.tsx        # Application entry point
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## 🚀 Installation

### Prerequisites

- **Backend**: Python 3.9 or higher, pip (Python package manager)
- **Frontend**: Node.js 18+ and npm (or yarn/pnpm)

### Backend Installation

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

### Frontend Installation

1. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
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

### Running the Backend

1. **Navigate to the backend directory:**

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

### Running the Frontend

1. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

   The frontend will be available at: `http://localhost:5173` (or the next available port)

### Running Both (Full Stack)

To run the complete application, you'll need two terminal windows:

**Terminal 1 - Backend:**

```bash
cd backend
source vn/bin/activate
uvicorn main:app --reload
```

**Terminal 2 - Frontend:**

```bash
cd frontend
npm run dev
```

Then open your browser to `http://localhost:5173` to access the application.

> **Note**: Make sure the backend is running before starting the frontend, as the frontend makes API calls to `http://localhost:8000`.

## 📡 API Endpoints

The API base URL is `http://127.0.0.1:8000`. For detailed API documentation, visit the Swagger UI at `http://127.0.0.1:8000/docs` when the backend is running.

## 🗄️ Database Schema

The application uses a SQLite database with an `employees` table containing fields for employee information including id, name, email, phone, address, city, and state.

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

### Backend Architecture

This project follows a clean architecture pattern:

- **Controller Layer**: Handles HTTP requests and responses
- **Service Layer**: Contains business logic
- **Model Layer**: Database models (SQLAlchemy)
- **Mapper Layer**: Data validation and serialization (Pydantic)

### Frontend Architecture

- **Components**: Reusable UI components organized by feature
- **Services**: API service functions for backend communication
- **Store**: Global state management with Zustand
- **Schema**: Zod schemas for form validation
- **Queries**: React Query hooks for data fetching and caching

### Code Style

**Backend:**

- Type hints are used throughout the codebase
- Async/await pattern for all database operations
- Pydantic models for request/response validation

**Frontend:**

- TypeScript for type safety
- React Hook Form for form management
- Zod for runtime validation
- Tailwind CSS for styling

## 📄 License

This project is open source and available for personal and educational use.

## 👤 Author

Created as a full-stack employee management system project.

---

**Note**: Make sure to keep your `.env` file secure and never commit it to version control. The `.env` file is already included in `.gitignore`.
