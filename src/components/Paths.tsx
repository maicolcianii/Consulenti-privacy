import React, { useRef } from 'react';
import { BookOpen, Activity, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container, Section } from './ui/LayoutBlocks';
import { Button } from './ui/Button';

export function Paths({ onOpenGuide }: { onOpenGuide: () => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Section bg="tint" id="percorsi">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
          <div className="max-w-2xl text-left md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tre modi per metterti al sicuro dalla scadenza NIS2</h2>
            <div className="w-20 h-1 bg-brand-purple rounded-full"></div>
          </div>
          
          <div className="flex md:hidden items-center gap-2 mt-4">
            <button aria-label="Scorri a sinistra" onClick={() => scroll('left')} className="p-3 bg-white border border-gray-200 rounded-full text-brand-purple shadow-sm">
              <ChevronLeft size={20} />
            </button>
            <button aria-label="Scorri a destra" onClick={() => scroll('right')} className="p-3 bg-white border border-gray-200 rounded-full text-brand-purple shadow-sm">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 gap-6 lg:gap-8 pb-4 md:pb-0">
          {/* Path 1 */}
          <div className="w-full min-w-full md:min-w-0 snap-center snap-always shrink-0 bg-white rounded-[16px] border border-brand-border p-[30px] shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
            <div className="text-6xl font-extrabold text-brand-tint absolute top-4 right-4 z-0">01</div>
            <div className="relative z-10 flex-1">
              <div className="w-12 h-12 bg-purple-50 text-brand-purple rounded-xl flex items-center justify-center mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Comprendere la normativa</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Capisci cos'è davvero la NIS2, chi è obbligato e quali sono gli step richiesti all'azienda.</p>
            </div>
            <Button variant="secondary" onClick={onOpenGuide} className="w-full relative z-10 mt-auto">
              Scarica la guida
            </Button>
          </div>

          {/* Path 2 */}
          <div className="w-full min-w-full md:min-w-0 snap-center snap-always shrink-0 bg-white rounded-[16px] border border-brand-border p-[30px] shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
            <div className="text-6xl font-extrabold text-brand-tint absolute top-4 right-4 z-0">02</div>
            <div className="relative z-10 flex-1">
              <div className="w-12 h-12 bg-purple-50 text-brand-purple rounded-xl flex items-center justify-center mb-6">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Allineamento legale</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Allinea l'organizzazione con un programma completo di procedure, policy aziendali e formazione.</p>
            </div>
            <Button variant="secondary" as="a" href="#servizi" className="w-full relative z-10 mt-auto">
              Scopri i servizi
            </Button>
          </div>

          {/* Path 3 */}
          <div className="w-full min-w-full md:min-w-0 snap-center snap-always shrink-0 bg-white rounded-[16px] border border-brand-purple-light p-[30px] shadow-lg shadow-brand-purple/5 relative flex flex-col ring-1 ring-brand-purple/10 lg:scale-[1.02]">
            <div className="text-6xl font-extrabold text-brand-tint absolute top-4 right-4 z-0 opacity-50">03</div>
            <div className="relative z-10 flex-1">
              <div className="w-12 h-12 bg-brand-purple text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Play size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Avviare l'adeguamento</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Parti subito col percorso guidato legale+IT per essere pienamente conforme in tempo.</p>
            </div>
            <Button variant="primary" as="a" href="#contatti" onClick={(e) => { e.preventDefault(); document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' }); document.getElementById('nome-finale')?.focus(); }} className="w-full relative z-10 mt-auto">
              Parla con un esperto
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
