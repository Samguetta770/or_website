import React from 'react';
import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/972502504545"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 flex items-center gap-2 hover:scale-110"
      aria-label="צרי קשר בוואטסאפ"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden md:inline">צרי קשר</span>
    </a>
  );
}

export default WhatsAppButton;