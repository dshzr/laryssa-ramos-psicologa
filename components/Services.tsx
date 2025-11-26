import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Users, Baby, GraduationCap, Sparkles, AlertCircle, Focus, Puzzle, Shield } from 'lucide-react';

// Público-alvo
const publicoAlvo = [
  {
    icon: <Baby className="w-10 h-10" />,
    title: "Crianças",
    description: "A partir de 03 anos. Atendimento lúdico e acolhedor para os pequenos."
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Adolescentes e Adultos",
    description: "Espaço seguro para trabalhar questões emocionais em qualquer fase da vida."
  },
  {
    icon: <GraduationCap className="w-10 h-10" />,
    title: "Supervisão",
    description: "Orientação técnica para outros profissionais de psicologia."
  }
];

// Especialidades
const especialidades = [
  { icon: <Brain className="w-6 h-6" />, title: "Ansiedade", destaque: true },
  { icon: <Sparkles className="w-6 h-6" />, title: "Autoconhecimento", destaque: true },
  { icon: <Focus className="w-6 h-6" />, title: "TDAH" },
  { icon: <Puzzle className="w-6 h-6" />, title: "TEA" },
  { icon: <AlertCircle className="w-6 h-6" />, title: "TOC" },
  { icon: <Shield className="w-6 h-6" />, title: "TOD" },
  { icon: <Heart className="w-6 h-6" />, title: "Psicopatologias diversas" }
];

// Motivos para fazer terapia
const motivosTerapia = [
  "Autoconhecimento",
  "Melhora nos relacionamentos",
  "Aprender a lidar com sentimentos e emoções",
  "Superar medos e dificuldades",
  "Escuta profissional e técnica"
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        
        {/* Para quem é a terapia? */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-[0.2em] text-stone-500 uppercase">Para quem é a terapia?</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-stone-800">Público-Alvo</h2>
          <p className="mt-4 text-stone-600">Atendo diferentes públicos, sempre com acolhimento e respeito.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {publicoAlvo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <div className="text-stone-400 group-hover:text-stone-800 transition-colors mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif text-stone-800 mb-3">{item.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Especialidades */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold tracking-[0.2em] text-stone-500 uppercase">Especialidades</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-stone-800">Tratamentos</h2>
          <p className="mt-4 text-stone-600">Trabalho com diversas questões emocionais e comportamentais.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {especialidades.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`flex items-center gap-3 px-6 py-4 rounded-full shadow-sm transition-all hover:shadow-md ${
                item.destaque 
                  ? 'bg-stone-800 text-white' 
                  : 'bg-white text-stone-700 hover:bg-stone-100'
              }`}
            >
              <span className={item.destaque ? 'text-stone-300' : 'text-stone-400'}>{item.icon}</span>
              <span className="font-medium">{item.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Por que agendar? - 5 Motivos */}
        <div className="bg-white p-12 rounded-2xl shadow-sm border border-stone-100 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-sm font-semibold tracking-[0.2em] text-stone-500 uppercase">Por que agendar?</span>
            <h3 className="text-3xl font-serif text-stone-800 mb-2 mt-2">5 Motivos para fazer terapia</h3>
            <p className="text-stone-500">Você não precisa dar conta de tudo hoje. Dê o primeiro passo.</p>
          </div>
          <ul className="space-y-4">
            {motivosTerapia.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-stone-700">
                <span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-800 font-serif font-bold text-sm flex-shrink-0">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}