import React from 'react';

export default function Testimonials() {
  const relatos = [
    '/assets/relato1.png',
    '/assets/relato2.png',
    '/assets/relato3.png'
  ];

  return (
    <section className="py-24 bg-brand-bg border-y border-stone-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-12">O que dizem os pacientes</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {relatos.map((src, i) => (
            <div key={i} className="bg-white p-4 shadow-sm rounded-lg overflow-hidden">
              <img 
                src={src} 
                alt={`Relato de paciente ${i + 1}`} 
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}