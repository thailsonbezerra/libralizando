import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Rocket, Target } from "lucide-react";

const FutureSection = () => {
  const roadmapItems = [
    {
      icon: CheckCircle,
      title: "Reconhecimento do alfabeto",
      description: "26 letras do alfabeto LIBRAS com 95% de precisão",
      status: "completed",
      timeline: "Concluído",
    },
    {
      icon: Clock,
      title: "Frases completas",
      description: "Reconhecimento de palavras e frases básicas do dia a dia",
      status: "in-progress",
      timeline: "Em desenvolvimento",
    },
    {
      icon: Target,
      title: "Expansão do vocabulário",
      description: "Mais de 1000 sinais incluindo números, cores e emoções",
      status: "planned",
      timeline: "Próximos 6 meses",
    },
    {
      icon: Rocket,
      title: "Integração educacional",
      description:
        "Plataforma completa para escolas com acompanhamento de progresso",
      status: "planned",
      timeline: "2025",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-education-teal";
      case "in-progress":
        return "bg-education-yellow";
      case "planned":
        return "bg-muted";
      default:
        return "bg-muted";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "text-education-teal";
      case "in-progress":
        return "text-education-yellow";
      case "planned":
        return "text-muted-foreground";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O futuro do projeto
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nossa jornada está apenas começando. Veja o que estamos construindo
            para tornar a comunicação em LIBRAS ainda mais acessível e completa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {roadmapItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="bg-card border-0 shadow-card hover:shadow-hero transition-all duration-300 relative overflow-hidden"
              >
                {item.status === "completed" && (
                  <div className="absolute top-0 right-0 bg-education-teal text-white text-xs px-2 py-1 rounded-bl-lg">
                    ✓
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`${getStatusColor(
                      item.status
                    )} text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-float`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {item.title}
                  </CardTitle>
                  {/* <div className={`text-xs font-medium ${getStatusText(item.status)}`}>
                    {item.timeline}
                  </div> */}
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Vision section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Nossa visão para 2025
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Plataforma completa
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Sistema integrado para escolas com dashboards para
                    professores e relatórios de progresso
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Aplicativo móvel
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    App para tablets e smartphones, permitindo aprendizado em
                    qualquer lugar
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-education-purple rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Comunidade ativa
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Rede de educadores compartilhando experiências e melhores
                    práticas
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-card rounded-2xl p-8 shadow-hero text-center">
            <h4 className="text-xl font-bold text-foreground mb-4">
              Impacto esperado
            </h4>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-2xl font-bold text-primary">10,000+</div>
                <div className="text-xs text-muted-foreground">Estudantes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-xs text-muted-foreground">Escolas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-education-teal">27</div>
                <div className="text-xs text-muted-foreground">Estados</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-education-purple">
                  100%
                </div>
                <div className="text-xs text-muted-foreground">Inclusivo</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Juntos, vamos transformar a educação inclusiva no Brasil
            </p>
            <div className="text-3xl mt-4">🇧🇷✨</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
