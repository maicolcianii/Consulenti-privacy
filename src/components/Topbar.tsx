import React from 'react';
import { ShieldAlert, ArrowRight } from 'lucide-react';
import { Container } from './ui/LayoutBlocks';

export function Topbar() {
  return (
    <div className="bg-brand-purple text-white py-2.5 border-b border-white/10 relative z-[60] text-sm">
      <Container className="flex flex-col sm:flex-row items-center justify-center text-center gap-2">
        <div className="flex items-center gap-2">
          <ShieldAlert size={16} className="text-brand-purple-light animate-pulse" />
          <span className="font-semibold text-[#8A81DC]">Scadenza adeguamento NIS2: 31 ottobre 2026.</span>
        </div>
        <span className="hidden sm:inline opacity-80">Da quella data scattano le ispezioni ACN e sanzioni fino a 10M€.</span>
        <button onClick={() => { 
          const heroQuiz = document.getElementById('hero-quiz');
          if (heroQuiz) {
             heroQuiz.scrollIntoView({ behavior: 'smooth' });
             window.dispatchEvent(new CustomEvent('reset-quiz'));
          }
         }} className="inline-flex items-center gap-1 ml-2 font-medium border-b border-brand-purple-light hover:text-brand-purple-light transition-colors">
          Verifica se rientri <ArrowRight size={14} />
        </button>
      </Container>
    </div>
  );
}
