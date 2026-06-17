import React from 'react';
import { BookOpen, Activity, Play } from 'lucide-react';
import { Container, Section } from './ui/LayoutBlocks';
import { Button } from './ui/Button';

export function Paths({ onOpenGuide }: { onOpenGuide: () => void }) {
  return (
    <Section bg="tint" id="percorsi">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tre modi per metterti al sicuro dalla scadenza NIS2</h2>
          <div className="w-20 h-1 bg-brand-purple rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Path 1 */}
          <div className="bg-white rounded-[16px] border border-brand-border p-[30px] shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
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
          <div className="bg-white rounded-[16px] border border-brand-border p-[30px] shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
            <div className="text-6xl font-extrabold text-brand-tint absolute top-4 right-4 z-0">02</div>
            <div className="relative z-10 flex-1">
              <div className="w-12 h-12 bg-purple-50 text-brand-purple rounded-xl flex items-center justify-center mb-6">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Valutare la sicurezza</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">Misura lo stato della tua sicurezza informatica e procedurale con il Cybersecurity Assessment ®.</p>
            </div>
            <Button variant="secondary" as="a" href="#servizi" className="w-full relative z-10 mt-auto">
              Scopri l'Assessment
            </Button>
          </div>

          {/* Path 3 */}
          <div className="bg-white rounded-[16px] border border-brand-purple-light p-[30px] shadow-lg shadow-brand-purple/5 relative flex flex-col ring-1 ring-brand-purple/10 scale-[1.02]">
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
