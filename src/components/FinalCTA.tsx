import React from 'react';
import { Container, Section } from './ui/LayoutBlocks';
import { LeadForm } from './LeadForm';

export function FinalCTA() {
  return (
    <Section bg="dark" className="border-t border-white/10" id="contatti">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full flex-1 lg:pr-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Non aspettare la scadenza: <span className="text-brand-purple-light">ogni mese conta.</span>
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-md font-medium leading-relaxed">
              Il decreto è in vigore. Il tempo per adeguare i processi, formare il personale e mappare i fornitori è adesso. 
              Richiedi subito un'analisi per capire se la tua azienda è coinvolta e quali sono le lacune di sicurezza.
            </p>
            <div className="bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-sm max-w-md">
               <h4 className="font-bold text-white mb-2">Perché agire in anticipo?</h4>
               <ul className="space-y-2 text-sm text-purple-100">
                 <li>• Eviti colli di bottiglia nei mesi vicini alla scadenza.</li>
                 <li>• Proteggi subito l'azienda dai cyber attacchi e mantieni l'operatività.</li>
                 <li>• Dimostri proattività ai partner commerciali ed eviti l'esclusione.</li>
               </ul>
            </div>
          </div>

          <div className="w-full md:max-w-md lg:max-w-lg shrink-0">
             {/* Using the standard LeadForm but with pure white background */}
             <LeadForm 
                formId="finale" 
                title="Parla con un esperto"
                subtitle="Ti ricontattiamo entro 24 ore lavorative."
                buttonText="Parla con un esperto"
                dark={true}
             />
          </div>
        </div>
      </Container>
    </Section>
  );
}
