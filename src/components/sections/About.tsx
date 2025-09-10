import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Building2, Users, Award, Truck, ArrowRight } from 'lucide-react';

const About = () => {
  const handleWhatsAppClick = () => {
    const phone = "5573981736376";
    const message = encodeURIComponent(
      "Olá! Gostaria de conhecer mais sobre a história da empresa e os serviços oferecidos."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const features = [
    {
      icon: Building2,
      title: "Materiais de Qualidade",
      description: "Trabalhamos apenas com produtos certificados e de alta durabilidade para sua obra."
    },
    {
      icon: Users,
      title: "Atendimento Personalizado", 
      description: "Nossa equipe está sempre pronta para orientar e encontrar a melhor solução para seu projeto."
    },
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Desde 2019 atendendo clientes em Ibirapuã e região com excelência e confiabilidade."
    },
    {
      icon: Truck,
      title: "Entrega Eficiente",
      description: "Logística organizada para entregar seus materiais no prazo e local combinados."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Nossa História</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre a <span className="text-primary">KAU Presença</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa trajetória de dedicação e qualidade no ramo de materiais de construção
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Fundada em 2019 com o Compromisso de Qualidade
            </h3>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                A <strong className="text-foreground">Blocos KAU Presença</strong> foi criada em 2019 com o intuito de 
                levar aos clientes materiais de boa qualidade. Desde então, temos nos dedicado a oferecer 
                os melhores produtos para construção civil em Ibirapuã e região.
              </p>
              
              <p>
                Nossa missão é clara: <strong className="text-primary">deixar o cliente satisfeito</strong>. 
                Trabalhamos com blocos de concreto, ferragens e lajes pré-moldadas, sempre priorizando 
                a qualidade e a durabilidade dos nossos produtos.
              </p>
              
              <p>
                Localizada na Rua Presença, 10, Bairro Jaqueira, nossa empresa tem se tornado referência 
                na região pela seriedade, pontualidade e produtos de alta qualidade.
              </p>
            </div>

            {/* Company Info */}
            <div className="bg-primary/5 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-foreground mb-4">Informações da Empresa</h4>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Responsável:</span>
                  <p className="font-medium text-foreground">Claudionor Gonçalves Nascimento</p>
                </div>
                <div>
                  <span className="text-muted-foreground">CNPJ:</span>
                  <p className="font-medium text-foreground">34.655.034/0001-36</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Fundação:</span>
                  <p className="font-medium text-foreground">2019</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Localização:</span>
                  <p className="font-medium text-foreground">Ibirapuã-BA</p>
                </div>
              </div>
            </div>
            
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="group"
            >
              Fale Conosco
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h4 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Nossa Missão
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Fornecer materiais de construção de alta qualidade, com atendimento personalizado 
            e preços justos, contribuindo para o sucesso dos projetos de nossos clientes em 
            Ibirapuã e região.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;