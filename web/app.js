// Elementos da página
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const startBtn = document.getElementById('startBtn');
const captureBtn = document.getElementById('captureBtn');
const gestureDisplay = document.getElementById('gesture');
const confidenceDisplay = document.getElementById('confidence');

// Configurações
const API_URL = 'http://localhost:8000/recognize'; // Altere se necessário
const INTERVAL_MS = 3000; // Envia a cada 3 segundos

let stream = null;
let intervalId = null;

// 1. Inicia a câmera
startBtn.addEventListener('click', async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'user' } // Usa câmera traseira no celular
        });
        video.srcObject = stream;
        startBtn.disabled = true;
        captureBtn.disabled = false;
    } catch (err) {
        alert(`Erro ao acessar a câmera: ${err.message}`);
    }
});

// 2. Captura e envia para a API
captureBtn.addEventListener('click', toggleRecognition);

function toggleRecognition() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        captureBtn.textContent = 'Capturar Gesto';
        gestureDisplay.textContent = '---';
        confidenceDisplay.textContent = '0%';
    } else {
        intervalId = setInterval(captureAndRecognize, INTERVAL_MS);
        captureBtn.textContent = 'Parar';
    }
}

async function captureAndRecognize() {
    if (!stream) return;

    // Captura frame
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Envia para a API
    try {
        const blob = await new Promise(resolve =>
            canvas.toBlob(resolve, 'image/jpeg', 0.9)
        );

        const formData = new FormData();
        formData.append('file', blob, 'gesture.jpg');

        const response = await fetch(API_URL, {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.gesture) {
            gestureDisplay.textContent = data.gesture;
            confidenceDisplay.textContent = `${(data.confidence * 100).toFixed(1)}%`;
        }
    } catch (err) {
        console.error('Erro:', err);
    }
}