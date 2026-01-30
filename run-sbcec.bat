@echo off
echo ==========================================
echo   Starting SBCEC College Website Project
echo ==========================================

echo Starting Backend Server...
cd sbcec-backend
start "SBCEC Backend (Port 5000)" npm run dev

cd ..

echo Starting Frontend Application...
cd sbcec-frontend
start "SBCEC Frontend (Port 3000)" npm run dev

echo ==========================================
echo   Application Launched!
echo   Frontend: http://localhost:3000
echo   Backend:  http://localhost:5000
echo ==========================================
pause
