import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    // Update page title for SEO
    document.title = "Página Não Encontrada - Blocos KAU Presença";
    
    // Update meta description for 404 page
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Página não encontrada. Retorne à página inicial da Blocos KAU Presença para encontrar materiais de construção em Ibirapuã-BA.'
      );
    }
  }, [location.pathname]);

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
      <div className="text-center max-w-md mx-auto">
        
        {/* 404 Visual */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        {/* Content */}
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Página Não Encontrada
        </h1>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Ops! A página que você está procurando não existe ou foi movida. 
          Que tal voltar para nossa página inicial e encontrar os melhores 
          materiais de construção?
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={handleGoHome}
            className="group"
          >
            <Home className="w-5 h-5 mr-2" />
            Ir para Início
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleGoBack}
            className="group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar
          </Button>
        </div>
        
        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground mb-4">
            Ou acesse diretamente:
          </p>
          
          <div className="space-y-2">
            <button 
              onClick={() => window.location.href = '/#sobre'}
              className="block w-full text-center text-sm text-primary hover:text-primary-dark transition-colors"
            >
              Sobre a KAU Presença
            </button>
            
            <button 
              onClick={() => window.location.href = '/#servicos'}
              className="block w-full text-center text-sm text-primary hover:text-primary-dark transition-colors"
            >
              Nossos Serviços
            </button>
            
            <button 
              onClick={() => window.location.href = '/#contato'}
              className="block w-full text-center text-sm text-primary hover:text-primary-dark transition-colors"
            >
              Entre em Contato
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default NotFound;
