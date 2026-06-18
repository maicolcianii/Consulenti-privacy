import React from 'react';
import { ShieldAlert, ArrowRight } from 'lucide-react';
import { Container } from './ui/LayoutBlocks';

export function Topbar() {
  return (
    <div className="bg-brand-purple text-white py-2 border-b border-white/10 relative z-[60] text-sm">
      <Container className="flex flex-col sm:flex-row items-center justify-center text-center gap-1 sm:gap-2">
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 w-full justify-center">
          <div className="flex items-center gap-1.5 shrink-0 px-2">
            <ShieldAlert size={14} className="text-brand-purple-light animate-pulse flex-shrink-0" />
            <span className="font-semibold text-[#8A81DC] text-[12px] sm:text-sm">Scadenza adeguamento NIS2: 31 ottobre 2026.</span>
          </div>
          <span className="hidden sm:inline w-px h-4 bg-white/20"></span>
          <span className="hidden md:inline opacity-80 shrink-0">Da quella data scattano le ispezioni ACN e sanzioni fino a 10M€.</span>
          <button onClick={() => { 
            const heroQuiz = document.getElementById('hero-quiz');
            if (heroQuiz) {
               heroQuiz.scrollIntoView({ behavior: 'smooth' });
               window.dispatchEvent(new CustomEvent('reset-quiz'));
            }
           }} className="inline-flex items-center gap-1 font-medium border-b border-brand-purple-light hover:text-brand-purple-light transition-colors text-[12px] sm:text-sm shrink-0">
            Verifica se rientri <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px]" />
          </button>
        </div>
      </Container>
    </div>
  );
}
