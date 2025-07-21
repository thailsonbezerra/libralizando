from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from ultralytics import YOLO
from PIL import Image
import io
import os

app = FastAPI()

# Configura CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

model_path = 'app/libras_model.pt'
if not os.path.exists(model_path):
    raise FileNotFoundError(f"Model file {model_path} not found!")

import warnings
warnings.filterwarnings("ignore", message="Could not initialize NNPACK")

model = YOLO(model_path)

@app.post("/recognize")
async def recognize_gesture(file: UploadFile = File(...)):
    image_data = await file.read()
    image = Image.open(io.BytesIO(image_data)).convert("RGB")
    
    # Faz a predição (desativa warnings durante inferência)
    with warnings.catch_warnings():
        warnings.simplefilter("ignore")
        results = model(image)
    
    # Processa os resultados
    if len(results) > 0:
        best_pred = results[0].boxes[0]
        return {
            "gesture": model.names[int(best_pred.cls)],
            "confidence": float(best_pred.conf)
        }
    return {"gesture": None, "confidence": 0}