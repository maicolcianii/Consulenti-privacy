import React, { useState, useEffect } from 'react';
import { ShieldCheck, MapPin, Download, CheckCircle2, RotateCcw } from 'lucide-react';
import { Container } from './ui/LayoutBlocks';
import { Button } from './ui/Button';
import { LeadForm } from './LeadForm';

type Answer = "Sì" | "No" | "Non so" | null;

export function Hero({ onOpenGuide }: { onOpenGuide: () => void }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ d1: null as Answer, d2: null as Answer, d3: null as Answer, d4: null as Answer });

  useEffect(() => {
    const handleReset = () => {
      setStep(1);
      setAnswers({ d1: null, d2: null, d3: null, d4: null });
    };
    window.addEventListener('reset-quiz', handleReset);
    return () => window.removeEventListener('reset-quiz', handleReset);
  }, []);

  const handleAnswer = (question: keyof typeof answers, val: Answer) => {
    setAnswers(prev => ({ ...prev, [question]: val }));
    setTimeout(() => {
      if (step < 4) setStep(step + 1);
      else setStep(5); // Show Result + Form
    }, 300);
  };

  const calculateResult = () => {
    const { d1, d2, d3, d4 } = answers;
    if (d1 !== "No" && d2 === "Sì" && d3 === "Sì") {
      return {
        level: "high",
        text: "Rientri molto probabilmente nel perimetro NIS2 come soggetto essenziale o importante.",
        color: "bg-brand-tint border-brand-purple"
      };
    }
    if (d4 === "Sì") {
      return {
        level: "medium",
        text: "Come fornitore di un soggetto regolato potresti essere obbligato indirettamente.",
        color: "bg-brand-tint border-brand-purple-light"
      };
    }
    return {
      level: "low",
      text: "Probabilmente non rientri direttamente, ma attenzione a eccezioni e obblighi indiretti: conviene verificare.",
      color: "bg-purple-50 border-brand-purple-light"
    };
  };

  return (
    <section className="relative bg-gradient-to-br from-brand-purple via-brand-purple-mid to-brand-purple-light overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Background graphic */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 800 800" className="w-[120%] h-auto max-w-[800px] stroke-white" fill="none" strokeWidth="2">
          <circle cx="400" cy="400" r="300" strokeDasharray="10 15" />
          <circle cx="400" cy="400" r="200" />
          <circle cx="400" cy="400" r="100" strokeDasharray="5 10" />
          <path d="M400 100 L400 0 M400 700 L400 800 M100 400 L0 400 M700 400 L800 400" strokeWidth="4" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Copy Side */}
          <div className="w-full lg:w-1/2 text-white">
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              ADEGUAMENTO NIS2 & CYBERSECURITY ASSESSMENT
            </span>
            <h1 className="text-4xl md:text-[50px] font-extrabold leading-[1.1] tracking-tight mb-6">
              Adegua la tua azienda alla <span className="text-brand-purple-light">NIS2 entro il 31 ottobre 2026</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light mb-8 max-w-xl">
              Esperti legali e informatici ti affiancano nell'adeguamento alla Direttiva NIS2 e nel Cybersecurity Assessment, dall'analisi al mantenimento della conformità.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button as="button" onClick={() => { document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' }); document.getElementById('nome-finale')?.focus(); }} variant="primary" className="!bg-white !text-brand-purple !shadow-white/20 hover:!bg-gray-50 text-base">
                Parla con un esperto
              </Button>
              <Button variant="ghost" onClick={onOpenGuide} className="gap-2 group text-base">
                Scarica la guida NIS2 <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs md:text-sm font-medium text-white/80 border-t border-white/20 pt-6">
              <div className="flex items-center gap-1.5"><ShieldCheck size={18} className="text-brand-purple-light" /> Oltre 500 aziende ci hanno scelto</div>
              <div className="flex items-center gap-1.5"><ShieldCheck size={18} className="text-brand-purple-light" /> Team legale + IT, Auditor ISO 27001</div>
              <div className="flex items-center gap-1.5"><MapPin size={18} className="text-brand-purple-light" /> Rimini · Bologna · Milano · Roma</div>
            </div>
          </div>

          {/* Form Side - The Quiz */}
          <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0" id="hero-quiz">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-purple-light/20 blur-3xl rounded-[20px]"></div>
              
              <div className="relative z-10 bg-white rounded-2xl border border-brand-border p-6 md:p-8 shadow-xl">
                
                {/* Wizard Steps */}
                {step <= 4 && (
                  <div>
                    {/* Progress Bar */}
                    <div className="w-full bg-brand-tint h-1.5 rounded-full mb-6 overflow-hidden">
                      <div className="h-full bg-brand-purple transition-all duration-300" style={{ width: `${(step / 4) * 100}%` }}></div>
                    </div>

                    <div className="text-brand-purple-light font-bold text-xs uppercase tracking-wider mb-2">Verifica in 1 minuto (Domanda {step}/4)</div>
                    
                    <h3 className="text-xl font-bold mb-6 text-brand-black min-h-[60px]">
                      {step === 1 && "Il tuo settore rientra tra quelli regolati (energia, digitale, sanità, logistica, ecc.)?"}
                      {step === 2 && "La tua azienda ha più di 50 dipendenti?"}
                      {step === 3 && "Il fatturato o il bilancio annuo supera i 10 milioni di euro?"}
                      {step === 4 && "Sei fornitore di un'azienda che rientra nella NIS2?"}
                    </h3>

                    <div className="flex flex-col gap-3">
                      <button onClick={() => handleAnswer(`d${step}` as keyof typeof answers, "Sì")} className="py-3.5 px-6 rounded-xl border border-gray-200 hover:border-brand-purple hover:bg-purple-50 hover:text-brand-purple font-medium transition-all text-left">Sì</button>
                      <button onClick={() => handleAnswer(`d${step}` as keyof typeof answers, "No")} className="py-3.5 px-6 rounded-xl border border-gray-200 hover:border-brand-purple hover:bg-purple-50 hover:text-brand-purple font-medium transition-all text-left">No</button>
                      {(step === 1 || step === 4) && (
                        <button onClick={() => handleAnswer(`d${step}` as keyof typeof answers, "Non so")} className="py-3.5 px-6 rounded-xl border border-gray-200 hover:border-brand-purple hover:bg-purple-50 hover:text-brand-purple font-medium transition-all text-left">Non so</button>
                      )}
                    </div>
                  </div>
                )}

                {/* Results & Lead Form */}
                {step === 5 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className={`p-4 rounded-xl mb-6 border-l-4 ${calculateResult().color}`}>
                      <h3 className="text-brand-purple font-bold text-sm mb-1 flex items-center gap-1.5"><CheckCircle2 size={16}/> Risultato Test</h3>
                      <p className="text-sm text-gray-700 leading-snug">{calculateResult().text}</p>
                    </div>
                    
                    <LeadForm 
                      formId="hero_quiz" 
                      title="Ricevi la validazione del risultato" 
                      subtitle="" 
                      buttonText="Parla con un esperto"
                      className="!p-0 !border-none !shadow-none !bg-transparent"
                    />

                    <div className="flex justify-between items-center text-sm mt-4 border-t border-gray-100 pt-4">
                      <button onClick={() => { setStep(1); setAnswers({d1:null, d2:null, d3:null, d4:null}); }} className="flex items-center gap-1 text-gray-500 hover:text-brand-purple transition-colors shrink-0">
                        <RotateCcw size={14} /> Rifai il test
                      </button>
                      <p className="text-[10px] text-gray-400 max-w-[65%] text-right leading-[1.2]">Il risultato è puramente indicativo e non sostituisce una valutazione professionale della reale applicabilità della Direttiva NIS2.</p>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
