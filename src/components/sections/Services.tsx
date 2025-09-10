import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Building, Settings, Home } from 'lucide-react';

const Services = () => {
  const handleWhatsAppClick = (service: string) => {
    const phone = "5573981736376";
    const message = encodeURIComponent(
      `Olá! Tenho interesse em ${service}. Podem me enviar mais informações e um orçamento?`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const services = [
    {
      icon: Building,
      title: "Blocos de Concreto",
      description: "Blocos de concreto de alta resistência e qualidade para sua construção. Diversos tamanhos e especificações disponíveis.",
      features: [
        "Alta resistência estrutural",
        "Diferentes medidas disponíveis", 
        "Certificação de qualidade",
        "Preços competitivos"
      ],
      image: "🧱"
    },
    {
      icon: Settings,
      title: "Ferragens",
      description: "Completa linha de ferragens para construção civil. Barras de ferro, vergalhões e acessórios diversos.",
      features: [
        "Aço certificado CA-50 e CA-60",
        "Vergalhões de 6mm a 25mm",
        "Telas soldadas",
        "Arames e acessórios"
      ],
      image: "⚙️"
    },
    {
      icon: Home,
      title: "Lajes Pré-moldadas",
      description: "Lajes pré-moldadas para facilitar e agilizar sua obra. Qualidade garantida e instalação rápida.",
      features: [
        "Montagem rápida e fácil",
        "Maior resistência",
        "Redução de custos",
        "Vãos de até 8 metros"
      ],
      image: "🏗️"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-construction/10 rounded-full px-4 py-2 mb-4">
            <Building className="w-4 h-4 text-construction" />
            <span className="text-construction text-sm font-medium">Nossos Produtos</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serviços e <span className="text-primary">Materiais</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma linha completa de materiais de construção com qualidade garantida
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-construction transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              
              {/* Card Header */}
              <div className="bg-gradient-primary p-6 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 text-4xl opacity-20">
                  {service.image}
                </div>
                
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm">{service.description}</p>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                  onClick={() => handleWhatsAppClick(service.title)}
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 brick-pattern opacity-10"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Precisa de um Orçamento Personalizado?
            </h3>
            
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar você a escolher os melhores materiais 
              para sua obra. Faça seu orçamento sem compromisso!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline-white" 
                size="lg"
                onClick={() => handleWhatsAppClick("todos os serviços")}
                className="group"
              >
                WhatsApp Orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg"
                onClick={() => window.open('tel:+5573981736376', '_self')}
                className="text-white hover:bg-white/20 hover:text-white"
              >
                Ligar Agora
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;