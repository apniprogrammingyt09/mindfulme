#!/bin/bash

# Navigate to the backend directory and start FastAPI
echo "Starting FastAPI backend..."
cd backend
uvicorn main:app --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!

# Navigate to the frontend directory and start React
echo "Starting React frontend..."
cd ../frontend
npm install
npm start &
FRONTEND_PID=$!

# Handle termination signals
trap "kill $BACKEND_PID $FRONTEND_PID" SIGINT SIGTERM

# Wait for both processes
wait