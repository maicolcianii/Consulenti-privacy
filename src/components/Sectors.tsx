import React from 'react';
import * as Icons from 'lucide-react';
import { Container, Section } from './ui/LayoutBlocks';
import { Button } from './ui/Button';
import { SECTORS_ESSENTIAL, SECTORS_IMPORTANT } from '../data/content';

export function Sectors() {
  
  const renderIcon = (iconName: string) => {
    // @ts-ignore
    const IconComponent = Icons[iconName] || Icons.HelpCircle;
    return <IconComponent size={24} className="text-brand-purple" strokeWidth={1.5} />;
  };

  return (
    <Section bg="tint" id="settori">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A quali settori si applica?</h2>
          <p className="text-lg text-gray-600">
            La Direttiva classifica le organizzazioni in due macro-categorie, ognuna con requisiti e sanzioni proporzionate.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {/* Alta criticità */}
          <div>
            <h3 className="text-2xl font-bold text-brand-purple mb-6 pb-2 border-b-2 border-brand-purple-light inline-block">
              Settori ad Alta Criticità (Soggetti Essenziali)
            </h3>
            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-4 lg:grid-cols-5 gap-4 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
              {SECTORS_ESSENTIAL.map((sector, i) => (
                <div key={i} className="min-w-[140px] sm:min-w-[160px] md:min-w-0 snap-center shrink-0 bg-white p-5 rounded-[14px] border border-brand-border text-center flex flex-col items-center justify-center gap-3 hover:border-brand-purple-light hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-full bg-brand-tint flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                    {renderIcon(sector.icon)}
                  </div>
                  <span className="font-semibold text-sm leading-tight text-brand-black">{sector.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Importanti */}
          <div>
            <h3 className="text-2xl font-bold text-brand-purple mb-6 pb-2 border-b-2 border-brand-purple-light inline-block">
              Altri Settori Critici (Soggetti Importanti)
            </h3>
            <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-4 gap-4 pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
              {SECTORS_IMPORTANT.map((sector, i) => (
                <div key={i} className="min-w-[140px] sm:min-w-[160px] md:min-w-0 snap-center shrink-0 bg-white p-5 rounded-[14px] border border-brand-border text-center flex flex-col items-center justify-center gap-3 hover:border-brand-purple-light hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-full bg-brand-tint flex items-center justify-center group-hover:bg-purple-50 transition-colors">
                    {renderIcon(sector.icon)}
                  </div>
                  <span className="font-semibold text-sm leading-tight text-brand-black">{sector.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Callout & Test Link */}
        <div className="bg-brand-purple text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h4 className="text-xl font-bold mb-2">Non sei sicuro di rientrare?</h4>
            <p className="text-purple-100 opacity-90">
              Anche se il tuo settore primario non appare nell'elenco, potresti essere soggetto agli obblighi tramite i tuoi clienti (obblighi di supply chain). 
            </p>
          </div>
          <Button as="button" onClick={() => { 
            const heroQuiz = document.getElementById('hero-quiz');
            if (heroQuiz) {
               heroQuiz.scrollIntoView({ behavior: 'smooth' });
               window.dispatchEvent(new CustomEvent('reset-quiz'));
            }
          }} variant="primary" className="!bg-white !text-brand-purple hover:!bg-brand-tint whitespace-nowrap shadow-none">
            Verifica se rientri
          </Button>
        </div>
      </Container>
    </Section>
  );
}
