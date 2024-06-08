## Task Management Application

It is a simple Task Mangement Webapp
Frontend is written using HTML, styling is done with bootstrap css and litle bit tailwind css, task manager logic is built javascript in script.js.
In order to save the 'Current task even sfter refreshing the br'Owser I use'D localStorag'E in b'Rows'Er to store 'Data.
If the user did not enter the all required details in the task name or description or forgot to select due date there will be an alert message to fill all the details.
This application allows you to manage tasks with a simple web interface. It includes a backend server to handle task storage and a frontend interface to interact with the tasks.

### Backend (`server.js`)

- **Dependencies**:
  - `express`: Web framework for Node.js.
  - `cors`: Middleware to enable CORS.
  - `path`: Core module to work with file and directory paths.

- **Setup**:
  - Initializes an Express server and sets up middleware for CORS, JSON parsing, and serving static files.
  - Stores tasks in an in-memory array (`tasks`).

- **API Endpoints**:
  - `GET /api/tasks`: Fetches all tasks.
  - `POST /api/tasks`: Adds a new task.
  - `PUT /api/tasks/:id`: Updates an existing task by ID.
  - `DELETE /api/tasks/:id`: Deletes a task by ID.

- **Starting the Server**:
  - Listens on port 5000.

### Frontend (`app.js`)

- **API URL**:
  - `const apiUrl = 'http://localhost:5000/api/tasks';`: Base URL for the backend API.

- **Functions**:
  - `addTask()`: Adds a new task by sending a `POST` request to the server.
  - `displayTasks()`: Fetches and displays all tasks by sending a `GET` request.
  - `editTask(id)`: Edits an existing task by fetching its details and populating the input fields.
  - `deleteTask(id)`: Deletes a task by sending a `DELETE` request.

- **Initial Load**:
  - `displayTasks()`: Fetches and displays tasks when the page loads.

### How to Run

1. **Install Dependencies**:
   - Run `npm install` to install the required dependencies.

2. **Start the Backend Server**:
   - Run `node server.js` to start the server.
   OPen the browser and type "localhost:5000" to open the application.

If the user did not enter the all required details in the task name or description or forgot to select due date there will be an alert message to fill all the details.


