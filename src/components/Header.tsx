import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from './ui/LayoutBlocks';
import { Button } from './ui/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "La normativa", href: "#la-normativa" },
    { label: "Settori", href: "#settori" },
    { label: "Il servizio", href: "#servizi" },
    { label: "Perché noi", href: "#perche-noi" },
    { label: "Team", href: "#team" }
  ];

  return (
    <header className="relative z-50 bg-white shadow-sm border-b border-brand-border">
      <Container className="flex items-center justify-between h-[80px]">
        {/* Logo Container */}
        <a href="#" className="flex items-center">
          <img src="/logos/logo-consulenti.png" alt="Consulenti Privacy" className="h-10 w-auto" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {links.map((link, i) => (
              <a key={i} href={link.href} className="text-sm font-medium text-gray-600 hover:text-brand-purple transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <Button as="a" href="#contatti" onClick={(e) => { e.preventDefault(); document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' }); document.getElementById('nome-finale')?.focus(); }} className="!px-6 !py-2.5 text-sm">
            Parla con un esperto
          </Button>
        </nav>

        {/* Mobile Hamburger Dropdown */}
        <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-white border-b border-brand-border shadow-lg">
          <nav className="flex flex-col p-4">
            {links.map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="py-3 px-4 text-base font-medium text-gray-800 border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}
            <div className="p-4 pt-6">
              <Button as="a" href="#contatti" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' }); document.getElementById('nome-finale')?.focus(); }} className="w-full">
                Parla con un esperto
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
