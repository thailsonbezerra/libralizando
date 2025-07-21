import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, MessageCircle, Sparkles } from "lucide-react";

const WhyItMattersSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Inclusão escolar",
      description: "Quebrando barreiras para que todos os alunos participem igualmente do ambiente educacional.",
      color: "bg-education-teal"
    },
    {
      icon: Heart,
      title: "Desenvolvimento da empatia",
      description: "Criando conexões genuínas e compreensão mútua entre crianças ouvintes e surdas.",
      color: "bg-education-pink"
    },
    {
      icon: MessageCircle,
      title: "Comunicação sem barreiras",
      description: "Facilitando o diálogo e a troca de experiências entre todos os estudantes.",
      color: "bg-education-purple"
    },
    {
      icon: Sparkles,
      title: "Aprendizado divertido",
      description: "Transformando o ensino de LIBRAS em uma experiência interativa e envolvente.",
      color: "bg-education-yellow"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que isso importa?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            No Brasil, mais de 10 milhões de pessoas têm algum tipo de deficiência auditiva. 
            Ensinar LIBRAS desde cedo cria um ambiente mais inclusivo e empático, onde todas 
            as crianças podem se comunicar e aprender juntas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="bg-card border-0 shadow-card hover:shadow-hero transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className={`${benefit.color} text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-float`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-hero max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Cada criança merece ser ouvida
            </h3>
            <p className="text-muted-foreground mb-6">
              A tecnologia pode ser uma ponte para a inclusão. Vamos construir um futuro 
              onde a comunicação não conhece limites.
            </p>
            <div className="text-4xl">🌈✋🤝</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMattersSection;