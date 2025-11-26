import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Mim', href: '#about' },
    { name: 'Especialidades', href: '#services' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif italic tracking-wide text-stone-800">
          Laryssa Ramos
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-stone-600 hover:text-stone-900 tracking-widest uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 bg-stone-800 text-stone-50 text-sm tracking-widest uppercase hover:bg-stone-700 transition-colors rounded-sm"
          >
            Agendar
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-stone-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-8 space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-stone-600 font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-8 py-3 bg-stone-800 text-white text-sm uppercase tracking-widest"
            onClick={() => setIsMenuOpen(false)}
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </header>
  );
}