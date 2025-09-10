import { Phone, Mail, MapPin, Instagram, Building2 } from 'lucide-react';
import logoKau from '/logo-kau-presenca.png';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phone = "5573981736376";
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os serviços.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoKau} 
                alt="Logo KAU Presença"
                className="h-12 w-auto object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="text-xl font-bold">KAU PRESENÇA</h3>
                <p className="text-sm text-white/80">Materiais de Construção</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 max-w-md">
              Desde 2019 oferecendo materiais de construção de qualidade em Ibirapuã-BA. 
              Nossa missão é deixar o cliente satisfeito com produtos duráveis e atendimento personalizado.
            </p>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.open('https://www.instagram.com/blocoskaupresenca?igsh=OHljNmtiaTQzaWVz', '_blank')}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              Links Rápidos
            </h4>
            
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">WhatsApp / Telefone</p>
                  <button
                    onClick={() => window.open('tel:+5573981736376', '_self')}
                    className="text-white hover:text-primary transition-colors"
                  >
                    (73) 98173-6376
                  </button>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">E-mail</p>
                  <button
                    onClick={() => window.open('mailto:kaupresenca@gmail.com', '_self')}
                    className="text-white hover:text-primary transition-colors"
                  >
                    kaupresenca@gmail.com
                  </button>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">Endereço</p>
                  <p className="text-white text-sm">
                    Rua Presença, 10<br />
                    Bairro Jaqueira<br />
                    Ibirapuã-BA - 45940-000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm">
                © 2024 Blocos KAU Presença - Todos os direitos reservados
              </p>
              <p className="text-white/60 text-xs mt-1">
                CNPJ: 34.655.034/0001-36 - Claudionor Gonçalves Nascimento
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-white/80 text-sm">
                <strong>Horário de Funcionamento:</strong>
              </p>
              <p className="text-white/60 text-xs">
                Seg-Sex: 07h-17h | Sáb: 07h-11h
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;