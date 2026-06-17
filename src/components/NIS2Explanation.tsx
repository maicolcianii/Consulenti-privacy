import React, { useState, useEffect } from 'react';
import { AlertTriangle, ShieldOff, Scale } from 'lucide-react';
import { Container, Section } from './ui/LayoutBlocks';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{ d: number; h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    const targetDate = new Date('2026-10-31T23:59:59').getTime();

    const update = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          d: Math.floor(difference / (1000 * 60 * 60 * 24)),
          h: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          m: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          s: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });
      }
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="bg-gradient-to-r from-brand-purple to-brand-purple-mid text-white rounded-[16px] p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="max-w-md">
        <h4 className="text-xl font-bold mb-2">Tempo rimanente per completare l'adeguamento</h4>
        <p className="text-sm opacity-80 text-purple-100">Il percorso richiede mediamente diverse settimane: ogni mese senza azioni conta e aumenta il rischio.</p>
      </div>
      <div className="flex gap-4">
        {[
          { label: 'Giorni', value: timeLeft.d },
          { label: 'Ore', value: timeLeft.h },
          { label: 'Min', value: timeLeft.m },
          { label: 'Sec', value: timeLeft.s }
        ].map((block, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg w-14 h-16 md:w-16 md:h-20 flex items-center justify-center text-2xl md:text-3xl font-mono font-bold">
              {block.value.toString().padStart(2, '0')}
            </div>
            <span className="text-[10px] md:text-xs mt-2 uppercase tracking-wider font-medium opacity-80">{block.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function NIS2Explanation() {
  return (
    <Section id="la-normativa">
      <Container>
        {/* Intro */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-purple">Cos'è la NIS2 e perché devi agire ora</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            La Direttiva NIS2 (UE 2022/2555), recepita in Italia col <strong>D.Lgs. 138/2024</strong>, alza il livello minimo di cybersicurezza richiesto a migliaia di organizzazioni. 
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Non è un aggiornamento del GDPR: introduce obblighi rigorosi su governance del cyber rischio, gestione degli incidenti informatici e sicurezza della supply chain, con <strong className="text-brand-purple">responsabilità diretta e personale dei vertici aziendali</strong>.
          </p>
        </div>

        {/* Two Columns: Requirements & Risks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Who is obligated */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">Chi è obbligato</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-brand-tint border border-brand-border p-6 rounded-xl">
                <h4 className="font-bold text-brand-purple mb-2 flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-brand-purple text-white flex items-center justify-center text-xs">1</span> Settore di appartenenza</h4>
                <p className="text-sm text-gray-600">Devi operare in un settore definito "Essenziale" o "Importante" (Allegati I e II della Direttiva).</p>
              </div>
              <div className="bg-brand-tint border border-brand-border p-6 rounded-xl">
                <h4 className="font-bold text-brand-purple mb-2 flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-brand-purple text-white flex items-center justify-center text-xs">2</span> Dimensione</h4>
                <p className="text-sm text-gray-600">Superi congiuntamente &gt;50 dipendenti e &gt;10M€ di fatturato o bilancio annuo.</p>
              </div>
            </div>
            <div className="bg-purple-50 text-brand-purple-mid p-4 rounded-lg border-l-4 border-brand-purple text-sm font-medium leading-relaxed">
              Attenzione: in alcuni casi (art. 3, c. 8-9-10) si applica a prescindere dalle dimensioni. Inoltre, come fornitore di un'azienda regolata potresti essere obbligato indirettamente per effetto della sicurezza della supply chain.
            </div>
          </div>

          {/* What you risk */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">Cosa rischi</h3>
            <div className="space-y-4">
              <div className="flex gap-4 p-5 rounded-xl border border-gray-200">
                <div className="mt-1"><AlertTriangle className="text-brand-purple-light" /></div>
                <div>
                  <h4 className="font-bold mb-1">Sanzioni fino a 10M€</h4>
                  <p className="text-sm text-gray-600">Per i soggetti essenziali fino a 10 milioni o 2% del fatturato mondiale; per i soggetti importanti 7 milioni o 1,4%.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-xl border border-gray-200">
                <div className="mt-1"><Scale className="text-brand-purple-light" /></div>
                <div>
                  <h4 className="font-bold mb-1">Responsabilità personale (Art. 23)</h4>
                  <p className="text-sm text-gray-600">I vertici aziendali possono essere chiamati a rispondere personalmente per le mancate misure di sicurezza.</p>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-xl border border-gray-200">
                <div className="mt-1"><ShieldOff className="text-brand-purple-light" /></div>
                <div>
                  <h4 className="font-bold mb-1">Esclusione e danno reputazionale</h4>
                  <p className="text-sm text-gray-600">Perdita di commesse strategiche ed estromissione dalla catena di fornitura se non si offrono garanzie adeguate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8">La timeline delle scadenze</h3>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden md:block z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              
              {/* Step 1 */}
              <div className="bg-white border border-gray-200 p-5 rounded-xl relative">
                <div className="md:absolute top-[-44px] left-1/2 md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-gray-300 rounded-full hidden md:block"></div>
                <div className="text-sm font-bold text-gray-500 mb-1">Gennaio 2026</div>
                <div className="font-medium text-brand-black">Notifica incidenti al CSIRT locale</div>
              </div>

              {/* Step 2 */}
              <div className="bg-white border border-gray-200 p-5 rounded-xl relative">
                <div className="md:absolute top-[-44px] left-1/2 md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-gray-300 rounded-full hidden md:block"></div>
                <div className="text-sm font-bold text-gray-500 mb-1">28 Febbraio 2026</div>
                <div className="font-medium text-brand-black">Registrazione sul Portale ACN</div>
              </div>

              {/* Step 3 */}
              <div className="bg-white border border-gray-200 p-5 rounded-xl relative">
                <div className="md:absolute top-[-44px] left-1/2 md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-gray-300 rounded-full hidden md:block"></div>
                <div className="text-sm font-bold text-gray-500 mb-1">31 Maggio 2026</div>
                <div className="font-medium text-brand-black">Comunicazione attività e servizi forniti</div>
              </div>

              {/* Step 4 - Highlighted */}
              <div className="bg-brand-purple border border-brand-purple p-5 rounded-xl relative text-white shadow-lg transform md:-translate-y-2">
                <div className="md:absolute top-[-36px] left-1/2 md:-translate-x-1/2 w-6 h-6 bg-brand-purple border-4 border-brand-purple-light rounded-full hidden md:block"></div>
                <div className="text-sm font-bold text-brand-purple-light mb-1">31 Ottobre 2026</div>
                <div className="font-medium text-white mb-2">Misure base operative</div>
                <p className="text-xs text-purple-200">Scatta l'obbligo formale e iniziano le ispezioni ACN.</p>
              </div>

            </div>
          </div>
        </div>

        {/* Countdown */}
        <Countdown />

      </Container>
    </Section>
  );
}
