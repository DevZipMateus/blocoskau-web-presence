import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, Shield, Star } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phone = "5573981736376";
    const message = encodeURIComponent(
      "Olá! Vi o site de vocês e gostaria de saber mais sobre os materiais de construção. Podem me ajudar?"
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Decorative brick pattern overlay */}
      <div className="absolute inset-0 brick-pattern opacity-20"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-white text-sm font-medium">Desde 2019 com qualidade</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Materiais de
              <span className="block text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
                Construção
              </span>
              de Qualidade
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Blocos de concreto, ferragens e lajes pré-moldadas em Ibirapuã-BA. 
              Nossa missão é deixar o cliente satisfeito com produtos de alta qualidade.
            </p>
            
            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">Produtos Certificados</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Entrega Rápida</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Shield className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">5 Anos de Experiência</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="outline-white" 
                size="xl"
                onClick={handleWhatsAppClick}
                className="group"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="xl"
                onClick={scrollToServices}
                className="text-white hover:bg-white/20 hover:text-white"
              >
                Ver Serviços
              </Button>
            </div>
          </div>
          
          {/* Stats/Info Cards */}
          <div className="lg:justify-self-end">
            <div className="grid gap-6 max-w-md mx-auto lg:mx-0">
              
              {/* Contact Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-white font-semibold text-lg mb-4">Fale Conosco</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-green-400 font-semibold text-sm">WA</span>
                    </div>
                    <div>
                      <p className="text-sm opacity-80">WhatsApp</p>
                      <p className="font-medium">(73) 98173-6376</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-white/90">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm opacity-80">Horário</p>
                      <p className="font-medium text-sm">Seg-Sex 07h-17h | Sáb 07h-11h</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-white font-semibold text-lg mb-4">Nossa Experiência</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">5+</div>
                    <div className="text-xs text-white/80">Anos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-white/80">Qualidade</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">24h</div>
                    <div className="text-xs text-white/80">Resposta</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">★★★★★</div>
                    <div className="text-xs text-white/80">Avaliação</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 text-background" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V120z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;