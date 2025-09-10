import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Instagram,
  ArrowRight
} from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phone = "5573981736376";
    const message = encodeURIComponent(
      "Olá! Gostaria de falar com vocês sobre materiais de construção. Podem me ajudar?"
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/blocoskaupresenca?igsh=OHljNmtiaTQzaWVz', '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone / WhatsApp",
      content: "(73) 98173-6376",
      action: () => window.open('tel:+5573981736376', '_self'),
      actionText: "Ligar Agora",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "kaupresenca@gmail.com",
      action: () => window.open('mailto:kaupresenca@gmail.com', '_self'),
      actionText: "Enviar E-mail",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Presença, 10 - Bairro Jaqueira\nIbirapuã-BA - CEP: 45940-000",
      actionText: "Ver Localização",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: "Segunda a Sexta: 07:00 às 17:00\nSábado: 07:00 às 11:00\nDomingo: Fechado",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Entre em Contato</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fale <span className="text-primary">Conosco</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você e esclarecer todas as suas dúvidas
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line">
                    {info.content}
                  </p>
                  
                  {info.action && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={info.action}
                      className="text-xs"
                    >
                      {info.actionText}
                    </Button>
                  )}
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Instagram className="w-5 h-5 text-pink-600" />
                Redes Sociais
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                Siga-nos no Instagram para acompanhar nossos trabalhos e novidades
              </p>
              
              <Button 
                variant="outline" 
                onClick={handleInstagram}
                className="group border-pink-200 text-pink-600 hover:bg-pink-600 hover:text-white"
              >
                @blocoskaupresenca
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          </div>

          {/* Quick Contact CTA */}
          <div className="space-y-6">
            
            {/* WhatsApp Card */}
            <Card className="p-6 bg-green-50 border-green-200">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="font-semibold text-foreground mb-2">
                Atendimento WhatsApp
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                Fale conosco pelo WhatsApp e receba atendimento rápido e personalizado
              </p>
              
              <Button 
                variant="whatsapp" 
                className="w-full group"
                onClick={handleWhatsAppClick}
              >
                Iniciar Conversa
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
            </Card>

            {/* Company Info */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Informações da Empresa
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Razão Social:</span>
                  <p className="font-medium text-foreground">Claudionor Gonçalves Nascimento</p>
                </div>
                
                <div>
                  <span className="text-muted-foreground">CNPJ:</span>
                  <p className="font-medium text-foreground">34.655.034/0001-36</p>
                </div>
                
                <div>
                  <span className="text-muted-foreground">Atividade:</span>
                  <p className="font-medium text-foreground">Materiais de Construção e Obras</p>
                </div>

                <div>
                  <span className="text-muted-foreground">Fundação:</span>
                  <p className="font-medium text-foreground">2019</p>
                </div>
              </div>
            </Card>

            {/* Emergency Contact */}
            <Card className="p-6 bg-construction/5 border-construction/20">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-construction" />
                Atendimento Urgente
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                Para casos urgentes ou fora do horário comercial, entre em contato pelo WhatsApp
              </p>
              
              <Button 
                variant="construction" 
                size="sm"
                onClick={handleWhatsAppClick}
                className="w-full"
              >
                WhatsApp 24h
              </Button>
            </Card>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Pronto para Começar Sua Obra?
          </h3>
          
          <p className="text-muted-foreground mb-6">
            Entre em contato conosco e receba um orçamento personalizado para seu projeto
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="group"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('tel:+5573981736376', '_self')}
            >
              Ligar Agora
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;