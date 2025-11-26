import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Heart, Sparkles, Shield } from 'lucide-react';

export default function About() {
  const destaques = [
    "Atendimento online para mais de 6 países",
    "Consultório próprio presencial em Santos/SP",
    "Psicóloga Clínica (CRP 06/167709)",
    "Especialista em TCC"
  ];

  const diferenciais = [
    { icon: <Heart className="w-5 h-5" />, text: "Escuta sem julgamento" },
    { icon: <Sparkles className="w-5 h-5" />, text: "Leveza durante as sessões" },
    { icon: <Shield className="w-5 h-5" />, text: "Acolhimento genuíno" }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-[4/5] bg-stone-100 rounded-lg overflow-hidden relative">
              <img 
                src="/perfil.png" 
                alt="Laryssa Ramos Psicóloga" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-stone-900/10"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-stone-100 -z-10 rounded-lg"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 border-2 border-stone-200 -z-10 rounded-lg"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800">
              Prazer, <span className="italic text-stone-600">Laryssa Ramos</span>
            </h2>
            
            <p className="text-stone-600 leading-relaxed text-lg">
              Você não precisa dar conta de tudo sozinho(a). A terapia é um espaço para <strong className="text-stone-800 font-medium">se reencontrar</strong>, respirar e construir uma vida com mais leveza.
            </p>
            
            <p className="text-stone-600 leading-relaxed text-lg">
              Sou espontânea e procuro trazer leveza durante as sessões, criando um ambiente seguro onde você pode ser você mesmo — sem máscaras, sem julgamento. Cuide-se com gentileza.
            </p>

            {/* Diferenciais */}
            <div className="flex flex-wrap gap-4 pt-2">
              {diferenciais.map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-full text-stone-700">
                  <span className="text-stone-500">{item.icon}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <ul className="space-y-3 pt-4">
              {destaques.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-stone-700">
                  <CheckCircle2 className="text-stone-400 w-5 h-5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <p className="font-serif text-xl italic text-stone-500">
                "Te ajudo a ter uma vida com mais autoconhecimento e sem ansiedade."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}