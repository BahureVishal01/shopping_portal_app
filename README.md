
# Shopping Portal's Task Management API

## Endpoints

### Get All Tasks
- **Endpoint:** `/api/task/allTasks`
- **Method:** `GET`
- **Description:** Get a list of all tasks.

### Create New Task
- **Endpoint:** `/api/task/newTask`
- **Method:** `POST`
- **Description:** Create a new task.
- **Request Body:**
  - `title` (string): Title of the task.
  - `description` (string): Description of the task.
  - `status` (string): Status of the task (PENDING, APPROVED, REJECTED).

### Get Single Task Details
- **Endpoint:** `/api/singleTaskDetails/:id`
- **Method:** `GET`
- **Description:** Get details of a specific task.
- **Parameters:**
  - `id` (string): ID of the task.

### Delete Task
- **Endpoint:** `/api/removeTask/:id`
- **Method:** `DELETE`
- **Description:** Delete a task.
- **Parameters:**
  - `id` (string): ID of the task.

### Update Task Details
- **Endpoint:** `/api/constants/statusList`
- **Method:** `PUT`
- **Description:** Update details of a specific task.
- **Parameters:**
  - `id` (string): ID of the task.
- **Request Body:**
  - `title` (string): Updated title of the task.
  - `description` (string): Updated description of the task.
  - `status` (string): Updated status of the task (PENDING, APPROVED, REJECTED).

### constants list for dropdown
- **Endpoint:** `api/constants/statusList`
- **Method:** `GET`
- **Description:** status dropdown list.

## Basic setup
- Ensure you have Node.js and MongoDB installed on your system.
- Clone the repository.
- Install dependencies using `npm install`.
- Start the server using `npm start`.


