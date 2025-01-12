#!/bin/bash

# Navigate to the backend directory and start FastAPI
echo "Starting FastAPI backend..."
cd frontend/backend  # Navigate to the backend directory inside the frontend folder
uvicorn main:app --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!

# Navigate to the frontend directory and start React
echo "Starting React frontend..."
 # Navigate to the frontend directory inside the frontend folder
npm install
npm start

# Wait for both processes
wait
