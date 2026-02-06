# TaskManager (PrimeTrade Assignment)

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

A modern, responsive Task Management application built with a **Next.js** frontend and an **Express/MongoDB** backend. This project focuses on providing a clean, dark-themed user interface for organizing tasks efficiently.

## 🚀 Features

- **Modern Authentication**: Secure Login and Registration with JWT and BCrypt.
- **Responsive Design**: Mobile-first approach using **Tailwind CSS v4**.
- **Dark Theme**: Sleek Slate & Emerald color scheme for reduced eye strain.
- **Task Management**: (In Progress) Organize, tag, and filter tasks.
- **Dashboard**: Interactive dashboard for tracking progress.
- **Landing Page**: Welcoming, public-facing landing page with gradients and animations.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) (App Directory)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Validation**: Zod
- **Authentication**: JSON Web Tokens (JWT), BCrypt
- **Security**: CORS, Cookie Parser

## 📂 Project Structure

```bash
├── backend/            # Express API Server
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
├── frontend/           # Next.js Application
│   ├── app/            # App Router Pages & Components
│   ├── public/
│   └── package.json
└── README.md
```

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (Local instance or Atlas URI)
- npm or yarn

### 1. Backend Setup

 Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with your configuration:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/primetrade  # Or your Atlas URI
JWT_SECRET=your_super_secret_key
# Add any other required variables
```

Start the backend server:

```bash
npm run dev
```
The server will start on `http://localhost:3000` (or your defined PORT).

### 2. Frontend Setup

Open a new terminal, navigate to the frontend directory, and install dependencies:

```bash
cd frontend
npm install
```

Create a `.env.local` file in the `frontend` directory:

```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:3000/api  # Adjust based on backend port
```

Start the frontend development server:

```bash
npm run dev
```
The application will be available at `http://localhost:3000` (Note: If backend is also 3000, Next.js might pick 3001 automatically, check terminal output).

## 📸 Usage

1.  **Register**: Create a new account on the `/register` page.
2.  **Login**: Access your account via `/login`.
3.  **Dashboard**: Manage your tasks (Core features in development).
4.  **Landing**: View the public home page at the root URL.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
