import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phone = "5573981736376";
    const message = encodeURIComponent(
      "Olá! Gostaria de solicitar um orçamento para materiais de construção. Pode me ajudar?"
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        variant="whatsapp"
        size="icon"
        className="h-14 w-14 rounded-full shadow-2xl animate-bounce-smooth hover:animate-none"
        aria-label="Contatar via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping"></div>
    </div>
  );
};

export default WhatsAppFloat;