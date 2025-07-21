import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Hand } from "lucide-react";
import heroImage from "@/assets/hero-libras.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] bg-gradient-to-br from-background via-muted/30 to-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-accent opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                <Hand className="h-4 w-4" />
                Tecnologia Educacional Inclusiva
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Comunicando para{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  incluir
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Aprenda LIBRAS com tecnologia em tempo real. Uma ferramenta interativa para reconhecer sinais do alfabeto, promovendo inclusão e empatia nas escolas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Ver demonstração
              </Button>
              <Button variant="outline" size="lg" className="group">
                Saiba mais
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Precisão</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">26</div>
                <div className="text-sm text-muted-foreground">Letras do alfabeto</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-education-teal">Real-time</div>
                <div className="text-sm text-muted-foreground">Reconhecimento</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-card rounded-2xl p-6 shadow-hero">
              <img 
                src={heroImage} 
                alt="Crianças aprendendo LIBRAS em sala de aula"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-3 rounded-full shadow-float animate-bounce">
              ✋
            </div>
            <div className="absolute -bottom-4 -left-4 bg-education-purple text-white p-3 rounded-full shadow-float animate-pulse">
              🤝
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;