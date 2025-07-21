from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from ultralytics import YOLO
from PIL import Image
import io
import os
import warnings
import requests
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL_URL = os.getenv("MODEL_URL")
MODEL_PATH = os.getenv("MODEL_PATH")

if not os.path.exists(MODEL_PATH):
    print("Baixando modelo...")
    os.makedirs(os.path.dirname(MODEL_PATH), exist_ok=True)
    response = requests.get(MODEL_URL)
    if response.status_code == 200:
        with open(MODEL_PATH, 'wb') as f:
            f.write(response.content)
        print("Modelo salvo em:", MODEL_PATH)
    else:
        raise Exception(f"Erro ao baixar o modelo: {response.status_code}")

warnings.filterwarnings("ignore", message="Could not initialize NNPACK")

model = YOLO(MODEL_PATH)

@app.post("/recognize")
async def recognize_gesture(file: UploadFile = File(...)):
    image_data = await file.read()
    image = Image.open(io.BytesIO(image_data)).convert("RGB")

    with warnings.catch_warnings():
        warnings.simplefilter("ignore")
        results = model(image)

    if len(results) > 0 and len(results[0].boxes) > 0:
        best_pred = results[0].boxes[0]
        return {
            "gesture": model.names[int(best_pred.cls)],
            "confidence": float(best_pred.conf)
        }

    return {"gesture": None, "confidence": 0}
