import React from 'react';
import { Presentation, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Container, Section } from './ui/LayoutBlocks';

export function Services() {
  return (
    <Section bg="tint" id="servizi">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Come ti accompagniamo all'adeguamento NIS2</h2>
          <p className="text-lg text-gray-600">
            Un percorso scalabile e completo, guidato da auditor certificati ed esperti legali, per trasformare l'obbligo in un concreto miglioramento della sicurezza informatica.
          </p>
        </div>

        {/* The 4 Steps */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-4 gap-4 mb-16 relative pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-brand-purple/10 z-0"></div>
          
          {[
            "Autovalutazione e gap analysis",
            "Cybersecurity Assessment ®",
            "Adeguamento organizzativo (policy e formazione)",
            "Audit fornitori e mantenimento nel tempo"
          ].map((title, i) => (
             <div key={i} className="min-w-[85%] sm:min-w-[250px] md:min-w-0 snap-center shrink-0 bg-white p-5 rounded-2xl border border-brand-border relative z-10 text-center shadow-sm hover:shadow-md transition-shadow">
               <div className="w-14 h-14 bg-brand-purple text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-white shadow-sm">
                 {i + 1}
               </div>
               <h4 className="font-bold text-sm leading-snug">{title}</h4>
             </div>
          ))}
        </div>

        {/* The two services cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* Service 1 */}
          <div className="bg-gradient-to-br from-brand-purple to-brand-purple-mid text-white p-8 md:p-10 rounded-[20px] shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <Presentation className="text-brand-purple-light" /> NIS2 Assessment
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                "Analisi di applicabilità formale e Gap Analysis rispetto alla direttiva",
                "Redazione procedure operative per la gestione e notifica incidenti",
                "Stesura policy aziendali, governance e formazione del personale",
                "Audit e protocolli per la sicurezza dei fornitori strategici"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-brand-purple-light shrink-0 mt-0.5" />
                  <span className="opacity-90 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 md:p-10 rounded-[20px] shadow-lg border border-brand-border relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldCheck size={120} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-brand-purple relative z-10">
              <ShieldCheck className="text-brand-purple-light" /> Cybersecurity Assessment ®
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
              Valuta lo stato della sicurezza informatica, identifica le vulnerabilità critiche e fornisce raccomandazioni strategiche chiare. <strong>Nessun falso allarme:</strong> un'analisi organizzativa ispirata agli standard <strong>ISO/IEC 27001, NIST CSF e NIS2</strong>, senza test tecnici intrusivi che bloccano la produzione e nessun vulnerability scan automatico venduto per analisi approfondita.
            </p>
            <ul className="space-y-4 relative z-10">
              {[
                "Audit strutturato approfondito con intervista al personale IT",
                "Report dettagliato di vulnerabilità e aree di miglioramento",
                "Colloquio restitutivo sui risultati per pianificare le ottimizzazioni mirate"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 size={20} className="text-brand-purple shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Honest Callout */}
        <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-brand-purple text-sm text-gray-700 leading-relaxed max-w-4xl mx-auto shadow-sm">
          <strong>Trasparenza operativa:</strong> Gestiamo internamente in modo completo la compliance, l'assessment e la governance con il nostro team Legal + IT (Auditor ISO 27001). Non siamo un MSSP provider: per l'implementazione pratica della remediation tecnica (software, firewall, infrastrutture) collaboreremo in totale sinergia con la cybersecurity company che già ti segue, o sapremo indirizzarti verso un partner tecnologico certificato.
        </div>

      </Container>
    </Section>
  );
}
