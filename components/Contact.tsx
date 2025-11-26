import React from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Como funciona a primeira sessão?",
    answer: "A primeira sessão é um momento de acolhimento e conhecimento. Vamos conversar sobre o que te trouxe à terapia, suas expectativas e como funciona o processo terapêutico. É um espaço seguro para você tirar todas as suas dúvidas."
  },
  {
    question: "Aceita convênios?",
    answer: "O atendimento é particular. No entanto, emito recibo para que você possa solicitar o reembolso junto ao seu plano de saúde, caso essa modalidade esteja disponível no seu contrato."
  },
  {
    question: "Qual a duração das sessões?",
    answer: "As sessões têm duração média de 50 minutos e ocorrem, geralmente, com frequência semanal."
  },
  {
    question: "Como agendar um horário?",
    answer: "Você pode entrar em contato diretamente pelo WhatsApp clicando no botão abaixo. Verificaremos a disponibilidade de horários que melhor se encaixam na sua rotina."
  }
];

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-stone-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-stone-800' : 'text-stone-600 group-hover:text-stone-800'}`}>
          {question}
        </span>
        <span className="text-stone-400 group-hover:text-stone-800 transition-colors">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-stone-500 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Contact() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-[0.2em] text-stone-500 uppercase">Dúvidas Frequentes</span>
          <h2 className="mt-4 text-4xl font-serif text-stone-800">Informações Importantes</h2>
        </div>

        <div className="mb-20">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Localização */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-serif text-stone-800 mb-4">Localização</h3>
          <p className="text-stone-600 mb-2">Consultório próprio em <strong>Santos/SP</strong></p>
          <p className="text-stone-500 text-sm">Atendimento presencial e online para todo o Brasil e exterior</p>
        </div>

        <div id="contact" className="bg-stone-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
           {/* Decorative circles */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-stone-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-stone-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>

           <div className="relative z-10">
             <h2 className="text-3xl md:text-4xl font-serif mb-6">Você não precisa dar conta de tudo sozinho(a)</h2>
             <p className="text-stone-300 mb-8 max-w-lg mx-auto text-lg">
               Cuide-se com gentileza. Dê o primeiro passo e vamos conversar sobre o que você está sentindo.
             </p>
             
             <a 
               href="https://wa.me/5513974164315" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-3 bg-white text-stone-900 px-8 py-4 rounded-sm font-semibold hover:bg-stone-100 transition-colors transform hover:-translate-y-1 duration-300 shadow-lg"
             >
               <MessageCircle className="w-5 h-5" />
               Agendar pelo WhatsApp
             </a>
           </div>
        </div>
      </div>
    </section>
  );
}