from fastapi import FastAPI, Form, Request
from fastapi.responses import JSONResponse, HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
from mangum import Mangum
from qlearning import QLearning
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Create FastAPI app
app = FastAPI()

# Allow CORS for all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)



# Serve static files (e.g., CSS, JS)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Set up Jinja2 templates for rendering HTML
templates = Jinja2Templates(directory="templates")

# QLearning initialization
state_space = (5, 5, 5, 5, 5, 5, 5, 24)  # Modify the size based on your state dimensions
action_space = ['improve_sleep', 'improve_diet', 'exercise_more', 'reduce_stress']
qlearning_agent = QLearning(state_space, action_space)

# Define the recommendation endpoint
@app.post("/recommend/")
async def recommend(
    mood: int = Form(...),
    energy: int = Form(...),
    sleep_quality: int = Form(...),
    diet: int = Form(...),
    exercise: int = Form(...),
    anxiety: int = Form(...),
    stress: int = Form(...),
    sleep_hours: float = Form(...),
):
    # Convert sleep_hours to integer, ensure exercise is within range
    sleep_hours = int(sleep_hours)
    exercise = min(max(0, int(exercise)), 4)  # Ensure exercise is within valid range

    # Build the current state
    current_state = (mood, energy, sleep_quality, diet, exercise, anxiety, stress, sleep_hours)

    try:
        # Get the recommended action
        action = qlearning_agent.recommend_action(current_state)
        human_response = qlearning_agent.generate_human_response(action, current_state)

        response = {
            "recommended_action": action,
            "human_response": human_response
        }
    except IndexError as e:
        response = {"error": str(e)}

    return JSONResponse(content=response)

# Serve the HTML form
@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

handler = Mangum(app)  # Entry point for AWS Lambda or Vercel
