import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const handleWhatsAppChat = () => {
    const message = "Hi! I'm interested in your products. Can you help me with more information?";
    const whatsappUrl = `https://wa.me/${import.meta.env.VITE_WHATSAPP}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppChat}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white p-5 rounded-full shadow-2xl transition-all duration-700 transform hover:scale-125 z-50 animate-pulse hover:animate-bounce cursor-pointer group/whatsapp relative overflow-hidden"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 opacity-0 group-hover/whatsapp:opacity-100 transition-opacity duration-700 rounded-full" />
      <MessageCircle className="h-8 w-8 relative z-10 transition-transform duration-500 group-hover/whatsapp:rotate-12 group-hover/whatsapp:scale-110" />
    </button>
  );
};

export default WhatsAppFloat;