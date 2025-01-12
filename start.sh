#!/bin/bash

# Navigate to the backend directory and start FastAPI
echo "Starting FastAPI backend..."
cd backend  # Navigate to the backend directory
uvicorn main:app --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!

# Navigate back to the root directory to start React
echo "Starting React frontend..."
cd ..  # Go back to the root directory (where package.json is located)
npm start &
FRONTEND_PID=$!

# Handle termination signals
trap "kill $BACKEND_PID $FRONTEND_PID" SIGINT SIGTERM

# Wait for both processes
wait
