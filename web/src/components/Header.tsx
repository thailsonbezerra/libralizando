import { Button } from "@/components/ui/button";
import { Hand, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-hero p-2 rounded-lg shadow-float">
              <Hand className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">
                Libralizando
              </h1>
              <p className="text-xs text-muted-foreground">
                Inclusão em tempo real
              </p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#sobre"
              className="text-foreground hover:text-primary transition-colors"
            >
              Por que importa?
            </a>
            <a
              href="#demonstracao"
              className="text-foreground hover:text-primary transition-colors"
            >
              Demonstração
            </a>
            <a
              href="#como-funciona"
              className="text-foreground hover:text-primary transition-colors"
            >
              Como funciona
            </a>
            <a
              href="#tecnologia"
              className="text-foreground hover:text-primary transition-colors"
            >
              Tecnologia
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <Button variant="hero" size="sm" asChild>
              <a href="#demonstracao">Ver demonstração</a>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
