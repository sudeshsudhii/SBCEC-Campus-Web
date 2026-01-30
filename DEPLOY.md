# Deployment Guide for SBCEC Project

## 1. Frontend Deployment (Vercel)

The frontend is a **Next.js** application located in the `sbcec-frontend` folder.

### Steps to Deploy:
1.  **Log in to Vercel**: Go to [vercel.com](https://vercel.com) and log in with GitHub.
2.  **Add New Project**: Click **"Add New..."** -> **"Project"**.
3.  **Import Repository**: Select `SBCEC-Campus-Web`.
4.  **Configure Project**:
    *   **Framework Preset**: Ensure it says **Next.js**.
    *   **Root Directory**: Click **Edit** and select `sbcec-frontend`. **(Crucial Step)**.
5.  **Environment Variables**:
    *   Expand **Environment Variables**.
    *   Add `NEXT_PUBLIC_API_URL`.
        *   *Value*: The URL of your deployed backend (e.g., `https://sbcec-backend.onrender.com/api`).
        *   *Note*: If you haven't deployed the backend yet, API calls (Login, Data Fetching) will fail.
6.  **Deploy**: Click **Deploy**.

## 2. Backend Deployment (Render/Railway)

The backend is a **Node.js/Express** app in the `sbcec-backend` folder. **Vercel is NOT recommended for this backend** because it requires a persistent server, and Vercel serves serverless functions (stateless).

### Recommended: Deploy on Render.com (Free Tier)
1.  Create an account on [render.com](https://render.com).
2.  Click **"New"** -> **"Web Service"**.
3.  Connect your GitHub repository `SBCEC-Campus-Web`.
4.  **Settings**:
    *   **Root Directory**: `sbcec-backend`
    *   **Runtime**: `Node`
    *   **Build Command**: `npm install && npm run build` (or just `npm install`)
    *   **Start Command**: `npm start` (or `node dist/app.js`)
    *   **Environment Variables**:
        *   Add all variables from your `sbcec-backend/.env` file (PORT, MONGODB_URI, ACCESS_TOKEN_SECRET, etc.).
5.  **Deploy**.
6.  **Copy the URL** Render gives you (e.g., `https://sbcec-backend.onrender.com`) and paste it into your **Vercel Frontend Environment Variables** as `NEXT_PUBLIC_API_URL` (append `/api` at the end).

## 3. Database (MongoDB Atlas)
Ensure your MongoDB Atlas cluster allows access from **Anywhere (0.0.0.0/0)** in Network Access, so the deployed cloud backend can connect to it.
