import { Button } from "@/components/ui/button";
import { Hand, Github, Mail, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg">
                <Hand className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Libralizando</h3>
                <p className="text-xs text-background/70">
                  Inclusão em tempo real
                </p>
              </div>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Conectando pessoas através da tecnologia e quebrando barreiras de
              comunicação.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Navegação</h4>
            <div className="space-y-2">
              <a
                href="#sobre"
                className="block text-sm text-background/80 hover:text-background transition-colors"
              >
                Por que importa?
              </a>
              <a
                href="#demonstracao"
                className="block text-sm text-background/80 hover:text-background transition-colors"
              >
                Demonstração
              </a>
              <a
                href="#como-funciona"
                className="block text-sm text-background/80 hover:text-background transition-colors"
              >
                Como funciona
              </a>
              <a
                href="#tecnologia"
                className="block text-sm text-background/80 hover:text-background transition-colors"
              >
                Tecnologia
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Recursos</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-background/80 hover:text-background transition-colors"
              >
                Guia para professores
              </a>
              <a
                href="#"
                className="block text-sm text-background/80 hover:text-background transition-colors"
              >
                Material didático
              </a>
              <a
                href="#"
                className="block text-sm text-background/80 hover:text-background transition-colors"
              >
                Curso online
              </a>
              <a
                href="#"
                className="block text-sm text-background/80 hover:text-background transition-colors"
              >
                Suporte técnico
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-background">Contato</h4>
            <div className="space-y-3">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                <a
                  href="https://github.com/thailsonbezerra/libralizando"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver no GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                Entrar em contato
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" />
                Demonstração
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-background/20 pt-8">
          {/* <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/70">
              © 2024 Libralizando. Desenvolvido com{" "}
              <Heart
                className="h-4 w-4 inline text-red-400"
                fill="currentColor"
              />{" "}
              para educação inclusiva.
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Acessibilidade
              </a>
            </div>
          </div> */}

          <div className="text-center mt-6 text-sm text-background/60">
            <p>
              Projeto acadêmico desenvolvido para promover inclusão e
              acessibilidade.
              <br className="hidden md:block" />
              Agradecimentos especiais à comunidade surda brasileira pela
              inspiração.
            </p>
            <div className="text-2xl mt-4">🤟🇧🇷✨</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
