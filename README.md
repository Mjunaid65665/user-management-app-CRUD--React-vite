# 👥 User Management System — React CRUD App

![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap)
![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?style=for-the-badge)
![JSON Server](https://img.shields.io/badge/JSON--Server-REST%20API-green?style=for-the-badge)
![React Router](https://img.shields.io/badge/React--Router-7.x-CA4245?style=for-the-badge&logo=reactrouter)

A fully functional **User Management System** built with React.js demonstrating complete **CRUD (Create, Read, Update, Delete)** operations using a mock REST API powered by JSON Server.



## 📌 About The Project

A **Single Page Application (SPA)** that allows users to manage a list of people with personal details. It communicates with a local REST API (JSON Server) to perform all CRUD operations in real-time without any backend framework.

---

## ✨ Features

- ✅ **Create** a new user with form validation
- ✅ **Read** / View detailed information of any user
- ✅ **Update** existing user data with pre-filled form
- ✅ **Delete** a user with confirmation dialog
- ✅ Real-time UI updates without page reload
- ✅ Phone number input with +92 country code
- ✅ Loading spinner while fetching data
- ✅ User avatar generated from first letter of name
- ✅ Fully responsive design with Bootstrap 5

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React.js | 19.x | Frontend UI Library |
| React Router DOM | 7.x | Client-side Routing |
| Axios | 1.x | HTTP Requests |
| Bootstrap | 5.3 | UI Styling & Layout |
| JSON Server | 0.17.4 | Mock REST API |
| Vite | Latest | Build Tool & Dev Server |

---

## 📁 Project Structure
```
user-management-app/
│
├── src/
│   ├── components/
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   ├── Create/
│   │   │   └── Create.jsx
│   │   ├── Read/
│   │   │   └── Read.jsx
│   │   └── Update/
│   │       └── Update.jsx
│   ├── App.jsx
│   └── main.jsx
│
├── db.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

**1. Clone the repository:**
```bash
git clone https://github.com/your-username/user-management-app.git
cd user-management-app
```

**2. Install dependencies:**
```bash
npm install
```

**3. Setup `db.json` in root directory:**
```json
{
  "users": [
    {
      "id": 1,
      "name": "Ali Hassan",
      "email": "ali@gmail.com",
      "username": "ali123",
      "phone": "+923001234567"
    }
  ]
}
```

---

## 📜 Available Scripts

Open **two terminals** simultaneously:

**Terminal 1 — JSON Server:**
```bash
npx json-server db.json --port 3000
```

**Terminal 2 — React App:**
```bash
npm run dev
```

| Script | URL |
|--------|-----|
| React App | http://localhost:5173 |
| JSON Server | http://localhost:3000 |

---

## 🌐 API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/users` | Fetch all users |
| `GET` | `/users/:id` | Fetch single user |
| `POST` | `/users` | Create new user |
| `PUT` | `/users/:id` | Update user |
| `DELETE` | `/users/:id` | Delete user |

---

## 📄 Pages Overview

### 🏠 Home (`/`)
Displays all users in a table with Read, Update, Delete actions.

### ➕ Create (`/create`)
Form with validation to add a new user.

### 👁️ Read (`/read/:id`)
Detailed profile view of a single user with avatar and spinner.

### ✏️ Update (`/update/:id`)
Pre-filled form to edit existing user data.

---

## 📝 Resume Summary

**Project Name: User Management System**

> Developed a full-stack CRUD web application using React.js, React Router DOM, and Axios that performs Create, Read, Update, and Delete operations via a RESTful JSON Server API. Implemented client-side form validation, dynamic routing with useParams, and real-time UI state management using React Hooks (useState, useEffect). Designed a fully responsive interface with Bootstrap 5 featuring user avatars, loading spinners, and confirmation dialogs.

---

## 👨‍💻 Author

- GitHub: [@Mjunaid65665](https://github.com/Mjunaid65665)
- LinkedIn: (https://www.linkedin.com/in/m-junaidahmad/)

---

## 📃 License

This project is open source and available under the [MIT License](LICENSE).