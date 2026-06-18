import React, { useRef } from 'react';
import { Target, Compass, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container, Section } from './ui/LayoutBlocks';
import { Button } from './ui/Button';

export function WhyUs() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Section id="perche-noi" className="pt-0 md:pt-24">
      <Container>
        <div className="flex md:hidden justify-end gap-2 mb-4">
          <button aria-label="Scorri a sinistra" onClick={() => scroll('left')} className="p-3 bg-white border border-gray-200 rounded-full text-brand-purple shadow-sm">
            <ChevronLeft size={20} />
          </button>
          <button aria-label="Scorri a destra" onClick={() => scroll('right')} className="p-3 bg-white border border-gray-200 rounded-full text-brand-purple shadow-sm">
            <ChevronRight size={20} />
          </button>
        </div>

        <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 gap-6 mb-16 pb-4 md:pb-0">
          
          {/* Mission */}
          <div className="w-full min-w-full snap-always md:min-w-0 snap-center bg-white p-8 md:p-10 rounded-[20px] border border-brand-border text-center flex flex-col items-center shrink-0">
            <div className="w-16 h-16 bg-brand-tint text-brand-purple rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 font-sans text-brand-black">La nostra Mission</h3>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              Semplifichiamo il lavoro delle aziende, rendendo i processi legati alla compliance e alla sicurezza più chiari, più sicuri e davvero funzionali al business.
            </p>
          </div>

          {/* Vision (Highlighted) */}
          <div className="w-full min-w-full snap-always md:min-w-0 snap-center bg-gradient-to-b from-brand-purple to-brand-purple-mid text-white p-8 md:p-10 rounded-[20px] text-center flex flex-col items-center shadow-2xl lg:scale-[1.02] z-10 shrink-0">
            <div className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 border border-white/20">
              <Compass size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 font-sans">La nostra Vision</h3>
            <p className="text-white/90 leading-relaxed max-w-sm font-medium">
              Guidiamo le aziende con competenza e innovazione, proiettandole verso il futuro per trasformare obblighi normativi e complessità tecnologica in opportunità di crescita.
            </p>
          </div>

          {/* Values */}
          <div className="w-full min-w-full snap-always md:min-w-0 snap-center bg-white p-8 md:p-10 rounded-[20px] border border-brand-border text-center flex flex-col items-center shrink-0">
            <div className="w-16 h-16 bg-brand-tint text-brand-purple rounded-2xl flex items-center justify-center mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 font-sans text-brand-black">I nostri Valori</h3>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              Ridisegnare il modo in cui le organizzazioni vivono la multicompliance, diventando il partner unico e di riferimento per chi vuole guardare avanti sereno e protetto.
            </p>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="bg-brand-tint rounded-[20px] p-8 lg:p-12 border border-brand-border grid grid-cols-2 lg:flex lg:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-center lg:text-left">
            <h4 className="text-3xl md:text-4xl font-extrabold text-brand-purple mb-1">500+</h4>
            <p className="font-semibold text-gray-700 text-sm md:text-base">Clienti attivi</p>
          </div>
          <div className="hidden lg:block w-px h-16 bg-gray-300"></div>
          <div className="text-center lg:text-left">
            <h4 className="text-3xl md:text-4xl font-extrabold text-brand-purple mb-1">4</h4>
            <p className="font-semibold text-gray-700 text-sm md:text-base">Sedi fisiche</p>
          </div>
          <div className="col-span-2 lg:col-span-1 hidden lg:block w-px h-16 bg-gray-300"></div>
          <div className="text-center lg:text-left">
            <h4 className="text-xl md:text-2xl font-extrabold text-brand-purple mb-1 leading-tight border-b-2 border-brand-purple-light inline-block w-max">Legal + IT</h4>
            <p className="font-semibold text-gray-700 text-sm md:text-base">Team multidisciplinare</p>
          </div>
          <div className="hidden lg:block w-px h-16 bg-gray-300"></div>
          <div className="text-center lg:text-left">
            <h4 className="text-xl md:text-2xl font-extrabold text-brand-purple mb-1 leading-tight">ISO 27001</h4>
            <p className="font-semibold text-gray-700 text-sm md:text-base">Auditor interno</p>
          </div>
        </div>

        <div className="text-center">
          <Button as="a" href="#contatti" onClick={(e) => { e.preventDefault(); document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' }); document.getElementById('nome-finale')?.focus(); }}>Parla con un esperto</Button>
        </div>
      </Container>
    </Section>
  );
}
