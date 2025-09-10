import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import logoKau from '/logo-kau-presenca.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-elegant border-b border-border/40">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoKau} 
              alt="Logo Blocos KAU Presença - Materiais de Construção"
              className="h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary">KAU PRESENÇA</h1>
              <p className="text-xs text-muted-foreground">Materiais de Construção</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Contato
            </button>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span>(73) 98173-6376</span>
            </div>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => window.open('https://wa.me/5573981736376', '_blank')}
              className="shadow-construction"
            >
              Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border/40 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
            >
              Contato
            </button>
            
            <div className="px-4 pt-2 border-t border-border/40">
              <div className="flex items-center space-x-2 text-sm mb-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>(73) 98173-6376</span>
              </div>
              <Button 
                variant="hero" 
                size="sm"
                onClick={() => window.open('https://wa.me/5573981736376', '_blank')}
                className="w-full"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;