import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { LeadForm } from './LeadForm';

export function GuideModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-brand-purple/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl w-full max-w-[900px] max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row z-10 animate-in fade-in zoom-in duration-300">
        
        {/* Left Side: Magnet Info */}
        <div className="bg-brand-tint p-8 md:p-12 md:w-5/12 flex flex-col justify-center">
          <span className="inline-block px-3 py-1 bg-brand-purple text-white text-xs font-bold rounded-full w-max mb-4 uppercase tracking-wider">Download PDF</span>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-purple mb-4 leading-tight">
            NIS2: la guida operativa all'adeguamento
          </h2>
          <p className="text-gray-700 mb-6 font-medium">
            I passi concreti per essere conforme entro il 31 ottobre 2026 ed evitare sanzioni fino a 10 milioni di euro.
          </p>
          <ul className="space-y-3">
            {[
              "Chi rientra nel perimetro",
              "Le misure di sicurezza di base",
              "La timeline delle scadenze ACN",
              "Gli errori da evitare"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="text-brand-purple-light mt-0.5">●</span> {item}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Right Side: Form */}
        <div className="p-8 md:p-10 md:w-7/12 relative">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-brand-purple bg-gray-50 hover:bg-gray-100 rounded-full transition">
            <X size={20} />
          </button>
          
          <LeadForm 
            formId="magnet" 
            title="Ricevi la guida" 
            subtitle="Compila i campi per ricevere immediatamente il PDF al tuo indirizzo email."
            buttonText="Scarica il PDF"
            className="!border-none !shadow-none !p-0"
            downloadUrl="https://drive.google.com/uc?export=download&id=1uLfWSVxwQIrWcJpzW_Yngt-gic6ynZz2"
          />
        </div>
      </div>
    </div>
  );
}
