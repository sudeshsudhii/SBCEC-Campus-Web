# SBCEC Campus Web

A modern, full-stack College Management System for **Sri Balaji Chockalingam Engineering College**, designed to streamline administrative tasks, enhance student-faculty interaction, and manage campus resources efficiently.

## 🚀 Features

*   **Public Portal**: Information about departments, gallery, news, and grievances.
*   **Admin Dashboard**: Manage notices, events, faculty, and student data.
*   **Authentication**: Secure JWT-based authentication with Role-Based Access Control (RBAC).
*   **Department Management**: Dynamic pages for different engineering departments.
*   **Gallery**: Image gallery with category filtering.
*   **Grievance Redressal**: System for students/staff to submit and track grievances.
*   **Responsive Design**: Built with Tailwind CSS for a seamless experience on all devices.

## 🛠️ Tech Stack

### Frontend (`sbcec-frontend`)
*   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
*   **Icons**: Lucide React

### Backend (`sbcec-backend`)
*   **Runtime**: [Node.js](https://nodejs.org/)
*   **Framework**: [Express.js](https://expressjs.com/)
*   **Database**: [MongoDB](https://www.mongodb.com/) (with Mongoose)
*   **Authentication**: JWT (JSON Web Tokens)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

```
Sbcec/
├── sbcec-frontend/     # Next.js Source Code
├── sbcec-backend/      # Express API Source Code
├── run-sbcec.bat       # Windows Batch Script to run both services
├── DEPLOY.md           # Deployment instructions
└── README.md           # Project Documentation (You are here)
```

## 🏁 Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher recommended)
*   [MongoDB](https://www.mongodb.com/try/download/community) (running locally or via Atlas)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd Sbcec
    ```

2.  **Install Frontend Dependencies:**
    ```bash
    cd sbcec-frontend
    npm install
    cd ..
    ```

3.  **Install Backend Dependencies:**
    ```bash
    cd sbcec-backend
    npm install
    cd ..
    ```

### Configuration

**Backend**:
1.  Navigate to `sbcec-backend`.
2.  Copy the example environment file:
    ```bash
    cp .env.example .env
    ```
3.  Update the `.env` file with your MongoDB URI and JWT secrets.

**Frontend**:
1.  Navigate to `sbcec-frontend`.
2.  (Optional) Create a `.env.local` file if you have specific frontend environment variables.

## 🏃 Usage

### Quick Start (Windows)
Double-click `run-sbcec.bat` in the root directory to launch both the backend (port 5000) and frontend (port 3000) simultaneously.

### Manual Start

**Backend**:
```bash
cd sbcec-backend
npm run dev
# Server runs on http://localhost:5000
```

**Frontend**:
```bash
cd sbcec-frontend
npm run dev
# Application runs on http://localhost:3000
```

## 🤝 Contributing

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the ISC License.
