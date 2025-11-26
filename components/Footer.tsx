import React from 'react';
import { Instagram, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-100 pt-16 pb-8 border-t border-stone-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif text-stone-800 mb-2">Laryssa Ramos</h3>
            <p className="text-stone-500 text-sm tracking-widest uppercase">Psicóloga Clínica</p>
            <p className="text-stone-600 font-semibold mt-2">CRP 06/167709</p>
          </div>

          {/* Localização */}
          <div className="text-center">
            <h4 className="font-semibold text-stone-800 mb-3">Localização</h4>
            <div className="flex items-center justify-center gap-2 text-stone-600">
              <MapPin size={18} />
              <span>Santos/SP</span>
            </div>
            <p className="text-stone-500 text-sm mt-1">Atendimento presencial e online</p>
          </div>

          {/* Contato */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-stone-800 mb-3">Contato</h4>
            <div className="flex flex-col items-center md:items-end gap-3 text-stone-600">
              <a 
                href="https://wa.me/5513974164315" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-600 transition-colors"
              >
                <MessageCircle size={18} />
                <span>(13) 97416-4315</span>
              </a>
              <a 
                href="https://instagram.com/psi.laryssaramos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-600 transition-colors"
              >
                <Instagram size={18} />
                <span>@psi.laryssaramos</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
          <p>&copy; {new Date().getFullYear()} Laryssa Ramos - Psicóloga Clínica | CRP 06/167709</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}