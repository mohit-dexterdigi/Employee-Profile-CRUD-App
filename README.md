# Employee-Profile-CRUD-App

A full-stack MERN (MongoDB, Express, React, Node.js) application to create, view, and manage employee profiles with image & resume uploads.

---

## 🚀 Tech Stack Used

### Frontend:
- **React.js**
- **Tailwind CSS v3**
- **Axios**
- **React Router**
- **SweetAlert2**
- **React Toastify**

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **Multer (for file upload)**

---

## 📁 Folder Structure

Employee-Profile-CRUD/
  - backend/
    - controllers/
      - employee.controller.js
    - models/
      - employee.model.js
    - routes/
      - employee.routes.js
    - services/
      - employee.service.js
    - uploads/ # Stores profile images & resumes
    - server.js

  - employee-profile/
    - public/
    - src/
      - components/
        - EmployeeProfileForm.jsx
        - EmployeeList.jsx
      - data/ # JSON for skills, gender, departments
      - utils/
      - App.jsx
      - index.jsx
    - tailwind.config.js
│
└── README.md

---

## 🌐 API Endpoints

### Base URL: `http://localhost:3000/api/employees`

| Method | Endpoint         | Description                 |
|--------|------------------|-----------------------------|
| POST   | `/api/employees` | Create a new employee       |
| GET    | `/api/employees` | Fetch all employee profiles |


---

## 🛠 How to Run the Project

1. Clone the Repository

git clone https://github.com/mohit-dexterdigi/Employee-Profile-CRUD-App.git

cd Employee-Profile-CRUD

2. Start the Backend

cd backend

npm install

node server.js

Make sure MongoDB is running on mongodb+srv://mohitdexterdigi007:mohitdd007@employee-crud.a2hplvl.mongodb.net/

3. Start the Frontend

cd frontend

npm install

npm run dev

App runs at: http://localhost:3000

