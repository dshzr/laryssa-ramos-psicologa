import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-bg">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1 space-y-8 text-center md:text-left"
        >
          <span className="inline-block py-1 px-3 border border-stone-300 rounded-full text-xs font-semibold tracking-[0.2em] text-stone-500 uppercase">
            Psicologia Clínica & TCC
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-800 leading-[1.1]">
            Viva com mais <br/>
            <span className="italic text-stone-500">autoconhecimento</span> <br/>
            e leveza.
          </h1>
          <p className="text-stone-600 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0 font-light">
            Te ajudo a superar a ansiedade e construir uma vida com propósito através da Terapia Cognitivo-Comportamental.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-stone-800 text-white rounded-sm hover:bg-stone-700 transition-all duration-300"
            >
              Agendar Consulta
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-stone-300 text-stone-600 rounded-sm hover:border-stone-800 hover:text-stone-800 transition-all duration-300"
            >
              Saiba Mais
            </a>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="order-1 md:order-2 relative h-[50vh] md:h-[80vh] w-full"
        >
          <div className="absolute inset-0 bg-stone-200 rounded-t-[10rem] md:rounded-t-[15rem] overflow-hidden">
             {/* Foto profissional */}
            <img 
              src="/perfil.png" 
              alt="Laryssa Ramos Psicóloga" 
              className="w-full h-full object-cover object-top opacity-90 hover:scale-105 transition-transform duration-1000"
            />
          </div>
          
          {/* Floating Badge - à direita, por cima da imagem */}
          <div className="absolute bottom-10 right-0 md:-right-10 bg-white p-6 shadow-xl max-w-xs rounded-l-lg z-10">
            <p className="font-serif text-xl italic text-stone-800 mb-1">"Escuta sem julgamento"</p>
            <p className="text-xs text-stone-500 uppercase tracking-widest">Abordagem Humanizada</p>
          </div>
        </motion.div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100 -z-10 hidden md:block" />
    </section>
  );
}