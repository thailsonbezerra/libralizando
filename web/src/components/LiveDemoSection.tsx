import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  Camera,
  Square,
  Play,
  AlertCircle,
  Upload,
  Image,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LiveDemoSection = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [isRecognizing, setIsRecognizing] = useState(false);
  const [gesture, setGesture] = useState("---");
  const [confidence, setConfidence] = useState(0);
  const [error, setError] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const [isUploading, setIsUploading] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { toast } = useToast();

  const API_URL = import.meta.env.VITE_API_URL || "";
  const INTERVAL_MS = Number(import.meta.env.VITE_INTERVAL_MS) || 1500;

  const startCamera = async () => {
    try {
      setError("");
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsStreaming(true);
        toast({
          title: "Câmera ativada",
          description: "Agora você pode testar o reconhecimento de LIBRAS!",
        });
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido";
      setError(`Erro ao acessar a câmera: ${errorMessage}`);
      toast({
        title: "Erro na câmera",
        description:
          "Não foi possível acessar sua câmera. Verifique as permissões.",
        variant: "destructive",
      });
    }
  };

  const toggleRecognition = () => {
    if (isRecognizing) {
      // Parar reconhecimento
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsRecognizing(false);
      setGesture("---");
      setConfidence(0);
    } else {
      // Iniciar reconhecimento
      intervalRef.current = setInterval(captureAndRecognize, INTERVAL_MS);
      setIsRecognizing(true);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setUploadedImage(imageUrl);
        setGesture("---");
        setConfidence(0);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitPhoto = async () => {
    if (!fileInputRef.current?.files?.[0]) return;

    try {
      setIsUploading(true);
      setError("");

      await recognizeUploadedImage(fileInputRef.current.files[0]);
    } catch (err) {
      console.error("Erro no envio:", err);
      setError("Erro ao processar imagem. Tente novamente.");
      toast({
        title: "Erro no processamento",
        description: "Não foi possível processar a imagem.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const recognizeUploadedImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file, "gesture.jpg");

    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Erro ao se comunicar com o servidor.");
    }

    const text = await response.text();
    if (!text) throw new Error("Resposta vazia do servidor.");
    const data = JSON.parse(text);

    if (data.gesture) {
      setGesture(data.gesture);
      setConfidence(data.confidence * 100);
      toast({
        title: "Imagem processada!",
        description: `Detectamos o sinal da letra ${data.gesture}`,
      });
    }
  };

  const captureAndRecognize = async () => {
    if (!streamRef.current || !videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    try {
      const blob = await new Promise<Blob>((resolve) =>
        canvas.toBlob((blob) => resolve(blob!), "image/jpeg", 0.9)
      );

      const formData = new FormData();
      formData.append("file", blob, "gesture.jpg");

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.gesture) {
        setGesture(data.gesture);
        setConfidence(data.confidence * 100);
      }
    } catch (err) {
      console.error("Erro no reconhecimento:", err);
      setError("Erro ao reconhecer o gesto. Tente novamente.");
      toast({
        title: "Erro no reconhecimento",
        description: "Não foi possível reconhecer o gesto. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsStreaming(false);
    setIsRecognizing(false);
    setGesture("---");
    setConfidence(0);
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <section id="demonstracao" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Demonstração
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experimente nossa tecnologia! Faça upload de uma foto ou use sua
            câmera para testar o reconhecimento de sinais do alfabeto em LIBRAS.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Área principal */}
            <Card className="bg-background border-2 border-dashed border-border">
              <CardContent className="p-6">
                <Tabs defaultValue="upload" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger
                      value="upload"
                      className="flex items-center gap-2"
                    >
                      <Upload className="h-4 w-4" />
                      Upload de foto
                    </TabsTrigger>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="inline-block cursor-not-allowed">
                          <TabsTrigger
                            value="camera"
                            disabled={false}
                            className="pointer-events-none opacity-50 flex items-center gap-2"
                          >
                            <Camera className="h-4 w-4" />
                            Câmera ao vivo
                          </TabsTrigger>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Funcionalidade desativada no momento</p>
                      </TooltipContent>
                    </Tooltip>
                  </TabsList>

                  <TabsContent value="upload" className="space-y-4">
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden relative mb-4">
                      {uploadedImage ? (
                        <img
                          src={uploadedImage}
                          alt="Imagem carregada"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-muted">
                          <div className="text-center">
                            <Image className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                            <p className="text-muted-foreground">
                              Nenhuma imagem carregada
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />

                    <div className="space-y-2">
                      <Button
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full"
                        variant="hero"
                        size="lg"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Selecionar foto
                      </Button>

                      {uploadedImage && (
                        <Button
                          onClick={handleSubmitPhoto}
                          className="w-full"
                          variant="default"
                          size="lg"
                          disabled={isUploading}
                        >
                          {isUploading ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Processando...
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4 mr-2" />
                              Enviar foto
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="camera" className="space-y-4">
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden relative mb-4">
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full h-full object-cover"
                        style={{ transform: "scaleX(-1)" }}
                      />
                      <canvas ref={canvasRef} className="hidden" />
                      {!isStreaming && (
                        <div className="absolute inset-0 flex items-center justify-center bg-muted">
                          <div className="text-center">
                            <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                            <p className="text-muted-foreground">
                              Câmera desativada
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      {!isStreaming ? (
                        <Button
                          onClick={startCamera}
                          className="w-full"
                          variant="hero"
                          size="lg"
                        >
                          <Camera className="h-4 w-4 mr-2" />
                          Ativar câmera
                        </Button>
                      ) : (
                        <div className="space-y-2">
                          <Button
                            onClick={toggleRecognition}
                            className="w-full"
                            variant={isRecognizing ? "destructive" : "hero"}
                            size="lg"
                          >
                            {isRecognizing ? (
                              <>
                                <Square className="h-4 w-4 mr-2" />
                                Parar reconhecimento
                              </>
                            ) : (
                              <>
                                <Play className="h-4 w-4 mr-2" />
                                Iniciar reconhecimento
                              </>
                            )}
                          </Button>
                          <Button
                            onClick={stopCamera}
                            variant="outline"
                            size="sm"
                            className="w-full"
                          >
                            Desativar câmera
                          </Button>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>

                {error && (
                  <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Resultados */}
            <Card className="bg-background">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Resultado do reconhecimento
                </h3>

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-2 h-20 flex items-center justify-center">
                      {gesture}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Letra reconhecida
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-semibold text-foreground mb-1">
                      {confidence.toFixed(1)}%
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Confiança da predição
                    </p>
                    <div className="w-full bg-muted rounded-full h-2 mt-2">
                      <div
                        className="bg-gradient-hero h-2 rounded-full transition-all duration-300"
                        style={{ width: `${confidence}%` }}
                      />
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-card rounded-lg">
                    <h4 className="font-medium text-foreground mb-2">
                      💡 Dicas para melhor reconhecimento:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Mantenha boa iluminação</li>
                      <li>• Posicione a mão no centro da tela</li>
                      <li>• Faça movimentos claros e pausados</li>
                      <li>• Use fundo neutro</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alfabeto LIBRAS */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Alfabeto LIBRAS - Teste estes sinais:
            </h3>
            <div className="grid grid-cols-6 md:grid-cols-13 gap-2 max-w-4xl mx-auto">
              {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letter) => (
                <div
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`
                    w-12 h-12 rounded-lg border-2 flex items-center justify-center font-bold text-sm
                    transition-all duration-200 cursor-pointer
                    ${
                      gesture === letter
                        ? "border-primary bg-primary text-primary-foreground scale-110"
                        : "border-border bg-background text-foreground hover:border-primary/50 hover:scale-105"
                    }
                  `}
                >
                  {letter}
                </div>
              ))}
            </div>

            {/* Modal do sinal */}
            <Dialog
              open={selectedLetter !== null}
              onOpenChange={() => setSelectedLetter(null)}
            >
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl">
                    Sinal da letra {selectedLetter}
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center space-y-4 p-6">
                  <div className="w-48 h-48 bg-gradient-card rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Camera className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Imagem do sinal</p>
                      <p className="text-xs">para a letra {selectedLetter}</p>
                    </div>
                  </div>
                  <p className="text-sm text-center text-muted-foreground">
                    Aqui seria exibida a imagem ou vídeo demonstrando como fazer
                    o sinal da letra {selectedLetter} em LIBRAS.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoSection;
