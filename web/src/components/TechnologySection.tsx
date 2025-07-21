import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Cpu, Eye, GitBranch } from "lucide-react";

const TechnologySection = () => {
  const technologies = [
    {
      icon: Eye,
      title: "Visão Computacional",
      description: "Usamos algoritmos avançados para detectar e rastrear movimentos das mãos com alta precisão.",
      features: ["Detecção em tempo real", "Múltiplos ângulos", "Baixa latência"]
    },
    {
      icon: Cpu,
      title: "Inteligência Artificial",
      description: "Redes neurais especializadas interpretam os sinais e os convertem em letras do alfabeto.",
      features: ["95% de precisão", "Aprendizado contínuo", "Reconhecimento robusto"]
    },
    {
      icon: Code,
      title: "Interface Amigável",
      description: "Design pensado para crianças e educadores, com feedback visual claro e interativo.",
      features: ["Fácil de usar", "Feedback imediato", "Gamificação"]
    }
  ];

  return (
    <section id="tecnologia" className="py-20 bg-gradient-to-br from-muted/20 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tecnologia por trás
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Combinamos inteligência artificial de ponta com design centrado no usuário para 
            criar uma experiência de aprendizado única e acessível para todos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card key={index} className="bg-card border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="bg-gradient-hero text-primary-foreground p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-float">
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {tech.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tech.description}
                  </p>
                  <div className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <div key={idx} className="bg-muted rounded-lg px-3 py-1 text-xs font-medium text-muted-foreground">
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technical details */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-hero">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Explicação simplificada
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Imagine que ensinamos um computador a "ver" e "entender" os movimentos das mãos, 
                assim como um professor experiente reconhece quando um aluno está fazendo um sinal corretamente. 
                Nosso sistema faz isso milhares de vezes por segundo!
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground">Câmera captura 30 frames por segundo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm text-foreground">IA processa cada imagem em milissegundos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-education-teal rounded-full"></div>
                  <span className="text-sm text-foreground">Resultado aparece instantaneamente na tela</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-muted rounded-xl p-6 shadow-float">
                <h4 className="font-semibold text-foreground mb-4">Ferramentas utilizadas</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-3 shadow-card">
                    <GitBranch className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-xs font-medium">TensorFlow</div>
                  </div>
                  <div className="bg-background rounded-lg p-3 shadow-card">
                    <Eye className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="text-xs font-medium">YOLO v8</div>
                  </div>
                  <div className="bg-background rounded-lg p-3 shadow-card">
                    <Cpu className="h-6 w-6 text-education-purple mx-auto mb-2" />
                    <div className="text-xs font-medium">OpenCV</div>
                  </div>
                  <div className="bg-background rounded-lg p-3 shadow-card">
                    <Code className="h-6 w-6 text-education-teal mx-auto mb-2" />
                    <div className="text-xs font-medium">Roboflow</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <GitBranch className="h-4 w-4" />
            Ver código no GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;