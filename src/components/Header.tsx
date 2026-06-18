import React from 'react';
import { Container } from './ui/LayoutBlocks';
import { Button } from './ui/Button';

export function Header() {
  const links = [
    { label: "La normativa", href: "#la-normativa" },
    { label: "Settori", href: "#settori" },
    { label: "Il servizio", href: "#servizi" },
    { label: "Perché noi", href: "#perche-noi" },
    { label: "Team", href: "#team" }
  ];

  return (
    <header className="relative z-50 bg-white shadow-sm border-b border-brand-border">
      <Container className="flex items-center justify-between h-[54px] md:h-[80px]">
        {/* Logo Container */}
        <a href="#" className="flex items-center shrink-0">
          <img src="/logos/logo-consulenti.png" alt="Consulenti Privacy" className="h-7 md:h-10 w-auto max-w-[140px] md:max-w-none object-contain" />
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

        {/* Mobile Contact CTA */}
        <Button 
          as="a" 
          href="#contatti" 
          onClick={(e) => { e.preventDefault(); document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' }); document.getElementById('nome-finale')?.focus(); }} 
          className="md:hidden !px-4 !py-2 text-xs shrink-0 ml-2"
        >
          Contattaci
        </Button>
      </Container>
    </header>
  );
}
