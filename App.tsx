import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Floating WhatsApp Button
const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/5513974164315"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition-all hover:scale-110 flex items-center justify-center"
    aria-label="Falar no WhatsApp"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="lucide lucide-message-circle"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  </a>
);

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-200 selection:text-stone-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;