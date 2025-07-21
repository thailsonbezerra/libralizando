import { Card, CardContent } from "@/components/ui/card";
import { Camera, Brain, Zap, Monitor } from "lucide-react";
import howItWorksImage from "@/assets/how-it-works.jpg";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Camera,
      title: "Captura do movimento",
      description:
        "A câmera detecta e registra os movimentos das mãos em tempo real",
      step: "01",
    },
    {
      icon: Brain,
      title: "Detecção com YOLO",
      description:
        "Inteligência artificial identifica e localiza as mãos na imagem",
      step: "02",
    },
    {
      icon: Zap,
      title: "Tradução com LSTM",
      description:
        "Rede neural interpreta o sinal e identifica a letra correspondente",
      step: "03",
    },
    {
      icon: Monitor,
      title: "Feedback visual",
      description:
        "Resultado é exibido instantaneamente na tela para aprendizado",
      step: "04",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como funciona?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa tecnologia combina visão computacional e inteligência
            artificial para reconhecer sinais de LIBRAS de forma simples e
            precisa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="bg-gradient-card border-0 shadow-card hover:shadow-hero transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-float">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="h-5 w-5 text-primary" />
                          <h3 className="text-lg font-semibold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="bg-gradient-accent rounded-2xl p-6 shadow-hero">
              <img
                src={howItWorksImage}
                alt="Processo de reconhecimento de LIBRAS"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>

            {/* Floating tech badges */}
            <div className="absolute -top-2 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow-float">
              95% precisão
            </div>
            <div className="absolute bottom-4 -left-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium shadow-float">
              Tempo real
            </div>
          </div>
        </div>

        {/* Technology stack preview */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Tecnologias que tornam isso possível
          </h3>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="bg-card p-4 rounded-lg shadow-float">
              <div className="text-2xl font-bold text-primary">YOLO</div>
              <div className="text-xs text-muted-foreground">
                Detecção de objetos
              </div>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-float">
              <div className="text-2xl font-bold text-accent">LSTM</div>
              <div className="text-xs text-muted-foreground">Rede neural</div>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-float">
              <div className="text-2xl font-bold text-education-teal">
                OpenCV
              </div>
              <div className="text-xs text-muted-foreground">
                Visão computacional
              </div>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-float">
              <div className="text-2xl font-bold text-education-purple">
                TensorFlow
              </div>
              <div className="text-xs text-muted-foreground">
                Machine Learning
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
